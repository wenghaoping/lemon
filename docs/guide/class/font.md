## 主题变量
<co-font-variables></co-font-variables>


<script setup>
import CoFontVariables from './components/font-variables.vue'
</script>


## 字体类

### 主题字号
:::css-api path=/less/common/font.less & block=themeFontSizes
:::
### 主题字号（带行高）
:::css-api path=/less/common/font.less & block=themeFontSizesWithLineHeight
:::

### 主题行高
:::css-api path=/less/common/font.less & block=themeLineHeight
:::
### 主题字重
:::css-api path=/less/common/font.less & block=themeFontWeight
:::


### 基本字号 
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

### 基本行高 
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
            class: 'fs[14-100]',
            property: [
                {
                    prop: 'line-height',
                    value: '[14-100]px'
                }
            ]
        }
    ]" />
</div>

### 基本字重 
:::css-api path=/less/common/font.less & block=baseFontWeight
:::

### 对其方式
:::css-api path=/less/common/font.less & block=fontAlign
:::

### 效果 
:::css-api path=/less/common/font.less & block=fontEffect
:::