const fs = require('fs');
const expect = require('chai').expect;
const Benchmark = require('benchmark');
const _ = require('daguo');
const num = process.env.n;

const path = './problems';
const problems = fs.readdirSync(path);

console.log('<--start fns AC test-->'.underline);

if (num) {
  // 测试指定题目
  const reg = new RegExp(num);
  let problem = '';
  problems.forEach(val => {
    if (reg.test(val)) {
      problem = val;
    }
  });
  runTest(problem);
} else {
  // 测试所以题目
  problems.forEach(problem => {
    runTest(problem);
  });
}

/**
 * 启动测试用例
 * @param {string} problem 题目目录
 */
function runTest(problem) {
  let fns = require('./problems/' + problem + '/index.js');
  const testCases = require('./problems/' + problem + '/test.js');
  //将单个函数转为数组格式
  if (Object.prototype.toString.call(fns) !== '[object Array]') {
    fns = [fns];
  }
  // 开始测试
  describe(`test-problem: ${problem}`, function() {
    // 将每个题目中导出的函数逐个执行测试用例
    fns.forEach(fn => {
      // 将多个测试用例逐个执行
      testCases.forEach((testCase, testIndex) => {
        // 如果该题目不需要测试则在module.exports =null即可
        fn &&
          it(`function:${fn.name}  testCase-${testIndex}`, function() {
            // 不能直接传入原始数组，不然testCase中的input被污染，影响下一个执行函数
            const arr = _.clone(testCase);
            expect(fn.apply(null, arr.input)).to.deep.equal(arr.output);
          });
      });
    });
  });
}
