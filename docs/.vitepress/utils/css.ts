import * as path from 'path';
import * as fs from 'fs';
import less from 'less';
import postcss, { Declaration } from 'postcss';
import { PluginWithParams } from 'markdown-it';
import Token from 'markdown-it/lib/token';
import mdContainer from 'markdown-it-container';
import deasync from 'deasync';
import { parsePair, root } from './common';


/**
 * less编译
 * @param filepath 
 * @returns 编译结果
 */
export const lessRenderSync = (filepath: string) => {
    if (!fs.existsSync(filepath)) return '';
    const source = fs.readFileSync(filepath, { encoding: 'utf-8' });
    try {
        let css = '';
        less.render(source, {
            syncImport: true,
            paths: [
                'node_modules',
                path.dirname(filepath)
            ]
        }, (err, res) => {
            if (err) {
                throw err;
            }
            css = res.css;
        });
        deasync.loopWhile(() => {
            return !css;
        });
        return css;
        // const res = deasync<string, Less.Options, Less.RenderOutput>(less.render.bind(less))(filepath, {
        //     syncImport: true,
        //     paths: [
        //         'node_modules',
        //         path.dirname(filepath)
        //     ]
        // });
        // return res.css;
    } catch (e) {
        return '';
    }
};

const BlockRE = /title:(.*)\n.*type:(.*)/;

interface TemplateBlockItem {
    selector: string;
    items: {
        prop: string;
        value: string;
    }[];
}
interface TemplateBlock {
    title: string;
    type: string;
    items: TemplateBlockItem[];
}

/**
 * 解析模板 获取关键字段
 * @param content 
 * @returns 
 */
export const compileTemplate = (content: string) => {
    const root = postcss().process(content).root;
    return root.nodes.reduce((res, item) => {
        if (item.type === 'comment' && BlockRE.test(item.text)) {
            const [_, title, type] = item.text.match(BlockRE);
            const block = {
                title: title.trim(),
                type: type.trim(),
                items: []
            };
            res.push(block);
        }
        if (item.type === 'rule' && res.length) {
            const block = res.slice(-1)[0];
            block.items.push({
                selector: item.selector,
                items: item.nodes
                    .filter(i => i.type === 'decl')
                    .map((i: Declaration) => {
                        const { prop, value } = i;
                        return {
                            prop,
                            value
                        };
                    })
            });
        }
        return res;
    }, [] as TemplateBlock[]);
};

interface CSSAPIDesc {
    path: string;
    block: string;
}
export const mdCssDocPlugin: PluginWithParams = (md) => {
    const flag = 'css-api';
    // const filemap = new Map<string, TemplateBlock[]>();

    md.use(mdContainer, 'css-api', {
        validate(params: string) {
            return params.trim().startsWith(flag);
        },
        render(tokens: Token[], idx: number) {
            const token = tokens[idx];
            if (token.info.trim().startsWith(flag)) {
                const info = parsePair<CSSAPIDesc>(token.info.trim().replace(flag, ''));
                const { path: relativePath, block: blockName } = info;
                const absolutePath = path.join(root, relativePath);

                const cssContent = lessRenderSync(absolutePath);
                const blocks = compileTemplate(cssContent);
                const block = blocks.find(b => b.type === blockName);

                if (!block) return '';
                
                const tableData = block.items.map(i => {
                    const { selector, items } = i;
                    return {
                        // class: selector,
                        // todo 转移字符
                        class: selector.replace(/\\/g, ''),
                        // property: items.map(i => `${i.prop}: ${i.value};`).join('\n')
                        property: items
                    };
                });
                // todo: 加上标题...
                return `
                <co-class-api
                    title='${block.title}'
                    :tableData='${JSON.stringify(tableData)}' />
                `;
            }
            return '';
            // if (tokens[idx].nesting === 1) {
            //     const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
            //     return `<demo sourceCode="${md.utils.escapeHtml(content)}">${
            //         content ? `<!--vue-demo:${content}:vue-demo-->` : ''
            //     }`;
            // }
            // return '</demo>';
        }
    });
};
