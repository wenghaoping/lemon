<p align="center">
  <a href="https://wenghaoping.github.io/lemon-docs/" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://souche.oss-cn-hangzhou.aliyuncs.com/20230512/png/880716f761543148c157cb3e54328d1c.png" alt="Vite logo">
  </a>
</p>
<br/>
<br/>

# lemon ⚡

# 快速开始

## 介绍

极大的简化了 css 的写法,以后再也不用写 css 啦.只写 class 啦

A good helper to help you write css, let others be sour!

## Package

| Package                                           | 说明                                                 |
| ------------------------------------------------- | :--------------------------------------------------- |
| [git](https://github.com/wenghaoping/lemon)       | []()                                                 |
| [文档](https://wenghaoping.github.io/lemon-docs)  | []()                                                 |
| [NPM](https://www.npmjs.com/package/@minij/lemon) | [V0.0.2](https://www.npmjs.com/package/@minij/lemon) |

## 安装

通过 yarn 安装

```bash
yarn add @minij/lemon -S
```

## 使用

### 全量引入功能好(推荐)

```js
import "@minij/lemon"; // 引入全量工具类
import "@minij/lemon/css/reset.css"; // 重置文件
import "@minij/lemon/css/themes/default.css"; // 选择导入的主题
```

```js
import "@minij/lemon/less/global.less"; // 混合
```

### 按需引入工具类

```js
import "@minij/lemon/css/color.css";
import "@minij/lemon/css/font.css";
import "@minij/lemon/css/layout.css";
import "@minij/lemon/css/position.css";
import "@minij/lemon/css/box.css";
import "@minij/lemon/css/other.css";
```
