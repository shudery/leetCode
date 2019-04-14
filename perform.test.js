const Benchmark = require('benchmark');
const colors = require('colors');
const fs = require('fs');
const _ = require('daguo');
const suite = new Benchmark.Suite();
const num = process.env.n || 001;
const logger = console.log;

const path = './problems';
const problems = fs.readdirSync(path);

// 根据题号匹配对应题目
const reg = new RegExp(num);
const problem = problems.find(problem => reg.test(problem));

const fns = require('./problems/' + problem + '/index.js');
const testCases = require('./problems/' + problem + '/test.js');
perfTest(problem, _.clone(testCases), fns);

/**
 * 运行性能测试
 * @param {*} problem 测试的题目目录
 * @param {*} testCases 测试用例
 * @param {*} fns 测试的函数
 */
function perfTest(problem, testCases, fns) {
  logger(('<--start fns speed test-->' + problem).underline + '\n');
  //非数组报错
  isArray(problem, fns);
  // 运算耗时排名
  const timeRank = [];
  // 执行字符串
  const evalStr = fns.reduce(
    (pre, cur, i) =>
      pre +
      `.add("${
        cur.name
      }", function() {fns[${i}].apply(null,testCases[0].input);})`,
    'suite'
  );
  eval(evalStr)
    .on('cycle', event => handleCycle(event, timeRank))
    .on('complete', function() {
      // 对运行时间排序
      sort(timeRank);
      const label = [];
      timeRank.forEach(result => {
        label.push(`${result.name} >>> ${result.time}`);
      });
      logger(`Allrank :\n${label.join('\n')}`.blue);
      logger(`Fastest :\n${this.filter('fastest').map('name')}`.green);
      logger(`Slowest :\n${this.filter('slowest').map('name')}`.red);
    })
    // 这个选项与时间计算有关
    .run({ async: true });
}

function handleCycle(event, timeRank) {
  const info = String(event.target);
  logger(info.yellow);
  timeRank.push({
    name: info.split(' x ')[0],
    time: info.split(' x ')[1].split(' ops/sec')[0]
  });
}

/**
 * 测试结果排序
 * @param {*} arr
 */
function sort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      //比较相邻元素
      if (+arr[j].time.replace(/,/g, '') < +arr[j + 1].time.replace(/,/g, '')) {
        [arr[j].time, arr[j + 1].time] = [arr[j + 1].time, arr[j].time];
        [arr[j].name, arr[j + 1].name] = [arr[j + 1].name, arr[j].name];
      }
    }
  }
}

function isArray(problem, fns) {
  if (Object.prototype.toString.call(fns) !== '[object Array]') {
    const str = `./problems/${problem}/index.js \n--you can export a array fns for comparing speed between 2 or more fns`
      .yellow;
    logger(str);
    return true;
  }
}
