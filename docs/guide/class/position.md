## 定位类型(position)

<div>
<co-class-api
    title="定位类型"
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

## 定位距离(top, bottom, left, bottom)

<div>
<co-class-api
    title="定位距离"
    :tableData="[
        {
            class: '[ t | r | b | l ]-0',
            property: [
                {
                    prop: 'top | right | bottom | left',
                    value: '0'
                }
            ]
        },
        {
            class: '[ t | r | b | l ]-[1-50]',
            property: [
                {
                    prop: 'top | right | bottom | left',
                    value: '1-50px'
                }
            ]
        },
        {
            class: '[ t | r | b | l ]-auto',
            property: [
                {
                    prop: 'top | right | bottom | left',
                    value: 'auto'
                }
            ]
        },
        {
            class: '[ lt | lb | rt | rb | lr | tb ]-0',
            property: [
                {
                    prop: 'direction',
                    value: '0'
                }
            ]
        }
    ]" />
</div>

## 定位层级 (z-index)

:::css-api path=/less/common/position.less & block=zIndex
:::

## 特殊定位合集 (绝对居中)

:::css-api path=/less/common/position.less & block=positionSpecial
:::
