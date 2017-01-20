# leetCode
![Travis](https://img.shields.io/travis/rust-lang/rust.svg)

没事刷刷算法题： [leetcode](https://leetcode.com/problemset/algorithms/)

### 功能和性能测试
安装依赖
```
npm install
```
测试所有题目
```
npm test
```
测试单个题目是否通过，传入参数，如测试001题
```
n=001 npm test
```
测试单个题目是否通过，并且测试不同方法执行时间
```
n=001 npm start
```
利用脚本一键生成新题目目录并插入到README文件中
```
./crepro.sh {题目序号}-{题目(-分隔单词)}
```
例如`./crepro.sh 999-template-test`

###LeetCode Algorithm

| # | Title | Solution | Difficulty |
|---| ----- | -------- | ---------- |
|463|[island-perimeter](https://leetcode.com/problems/island-perimeter/)| [JavaScript](./problems/463-island-perimeter/index.js)|Easy|
|455|[assign-cookies](https://oj.leetcode.com/problems/assign-cookies/)| [JavaScript](./problems/455-assign-cookies/index.js)|Easy|
|419|[battleships-in-a-board](https://leetcode.com/problems/battleships-in-a-board/)| [JavaScript](./problems/419-battleships-in-a-board/index.js)|Medium|
|413|[arithmetic-slices](https://leetcode.com/problems/arithmetic-slices/)| [JavaScript](./problems/413-arithmetic-slices/index.js)|Medium|
|412|[fizz-buzz](https://leetcode.com/problems/fizz-buzz/)| [JavaScript](./problems/412-fizz-buzz/index.js)|Easy|
|406|[queue-reconstruction-by-height](https://leetcode.com/problems/queue-reconstruction-by-height/)| [JavaScript](./problems/406-queue-reconstruction-by-height/index.js)|Medium|
|371|[sum-of-two-integers](https://leetcode.com/problems/sum-of-two-integers/)| [JavaScript](./problems/371-sum-of-two-integers/index.js)|Easy|
|344|[reverse-string](https://leetcode.com/problems/reverse-string/)| [JavaScript](./problems/344-reverse-string/index.js)|Easy|
|338|[counting-bits](https://leetcode.com/problems/counting-bits/)| [JavaScript](./problems/338-counting-bits/index.js)|Medium|
|292|[nim-game](https://leetcode.com/problems/nim-game/)| [JavaScript](./problems/292-nim-game/index.js)|Medium|
|136|[single-number](https://leetcode.com/problems/single-number/)| [JavaScript](./problems/136-single-number/index.js)|Easy|
|104|[maximum-depth-of-binary-tree](https://oj.leetcode.com/problems/maximum-depth-of-binary-tree/)| [JavaScript](./problems/104-maximum-depth-of-binary-tree/index.js)|Easy|
|001|[two-sum](https://oj.leetcode.com/problems/two-sum/)| [JavaScript](./problems/001-two-num/index.js)|Easy||461|[hamming-distance](https://oj.leetcode.com/problems/hamming-distance/)| [JavaScript](./problems/461-hamming-distance/index.js)|Easy|
