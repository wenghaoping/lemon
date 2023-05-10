## 主题变量
<co-box-variables />


## 尺寸类

:::css-api path=/less/common/box.less & block=themeBorderRadius
:::

:::css-api path=/less/common/box.less & block=themeBorderRadius
:::

<div>
<co-class-api
    title="边距"
    :tableData="[
        {
            class: 'pl0',
            property: [
                {
                    prop: 'padding-left',
                    value: '0px'
                }
            ]
        },
        {
            class: '[p|m][t|r|b|l][0-100]',
            property: [
                {
                    prop: '[padding|margin]-[top|right|bottom|left]',
                    value: '[0-100]px'
                }
            ]
        },
        {
            class: 'padding-x-0',
            property: [
                {
                    prop: 'padding-left',
                    value: '0px'
                },
                {
                    prop: 'padding-right',
                    value: '0px'
                }
            ]
        },
        {
            class: '[padding|margin]-[x|y]-[0-100]',
            property: [
                {
                    prop: '[padding|margin]-[right|bottom]',
                    value: '[0-100]px'
                },
                {
                    prop: '[padding|margin]-[left|top]',
                    value: '[0-100]px'
                }
            ]
        },
        {
            class: 'padding0',
            property: [
                {
                    prop: 'padding',
                    value: '0px'
                }
            ]
        },
        {
            class: '[padding|margin][0-100]',
            property: [
                {
                    prop: '[padding|margin]',
                    value: '[0-100]px'
                }
            ]
        },
        {
            class: 'margin-x-auto',
            property: [
                {
                    prop: 'margin-left',
                    value: 'auto'
                },
                {
                    prop: 'margin-right',
                    value: 'auto'
                }
            ]
        }
    ]" />
</div>

<div>
<co-class-api
    title="边框"
    :tableData="[
        {
            class: 'border-r-2',
            property: [
                {
                    prop: 'border-radius',
                    value: '2px'
                }
            ]
        },
        {
            class: 'border-r-[2-32]',
            property: [
                {
                    prop: 'border-radius',
                    value: '[2-32]px'
                }
            ]
        },
        {
            class: 'border-r-lt-2',
            property: [
                {
                    prop: 'border-top-left-radius',
                    value: '2px'
                }
            ]
        },
        {
            class: 'border-r-[lt|lb|rt|rb]-[2-32]',
            property: [
                {
                    prop: 'border-[direction]-radius',
                    value: '[2-32]px'
                }
            ]
        },
        {
            class: 'border-w-1',
            property: [
                {
                    prop: 'border-width',
                    value: '1px'
                }
            ]
        },
        {
            class: 'border-w-[1-4]',
            property: [
                {
                    prop: 'border-width',
                    value: '[1-4]px'
                }
            ]
        },
        {
            class: 'border-w-t-1',
            property: [
                {
                    prop: 'border-top-width',
                    value: '1px'
                }
            ]
        },
        {
            class: 'border-w-[t|r|b|l]-[1-4]',
            property: [
                {
                    prop: 'border-[top|right|bottom|left]-width',
                    value: '[1-4]px'
                }
            ]
        },
        {
            class: 'border-s-[solid|dashed|dotted]',
            property: [
                {
                    prop: 'border-style',
                    value: '[solid|dashed|dotted]'
                }
            ]
        },
        {
            class: 'border-s-[t|r|b|l]-[solid|dashed|dotted]',
            property: [
                {
                    prop: 'border-[top|right|bottom|left]-style',
                    value: '[solid|dashed|dotted]'
                }
            ]
        },
        {
            class: 'border-collapse',
            property: [
                {
                    prop: 'border-collapse',
                    value: 'collapse'
                }
            ]
        },
    ]" />
</div>

:::css-api path=/less/common/box.less & block=borderSizing
:::

:::css-api path=/less/common/box.less & block=borderSize
:::

<script setup>
import CoBoxVariables from './components/box-variables.vue'
</script>