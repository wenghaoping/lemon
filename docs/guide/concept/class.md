## 介绍

工具类是一些基本样式的集合

```html{3-6}
<div class="fs12">12px的字号</div>

fs12是lemon工具类下的一个类
.fs12 {
    font-size: 12px;
}
```

## 使用

全局引入资源

```js
// 引入全量工具类
import "@minij/lemon";

// 按需引入工具类
import "@minij/lemon/css/color.css";
import "@minij/lemon/css/font.css";
import "@minij/lemon/css/layout.css";
import "@minij/lemon/css/position.css";
import "@minij/lemon/css/box.css";
import "@minij/lemon/css/other.css";
```

## 对比

### 传统

:::demo

```vue
<template>
    <div class="pg-class-demo">
        <div class="co-card">
            <div class="co-card__left">
                <img src="/logo.png" width="80" />
            </div>
            <div class="co-card__right">
                <div class="co-card__title">Lemon</div>
                <div class="co-card__sub-title">工具型css样式库</div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.pg-class-demo {
    background: var(--background-page);
    text-align: center;
    padding: 24px;
}
.co-card {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 16px 24px;
    border-radius: var(--border-radius-large);
    box-shadow: var(--box-shadow-common);
    border: 1px solid var(--line);
    &__left {
        margin-right: 12px;
    }
    &__right {
        text-align: left;
    }
    &__title {
        font-size: 24px;
        margin-bottom: 8px;
    }
    &__sub-title {
        font-size: 16px;
        color: var(--text-caption);
    }
}
</style>
```

:::

### 使用 lemon

:::demo

```vue
<template>
    <div class="bg-page padding24 text-center">
        <div
            class="inline-flex flex-justify-center flex-align-center padding-x-16 padding-y-24 border-r-l shadow-common"
        >
            <div class="mr12">
                <img src="/logo.png" width="80" />
            </div>
            <div class="text-left">
                <div class="fs24 mb8">Lemon</div>
                <div class="fs16 text-caption">工具型css样式库</div>
            </div>
        </div>
    </div>
</template>
```

:::
