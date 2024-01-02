## 主题变量

<co-font-variables></co-font-variables>

<script setup>
import CoFontVariables from './components/font-variables.vue'
</script>

## 字体类

### 主题字号 (主题 font-size)

:::css-api path=/less/common/font.less & block=themeFontSizes
:::

### 主题行高 (line-height)

:::css-api path=/less/common/font.less & block=themeLineHeight
:::

### 主题字重 (主题 font-weight)

:::css-api path=/less/common/font.less & block=themeFontWeight
:::

### 基本字号 (font-size)

<div>
<co-class-api
    :tableData="[
        {
            class: 'fs[10-100]',
            property: [
                {
                    prop: 'font-size',
                    value: '[10-100]px'
                }
            ]
        }
    ]" />
</div>

### 基本行高 (line-height)

<div>
<co-class-api
    :tableData="[
        {
            class: 'line-height',
            property: [
                {
                    prop: 'line-height',
                    value: '1'
                }
            ]
        },
        {
            class: 'lh[14-100]',
            property: [
                {
                    prop: 'line-height',
                    value: '[14-100]px'
                }
            ]
        }
    ]" />
</div>

### 基本字重 (font-weight)

:::css-api path=/less/common/font.less & block=baseFontWeight
:::

### 文字对齐 (text-align,vertical-align)

:::css-api path=/less/common/font.less & block=fontAlign
:::

### 文字效果 (下划线,换行,多行省略)

:::css-api path=/less/common/font.less & block=fontEffect
:::
