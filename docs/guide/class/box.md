## 主题变量

<co-box-variables />

## 尺寸类

### 主题圆角(border-radius)

:::css-api path=/less/common/box.less & block=themeBorderRadius
:::

### 主题阴影(box-shadow)

:::css-api path=/less/common/box.less & block=themeBoxShadow
:::

### 边距(margin, padding)

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
            class: 'ml0',
            property: [
                {
                    prop: 'margin-left',
                    value: '0px'
                }
            ]
        },
        {
            class: '[ p | m ][ t |r | b | l ] [0-100]',
            property: [
                {
                    prop: '[ padding | margin ]-[ top | right | bottom | left ]',
                    value: '0-100px'
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
            class: '[ padding | margin ]-[ x | y ]-[ 0-100 ]',
            property: [
                {
                    prop: '[ padding | margin ]-[ right | bottom ]',
                    value: '0-100px'
                },
                {
                    prop: '[ padding | margin ]-[ left | top ]',
                    value: '0-100px'
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
            class: '[ padding | margin ][ 0 - 100 ]',
            property: [
                {
                    prop: '[ padding | margin ]',
                    value: '0-100px'
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

### 边框(border 组合)

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
            class: 'border-r-[tl|bl|tr|br]-[2-32]',
            property: [
                {
                    prop: 'border-[ top | right | bottom | left ]-[ top | right | bottom | left ]-radius',
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

### 长宽简写(width, height)

<!-- :::css-api path=/less/common/box.less & block=borderSize
::: -->

<div>
<co-class-api
    title="长宽简写"
    :tableData="[
        {
            class: 'w[0-50]',
            property: [
                {
                    prop: 'width',
                    value: '[0-50]px'
                }
            ]
        },
        {
            class: 'w-1-3',
            property: [
                {
                    prop: 'width',
                    value: 'calc(100% / 3)'
                }
            ]
        },
        {
            class: 'w-1-4',
            property: [
                {
                    prop: 'width',
                    value: 'calc(100% / 4)'
                }
            ]
        },
        {
            class: 'w-1-5',
            property: [
                {
                    prop: 'width',
                    value: 'calc(100% / 5)'
                }
            ]
        },
        {
            class: 'w-full',
            property: [
                {
                    prop: 'width',
                    value: '100%'
                }
            ]
        },
        {
            class: 'w-screen',
            property: [
                {
                    prop: 'width',
                    value: '100vw'
                }
            ]
        },
        {
            class: 'min-w-0',
            property: [
                {
                    prop: 'min-width',
                    value: '0'
                }
            ]
        },
        {
            class: 'min-w-full',
            property: [
                {
                    prop: 'min-width',
                    value: '100%'
                }
            ]
        },
        {
            class: 'min-w-screen',
            property: [
                {
                    prop: 'min-width',
                    value: '100vw'
                }
            ]
        },
        {
            class: 'h[0-50]',
            property: [
                {
                    prop: 'height',
                    value: '[0-50]px'
                }
            ]
        },
        {
            class: 'h-full',
            property: [
                {
                    prop: 'height',
                    value: '100%'
                }
            ]
        },
        {
            class: 'h-screen',
            property: [
                {
                    prop: 'height',
                    value: '100vh'
                }
            ]
        },
        {
            class: 'min-h-full',
            property: [
                {
                    prop: 'min-height',
                    value: '100%'
                }
            ]
        },
        {
            class: 'min-h-screen',
            property: [
                {
                    prop: 'min-height',
                    value: '100vh'
                }
            ]
        },
    ]" />
</div>

<script setup>
import CoBoxVariables from './components/box-variables.vue'
</script>
