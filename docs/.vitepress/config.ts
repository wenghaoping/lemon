import * as path from "path";
import { defineConfig } from "vitepress";
import { defineThemeConfig, extendConfig } from "@vitesite/theme-normal";
import { version } from "../../package.json";
import { mdCssDocPlugin } from "./utils/css";

const resolve = (...p) => path.resolve(__dirname, "../..", ...p);

export const themeConfig = defineThemeConfig({
    nav: [
        {
            text: "指南",
            link: "/guide/",
        },
        // {
        //     text: '主题',
        //     link: '/theme/',
        // },
        {
            text: "TODO",
            link: "/todo/",
        },
        {
            text: version,
            link: "/",
        },
    ],
    sidebar: {
        "/guide/": [
            // {
            //     text: '安装',
            //     link: '/guide/install/'
            // },
            {
                text: "快速上手",
                link: "/guide/",
            },
            {
                text: "概念",
                sidebarDepth: 2,
                children: [
                    {
                        text: "工具类",
                        link: "/guide/concept/class",
                    },
                    {
                        text: "混合",
                        link: "/guide/concept/mixin",
                    },
                    {
                        text: "主题",
                        link: "/guide/concept/theme",
                    },
                    {
                        text: "Reset",
                        link: "/guide/concept/reset",
                    },
                ],
            },
            {
                text: "工具类",
                children: [
                    {
                        text: "颜色",
                        link: "/guide/class/color",
                    },
                    {
                        text: "字体",
                        link: "/guide/class/font",
                    },
                    {
                        text: "盒子",
                        link: "/guide/class/box",
                    },
                    {
                        text: "定位",
                        link: "/guide/class/position",
                    },
                    {
                        text: "布局",
                        link: "/guide/class/layout",
                    },
                    {
                        text: "其他",
                        link: "/guide/class/other",
                    },
                ],
            },
        ],
    },
});
export default extendConfig({
    themeConfig,
    title: "lemon",
    base: "/",
    vite: {
        resolve: {
            alias: [
                {
                    find: /^@minij\/lemon\//,
                    replacement: `${resolve()}/`,
                },
            ],
        },
    },
    markdown: {
        config(md) {
            md.use(mdCssDocPlugin);
        },
    },
});
