#!/usr/bin/env sh
# 文档部署脚本

# 当发生错误时中止脚本
set -e

# 构建
npm run build:doc

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME
# 创建本地 Git 仓库
git init
# 添加和提交
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:wenghaoping/lemon-docs.git main

# 回到原来的目录
cd -