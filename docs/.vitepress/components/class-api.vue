<template>
    <h3 class="fs-title" :id="title">{{ title }}</h3>
    <section class="co-list">
        <el-table :data="tableData" style="width: 100%;">
            <el-table-column prop="class" label="类名" min-width="200"></el-table-column>
            <el-table-column prop="property" label="属性" min-width="400">
                <template #default="scope">
                    <div v-for="va in scope.row.property">
                        <span>{{ va.prop }} : </span>
                        <span>{{ va.value }};</span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </section>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';

export interface APITableData {
    class: string;
    property: string;
}
const props = defineProps({
    title: {
        type: String as PropType<string>,
    },
    tableData: {
        type: Array as PropType<APITableData[]>,
        required: true
    }
});
</script>
