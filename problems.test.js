var fs = require('fs');
var expect = require('chai').expect;
var Benchmark = require('benchmark');
var _ = require('daguo');
var num = process.env.n;

var path = './problems';
var problems = fs.readdirSync(path);

console.log('<--start fns AC test-->'.underline);
if (num) {
  //测试指定目录
  let reg = new RegExp(num);
  let problem = '';
  //匹配相应题目
  problems.forEach(val => {
    if (reg.test(val)) {
      problem = val;
    }
  });
  test(problem);
} else {
  //全部测试
  problems.forEach(problem => {
    test(problem);
  });
}

function test(problem) {
  let fns = require('./problems/' + problem + '/index.js');
  let demo = require('./problems/' + problem + '/test.js');
  //将单个函数接口 转换为数组格式
  if (Object.prototype.toString.call(fns) !== '[object Array]') {
    let fn = fns;
    fns = [];
    fns.push(fn);
  }
  //开始测试
  describe(('test-problem:' + problem).yellow, function() {
    //每个函数测试
    fns.forEach((fn, index) => {
      //每个输入例子测试
      demo.forEach((val, i) => {
        //如果该题目不需要测试则在module.exports =null即可
        fn &&
          it('function:' + fn.name + '  demo-' + i, function() {
            //不能直接传入原始数组的索引，不然可能test中的input被污染，影响下一个执行函数
            let arr = _.clone(val);
            expect(fn.apply(null, arr.input)).to.deep.equal(arr.output);
          });
      });
    });
  });
}
