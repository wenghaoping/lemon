# lemon

# 快速开始

## 介绍

极大的简化了 css 的写法,以后再也不用写 css 啦.只写 class 啦

## 安装

通过 yarn 安装

```bash
yarn add @minij/lemon
```

## 使用

### 全量引入功能好

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
