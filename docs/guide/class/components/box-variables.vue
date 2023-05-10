<style lang="less">
.class {
}
</style>

<template>
    <div
        v-for="info in boxVariables"
        :key="info.title"
        class="mb24">
        <div class="fs18 text-bold">{{ info.title }}</div>
        <div>
            <div
                v-for="item in info.items"
                :key="item.key"
                class="margin-y-12">
                <div
                    class="inline-block padding-x-24 padding-y-16"
                    :style="{
                        border: '1px solid var(--stroke)',
                        [info.property]: `var(${item.key})`
                    }">{{ item.key }}: {{ item.value }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const boxVariables = [
    {
        title: '圆角',
        property: 'border-radius',
        items: [
            {
                key: '--border-radius-half',
                value: '100vh',
            },
            {
                key: '--border-radius-large',
                value: '12px',
            },
            {
                key: '--border-radius-medium',
                value: '8px',
            },
            {
                key: '--border-radius-small',
                value: '6px',
            },
            {
                key: '--border-radius-mini',
                value: '4px',
            },
        ]
    },
    {
        title: '阴影',
        property: 'box-shadow',
        items: [
            {
                key: '--box-shadow-important',
                value: '0 8px 24px rgba(0, 0, 0, .04)',
            },
            {
                key: '--box-shadow-bottom',
                value: '0 -1px 8px rgba(0, 0, 0, .08)',
            },
            {
                key: '--box-shadow-top',
                value: '0 1px 8px rgba(0, 0, 0, .08)',
            },
            {
                key: '--box-shadow-common',
                value: '0 0 12px rgba(0, 0, 0, .06)',
            },
        ]
    },
];
</script>