#! /usr/local/bin/zsh
num=$1
level=$2
n=`echo ${num} | grep '[0-9]*' -o` 
title=`echo ${num} | grep '[^0-9-].*' -oE`

# n=${num:0:3} split 3 ele begin at pos 0

echo "create problem: ${num}"
mkdir ./problems/${num}

# cp ./problems/999-template/index.js ./problems/${num}/index.js
echo "create index.js"
echo "// Title  : ${title}" >> ./problems/${num}/index.js
echo "// Date   :" `date +%F` >> ./problems/${num}/index.js
echo "// Author : Daguo" >> ./problems/${num}/index.js
echo "/*****************************************\n\n*****************************************/" >> ./problems/${num}/index.js
echo "\n\nmodule.exports = [null];" >> ./problems/${num}/index.js

#cp ./problems/999-template/test.js ./problems/${num}/test.js
echo "create test.js"
echo "module.exports = [{\n\tinput: [5],\n\toutput: 5,\n},\n{\n\tinput: [[1,-5]],\n\toutput: -4,\n},\n]" >> ./problems/${num}/test.js

# 在README文件中插入最新一题
echo "\r|${n}|[${title}](https://oj.leetcode.com/problems/${title}/)| [JavaScript](./problems/${num}/index.js)|${level}|" >> README.md
echo "add info to README.md."
