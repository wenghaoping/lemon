## 类
<div>
<co-class-api
    title="定位距离"
    :tableData="[
        {
            class: 'static',
            property: [
                {
                    prop: 'position',
                    value: 'static'
                }
            ]
        },
        {
            class: 'relative',
            property: [
                {
                    prop: 'position',
                    value: 'relative'
                }
            ]
        },
        {
            class: 'absolute',
            property: [
                {
                    prop: 'position',
                    value: 'absolute'
                }
            ]
        },
        {
            class: 'fixed',
            property: [
                {
                    prop: 'position',
                    value: 'fixed'
                }
            ]
        },
        {
            class: 'sticky',
            property: [
                {
                    prop: 'position',
                    value: 'sticky'
                }
            ]
        },
    ]" />
</div>


<div>
<co-class-api
    title="定位距离"
    :tableData="[
        {
            class: '[t|r|b|l]-0',
            property: [
                {
                    prop: '[top|right|bottom|left]',
                    value: '0'
                }
            ]
        },
        {
            class: '[t|r|b|l]-auto',
            property: [
                {
                    prop: '[top|right|bottom|left]',
                    value: 'auto'
                }
            ]
        },
        {
            class: '[lt|lb|rt|rb|lr|tb]-0',
            property: [
                {
                    prop: '[direction]',
                    value: '0'
                }
            ]
        }
    ]" />
</div>


:::css-api path=/less/common/position.less & block=zIndex
:::

:::css-api path=/less/common/position.less & block=positionSpecial
:::
