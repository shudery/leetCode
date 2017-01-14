#! /usr/local/bin/zsh
num=$1
n=`echo ${num} | grep '[0-9]*' -o` 
title=`echo ${num} | grep '[^0-9-].*' -oE`

# n=${num:0:3} split 3 ele begin at pos 0

echo "create problem: ${num}"
mkdir ./problems/${num}
cp ./problems/999-template/index.js ./problems/${num}/index.js
echo "create index.js"
cp ./problems/999-template/test.js ./problems/${num}/test.js
echo "create test.js"
# 在README文件中插入最新一题
echo "\r|${n}|[${title}](https://oj.leetcode.com/problems/${title}/)| [JavaScript](./problems/${num}/index.js)|Easy|" >> README.md
echo "add info to README.md."
