# leetCode

![Travis](https://img.shields.io/travis/rust-lang/rust.svg)

没事刷刷算法题： [leetcode](https://leetcode.com/problemset/algorithms/)

### 优势

使用本项目在本地环境刷 OJ 题目有如下好处：

- 更习惯，使用自己平时开发写代码的编辑器/IDE。
- 更高效和规范，可以有语法提示和自动格式化
- 容易调试，本地断点调试方便
- 本地测试用例，方便快速测试多个用例，避免在 OJ 平台多次错误提交
- 可离线做题，将做题记录同步到 git

### 功能和性能测试

使用 mocha + chai + benchmark 来测试算法准确和性能。

#### 安装依赖

```js
npm install
```

#### 测试单个题目

```js
// 测试题号001，传入n=001，返回测试结果
n=001 npm test
// 返回测试结果，包括算法性能
n=001 npm perf
```

#### 测试所有题目

```js
npm test
// 测试是否通过并且计算所有算法的性能，比较耗时
npm perf
```

#### 本地断点调试

```js
npm run debug
```

#### 新建题目

自动生成新题目的文件目录，并在 readme 插入一条相关的信息。

```shell
./crepro.sh 999-template-test Easy
# ./crepro.sh {题目序号}-{题目(-分隔单词)} {题目难度}
```

### LeetCode Algorithm

| #   | Title                                                                                                                              | Solution                                                                             | Difficulty |
| --- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------- |
| 463 | [island-perimeter](https://leetcode.com/problems/island-perimeter/)                                                                | [JavaScript](./problems/463-island-perimeter/index.js)                               | Easy       |
| 455 | [assign-cookies](https://oj.leetcode.com/problems/assign-cookies/)                                                                 | [JavaScript](./problems/455-assign-cookies/index.js)                                 | Easy       |
| 419 | [battleships-in-a-board](https://leetcode.com/problems/battleships-in-a-board/)                                                    | [JavaScript](./problems/419-battleships-in-a-board/index.js)                         | Medium     |
| 413 | [arithmetic-slices](https://leetcode.com/problems/arithmetic-slices/)                                                              | [JavaScript](./problems/413-arithmetic-slices/index.js)                              | Medium     |
| 412 | [fizz-buzz](https://leetcode.com/problems/fizz-buzz/)                                                                              | [JavaScript](./problems/412-fizz-buzz/index.js)                                      | Easy       |
| 406 | [queue-reconstruction-by-height](https://leetcode.com/problems/queue-reconstruction-by-height/)                                    | [JavaScript](./problems/406-queue-reconstruction-by-height/index.js)                 | Medium     |
| 371 | [sum-of-two-integers](https://leetcode.com/problems/sum-of-two-integers/)                                                          | [JavaScript](./problems/371-sum-of-two-integers/index.js)                            | Easy       |
| 344 | [reverse-string](https://leetcode.com/problems/reverse-string/)                                                                    | [JavaScript](./problems/344-reverse-string/index.js)                                 | Easy       |
| 338 | [counting-bits](https://leetcode.com/problems/counting-bits/)                                                                      | [JavaScript](./problems/338-counting-bits/index.js)                                  | Medium     |
| 292 | [nim-game](https://leetcode.com/problems/nim-game/)                                                                                | [JavaScript](./problems/292-nim-game/index.js)                                       | Medium     |
| 136 | [single-number](https://leetcode.com/problems/single-number/)                                                                      | [JavaScript](./problems/136-single-number/index.js)                                  | Easy       |
| 104 | [maximum-depth-of-binary-tree](https://oj.leetcode.com/problems/maximum-depth-of-binary-tree/)                                     | [JavaScript](./problems/104-maximum-depth-of-binary-tree/index.js)                   | Easy       |
| 001 | [two-sum](https://oj.leetcode.com/problems/two-sum/)                                                                               | [JavaScript](./problems/001-two-num/index.js)                                        | Easy       |
| 461 | [hamming-distance](https://oj.leetcode.com/problems/hamming-distance/)                                                             | [JavaScript](./problems/461-hamming-distance/index.js)                               | Easy       |
| 535 | [encode-and-decode-tinyurl](https://oj.leetcode.com/problems/encode-and-decode-tinyurl/)                                           | [JavaScript](./problems/535-encode-and-decode-tinyurl/index.js)                      | Medium     |
| 476 | [number-complement](https://oj.leetcode.com/problems/number-complement/)                                                           | [JavaScript](./problems/476-number-complement/index.js)                              | Easy       |
| 500 | [keyboar-row](https://oj.leetcode.com/problems/keyboar-row/)                                                                       | [JavaScript](./problems/500-keyboar-row/index.js)                                    | Easy       |
| 496 | [next-greater-element-i](https://oj.leetcode.com/problems/next-greater-element-i/)                                                 | [JavaScript](./problems/496-next-greater-element-i/index.js)                         | Easy       |
| 513 | [find-bottom-left-tree-value](https://oj.leetcode.com/problems/find-bottom-left-tree-value/)                                       | [JavaScript](./problems/513-find-bottom-left-tree-value/index.js)                    | Medium     |
| 485 | [max-consecutive-ones](https://oj.leetcode.com/problems/max-consecutive-ones/)                                                     | [JavaScript](./problems/485-max-consecutive-ones/index.js)                           | Easy       |
| 520 | [detect-capital](https://oj.leetcode.com/problems/detect-capital/)                                                                 | [JavaScript](./problems/520-detect-capital/index.js)                                 | Easy       |
| 448 | [find-all-numbers-disappeared-in-an-array](https://oj.leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)             | [JavaScript](./problems/448-find-all-numbers-disappeared-in-an-array/index.js)       | Easy       |
| 442 | [find-all-duplicates-in-an-array](https://oj.leetcode.com/problems/find-all-duplicates-in-an-array/)                               | [JavaScript](./problems/442-find-all-duplicates-in-an-array/index.js)                | Medium     |
| 258 | [add-digits](https://oj.leetcode.com/problems/add-digits/)                                                                         | [JavaScript](./problems/258-add-digits/index.js)                                     | Easy       |
| 495 | [teemo-attacking](https://oj.leetcode.com/problems/teemo-attacking/)                                                               | [JavaScript](./problems/495-teemo-attacking/index.js)                                | Medium     |
| 529 | [minesweeper](https://oj.leetcode.com/problems/minesweeper/)                                                                       | [JavaScript](./problems/529-minesweeper/index.js)                                    | Medium     |
| 002 | [add-two-numbers](https://oj.leetcode.com/problems/add-two-numbers/)                                                               | [JavaScript](./problems/002-add-two-numbers/index.js)                                | Medium     |
| 003 | [longest-substring-without-repeating-characters](https://oj.leetcode.com/problems/longest-substring-without-repeating-characters/) | [JavaScript](./problems/003-longest-substring-without-repeating-characters/index.js) | Medium     |
| 004 | [median-of-two-sorted-arrays](https://oj.leetcode.com/problems/median-of-two-sorted-arrays/)                                       | [JavaScript](./problems/004-median-of-two-sorted-arrays/index.js)                    | Hard       |
| 209 | [minimum-size-subarray-sum](https://oj.leetcode.com/problems/minimum-size-subarray-sum/)                                           | [JavaScript](./problems/209-minimum-size-subarray-sum/index.js)                      | medium     |
| 167 | [two-sum-ii-input-array-is-sorted](https://oj.leetcode.com/problems/two-sum-ii-input-array-is-sorted/)                             | [JavaScript](./problems/167-two-sum-ii-input-array-is-sorted/index.js)               | easy       |
| 019 | [remove-nth-node-from-end-of-list](https://oj.leetcode.com/problems/remove-nth-node-from-end-of-list/)                             | [JavaScript](./problems/019-remove-nth-node-from-end-of-list/index.js)               | medium     |
| 020 | [valid-parentheses](https://oj.leetcode.com/problems/valid-parentheses/)                                                           | [JavaScript](./problems/020-valid-parentheses/index.js)                              | easy       |
| 024 | [swap-nodes-in-pairs](https://oj.leetcode.com/problems/swap-nodes-in-pairs/)                                                       | [JavaScript](./problems/024-swap-nodes-in-pairs/index.js)                            | medium     |
| 026 | [remove-duplicates-from-sorted-array](https://oj.leetcode.com/problems/remove-duplicates-from-sorted-array/)                       | [JavaScript](./problems/026-remove-duplicates-from-sorted-array/index.js)            | easy       |
| 075 | [sort-colors](https://oj.leetcode.com/problems/sort-colors/)                                                                       | [JavaScript](./problems/075-sort-colors/index.js)                                    | medium     |
| 086 | [partition-list](https://oj.leetcode.com/problems/partition-list/)                                                                 | [JavaScript](./problems/086-partition-list/index.js)                                 | medium     |
| 092 | [reverse-linked-list-ii](https://oj.leetcode.com/problems/reverse-linked-list-ii/)                                                 | [JavaScript](./problems/092-reverse-linked-list-ii/index.js)                         | medium     |
| 094 | [binary-tree-inorder-traversal](https://oj.leetcode.com/problems/binary-tree-inorder-traversal/)                                   | [JavaScript](./problems/094-binary-tree-inorder-traversal/index.js)                  | medium     |
| 102 | [binary-tree-level-order-traversal](https://oj.leetcode.com/problems/binary-tree-level-order-traversal/)                           | [JavaScript](./problems/102-binary-tree-level-order-traversal/index.js)              | medium     |
| 103 | [binary-tree-zigzag-level-order-traversal/](https://oj.leetcode.com/problems/binary-tree-zigzag-level-order-traversal//)           | [JavaScript](./problems/103-binary-tree-zigzag-level-order-traversal//index.js)      | medium     |
| 107 | [binary-tree-level-order-traversal-ii](https://oj.leetcode.com/problems/binary-tree-level-order-traversal-ii/)                     | [JavaScript](./problems/107-binary-tree-level-order-traversal-ii/index.js)           | easy       |
