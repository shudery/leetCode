var fs = require('fs');
var expect = require('chai').expect;
var Benchmark = require('benchmark');
var colors = require('colors');
var suite = new Benchmark.Suite;
var num = process.env.num;

var path = './problems';
var problems = fs.readdirSync(path);
console.log('start fns ac test:')
if (num) {
    //测试指定目录
    oneTest(problems, num);
} else {
    //全部测试
    allTest(problems);
};

function oneTest(problems, num) {
    let reg = new RegExp(num);
    let problem = '';
    //匹配相应题目
    problems.forEach((val) => {
        if (reg.test(val)) {
            problem = val;
        }
    })
    let fns = require('./problems/' + problem + '/index.js');
    let demo = require('./problems/' + problem + '/test.js');
    //将单个函数接口 转换为数组格式
    if (Object.prototype.toString.call(fns) !== '[object Array]') {
        let fn = fns;
        fns = [];
        fns.push(fn)
    }
    //开始测试
    describe(("test-problem:" + problem).yellow, function() {
        //每个函数测试
        fns.forEach((fn, index) => {
            //每个输入例子测试
            demo.forEach((val, i) => {
                it("function:" + fn.name + "  demo-" + i, function() {
                    expect(fn.apply(null, val.input)).to.deep.equal(val.output);
                });
            })
        })
    });

    //单测将开启函数性能测试
    // speedTest(problem,fns,demo)
};

function allTest(problems) {
    problems.forEach((problem) => {

        let fns = require('./problems/' + problem + '/index.js');
        let demo = require('./problems/' + problem + '/test.js');

        //将单个函数接口 转换为数组格式
        if (Object.prototype.toString.call(fns) !== '[object Array]') {
            let fn = fns;
            fns = [];
            fns.push(fn)
        }
        describe(("test-problem:" + problem).yellow, function() {
            //每个函数测试
            fns.forEach((fn, index) => {
                //每个输入例子测试
                demo.forEach((val, i) => {
                    it("function:" + fn.name + "  demo-" + i, function() {
                        expect(fn.apply(null, val.input)).to.deep.equal(val.output);
                    });
                })
            })
        });
    });
}
