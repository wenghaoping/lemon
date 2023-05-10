## 介绍

目前提供了 less 的常用混合

## 使用

### 引用

在需要使用混合的地方引用资源 `@minij/lemon/less/global.less`

### 案例

:::demo

```vue
<template>
    <div class="co-mixin"></div>
</template>

<style lang="less">
@import "@minij/lemon/less/global.less";

.co-mixin {
    .size(100px);
    .border(red);
}
</style>
```

:::
