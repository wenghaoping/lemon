<style lang="less">
.class {
}
</style>

<template>
    <div
        v-for="info in fontVariables"
        :key="info.title"
        class="mb24">
        <div class="fs18 text-bold">{{info.title}}</div>
        <div>
            <div
                v-for="item in info.items"
                :key="item.key"
                class="margin-y-12">
                <div
                    :style="{
                        [info.property]: `var(${item.key})`
                    }">{{item.key}}: {{item.value}}</div>
                <div class="text-caption fs12">{{item.desc}}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const fontVariables = [
    {
        title: '字体',
        property: 'font-manily',
        items: [
            {
                key: '--font-family',
                value: '\'ITC Avant Garde Gothic Std\', \'PingFang SC\', Helvetica, \'Droid Sans\', Arial, sans - serif',
                desc: ''
            }
        ]
    },
    {
        title: '字重',
        property: 'font-weight',
        items: [
            /* 字重 */
            {
                key: '--font-weight-regular',
                value: '400',
                desc: '',
            },
            {
                key: '--font-weight-medium',
                value: '500',
                desc: '',
            },
            {
                key: '--font-weight-semibold',
                value: '600',
                desc: '',
            }
        ]
    },
    {
        title: '字号',
        property: 'font-size',
        items: [
            {
                key: '--font-size-important',
                value: '24px',
                desc: '',
            },
            {
                key: '--font-size-regular',
                value: '20px',
                desc: '',
            },
            {
                key: '--font-size-module-title',
                value: '18px',
                desc: '',
            },
            {
                key: '--font-size-title',
                value: '16px',
                desc: '',
            },
            {
                key: '--font-size-content',
                value: '14px',
                desc: '',
            },
            {
                key: '--font-size-desc',
                value: '13px',
                desc: '',
            },
            {
                key: '--font-size-tabbar',
                value: '10px',
                desc: '',
            }
        ]
    },
    {
        title: '行号',
        property: 'line-height',
        items: [
            {
                key: '--font-size-important-line-height',
                value: '28px',
                desc: '',
            },
            {
                key: '--font-size-regular-line-height',
                value: '24px',
                desc: '',
            },
            {
                key: '--font-size-module-title-line-height',
                value: '22px',
                desc: '',
            },
            {
                key: '--font-size-title-line-height',
                value: '20px',
                desc: '',
            },
            {
                key: '--font-size-content-line-height',
                value: '18px',
                desc: '',
            },
            {
                key: '--font-size-desc-line-height',
                value: '16px',
                desc: '',
            },
            {
                key: '--font-size-tabbar-line-height',
                value: '14px',
                desc: '',
            },
            {
                key: '--line-height-unit',
                value: '1',
                desc: '',
            },
            {
                key: '--line-height-compact',
                value: '1.3',
                desc: '',
            },
            {
                key: '--line-height-regular',
                value: '1.5',
                desc: '',
            },
            {
                key: '--line-height-loose',
                value: '1.7',
                desc: '',
            }
        ]
    }
];
</script>
