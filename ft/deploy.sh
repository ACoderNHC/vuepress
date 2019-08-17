#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 下面这行是官网没有的，如果是多人开发项目，务必执行此命令
# git pull https://github.com/ACoderNHC/vuepress.git master 
git add .
git commit -m 'deploy'
git push -f https://github.com/ACoderNHC/vuepress.git master:vuepress

cd -