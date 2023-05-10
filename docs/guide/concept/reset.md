## 介绍

提供了一套跨浏览器样式一致性的方案

## 使用

需要在项目中手动导入

```js
import "@minij/lemon/css/reset.css";
```

## 具体实现

```css
body,
input,
p,
h1,
h2,
h3,
h4,
h5,
pre,
ul,
li,
ol {
    margin: 0;
    padding: 0;
}
li,
ol {
    list-style-type: none;
}
a {
    text-decoration: none;
}
input[disabled] {
    background-color: transparent;
}
```
