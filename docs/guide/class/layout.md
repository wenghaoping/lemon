## 显示类型 (display)

:::css-api path=/less/common/layout.less & block=displayType
:::

## flex 布局 (flex)

:::css-api path=/less/common/layout.less & block=flex
:::

## 浮动 (float)

<div>
<co-class-api
    title="浮动"
    :tableData="[
        {
            class: 'fl',
            property: [
                {
                    prop: 'float',
                    value: 'left'
                }
            ]
        },
        {
            class: 'fr',
            property: [
                {
                    prop: 'float',
                    value: 'right'
                }
            ]
        },
        {
            class: 'clear-fix',
            property: [
                {
                    prop: '&:after',
                    value: ''
                }
            ]
        },
        {
            class: 'clear-left',
            property: [
                {
                    prop: 'clear',
                    value: 'left'
                }
            ]
        },
        {
            class: 'clear-right',
            property: [
                {
                    prop: 'clear',
                    value: 'right'
                }
            ]
        },
        {
            class: 'clear-both',
            property: [
                {
                    prop: 'clear',
                    value: 'both'
                }
            ]
        }
    ]" />
</div>

## 溢出滚动行为 (overflow)

:::css-api path=/less/common/layout.less & block=overflow
:::

## 表格 (table-layout)

:::css-api path=/less/common/layout.less & block=table
:::
