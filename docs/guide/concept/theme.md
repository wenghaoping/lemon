## 介绍

使用 css 变量定制主题

## 使用

需要在项目中手动引入

```js
import "@minij/lemon/css/themes/default.css";
```

:::tip
根据业务可以自行在项目中覆盖对应变量，从而改变主题
:::

## 变量列表

```css
:root {
    /**
     * 颜色
     **/
    /* 主题色 */
    --primary: #f01d24;
    --primary-text: var(--primary);
    --primary-press: var(--primary);
    --primary-disable: rgba(240, 29, 36, 0.4);
    --primary-selected: var(--primary);
    --text-selected: var(--primary);

    /* 辅助色 */
    --warning: var(--primary);
    --success: #1dbf6e;
    --link: #2c7ff7;
    --label-stroke: #f78e91; /* 标签描边 */
    --background-notice: #fff2bd;
    --background-warning: #fef2f2;

    /* 中性色 */
    --text-title: #1b1c33;
    --text-body: #5e5e66;
    --text-caption: #8d8e99; /* 辅助文字 */
    --text-hint: #b0b1b8; /* 预输入文字 */
    --text-anti: #fff; /* 反白文字 */
    --stroke: #e3e3e6; /* 卡片描边 */
    --line: #ededf0; /* 下划线 */
    --background-page: #f7f8fa; /* 页面背景色 */
    --background-block: #f2f3f5; /* 组件背景色 */
    --mask: rgba(0, 0, 0, 1);
    --mask1: rgba(0, 0, 0, 0.6);
    --mask2: rgba(0, 0, 0, 0.1);

    /* 其他 */
    --font-highlight: #fff; /* 主色填充时文字颜色 */
    --primary-highlight: var(--primary); /* 高亮主色背景下文字颜色 */
    --primary-disable-select-color: #ffd2c2; /* 禁用时选中态文字色 */

    /**
     * 字体
     **/
    /* todo ITC Avant Garde Gothic Std字体包的导入 */
    --font-family: "ITC Avant Garde Gothic Std", "PingFang SC", Helvetica,
        "Droid Sans", Arial, sans-serif;

    /* 字重 */
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;

    /* 字号 */
    --font-size-important: 24px;
    --font-size-regular: 20px;
    --font-size-module-title: 18px;
    --font-size-title: 16px;
    --font-size-content: 14px;
    --font-size-desc: 13px;
    --font-size-tabbar: 10px;

    /**
     * 圆角
     **/
    --border-radius-large: 12px;
    --border-radius-medium: 8px;
    --border-radius-small: 6px;
    --border-radius-mini: 4px;
    --border-radius-half: 100vh;

    /**
     * 阴影
     **/
    --box-shadow-important: 0 8px 24px rgba(0, 0, 0, 0.04); /* 重要阴影 */
    --box-shadow-bottom: 0 -1px 8px rgba(0, 0, 0, 0.08); /* 底部阴影 */
    --box-shadow-top: 0 1px 8px rgba(0, 0, 0, 0.08); /* 底部阴影 */
    --box-shadow-common: 0 0 12px rgba(0, 0, 0, 0.06); /* 通用阴影 */
}
```
