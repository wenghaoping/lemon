<template>
    <div v-for="info in colorVariables" :key="info.title" class="mb24">
        <div class="fs18 text-bold">{{ info.title }}</div>
        <el-row>
            <el-col v-for="item in info.items" :key="item.key" :span="6" class="padding-x-12 pt12">
                <div class="border-r-m" :style="{
                    height: '32px',
                    backgroundColor: `var(${item.key})`
                }"></div>
                <div class="fs12 mt8">
                    <div class="mb4">{{ item.key }}</div>
                    <div class="mb4">{{ item.value }}</div>
                    <div class="text-caption">{{ item.desc }}</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
const colorVariables = [
    {
        title: '主色',
        items: [
            {
                key: '--primary',
                value: '',
                desc: ''
            },
            {
                key: '--primary-text',
                desc: ''
            },
            {
                key: '--primary-press',
                desc: ''
            },
            {
                key: '--primary-disable',
                desc: ''
            },
            {
                key: '--primary-selected',
                desc: ''
            },
            {
                key: '--primary-text-selected',
                desc: ''
            },
        ]
    },
    {
        title: '辅助色',
        items: [
            {
                key: '--warning',
                desc: ''
            },
            {
                key: '--success',
                desc: ''
            },
            {
                key: '--link',
                desc: ''
            },
            {
                key: '--label-stroke',
                desc: ''
            },
            {
                key: '--background-notice',
                desc: ''
            },
            {
                key: '--background-warning',
                desc: ''
            },
        ]
    },
    {
        title: '中性色',
        items: [
            {
                key: '--text-title',
                desc: ''
            },
            {
                key: '--text-body',
                desc: ''
            },
            {
                key: '--text-caption',
                desc: ''
            },
            {
                key: '--text-hint',
                desc: ''
            },
            {
                key: '--text-anti',
                desc: ''
            },
            {
                key: '--stroke',
                desc: ''
            },
            {
                key: '--line',
                desc: ''
            },
            {
                key: '--background-page',
                desc: ''
            },
            {
                key: '--background-block',
                desc: ''
            },
            {
                key: '--mask',
                desc: ''
            },
            {
                key: '--mask1',
                desc: ''
            },
            {
                key: '--mask2',
                desc: ''
            }
        ]
    },
    {
        title: '其他',
        items: [
            {
                key: '--font-highlight',
                desc: '主色填充时文字颜色'
            },
            {
                key: '--primary-highlight',
                desc: '高亮主色背景下文字颜色'
            },
            {
                key: '--primary-disable-select-color',
                desc: '禁用时选中态文字色'
            },
        ]
    }
];
</script>