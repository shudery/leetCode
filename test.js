var fs = require('fs');
var expect = require('chai').expect;

var Benchmark = require('benchmark');
var colors = require('colors');
var suite = new Benchmark.Suite;
var num = process.env.pro;

var path = './problems';
var problems = fs.readdirSync(path);
if (num) {
    //测试指定目录
    oneTest(problems, num);
} else {
    //全部测试
    allTest();
};

function oneTest(problems, num) {
    let reg = new RegExp(num);
    let problem = '';
    problems.forEach((val) => {
        if (reg.test(val)) {
            problem = val;
        }
    })
    test(problem);
    //单测将开启函数性能测试
  //  speedTest()
};

function allTest() {
    problems.forEach((problem) => {
        test(problem);
    });
}

function test(problem) {
    let fn = require('./problems/' + problem + '/index.js');
    let demo = require('./problems/' + problem + '/test.js');
    describe("test:" + problem, function() {
        demo.forEach((val, i) => {
            it("demo-" + i, function() {
                expect(fn.apply(null, val.input)).to.deep.equal(val.output);
            });
        })
    });
}

function speedTest(fns) {
    // suite
    //     .add(fn.name, () => {
    //         demo.forEach((val)=>{
    //         	fn.apply(null,val.input);
    //         })
    //     })
    var fnStr = 'suite';
    fns.forEach((fn) => {
        fnStr += '.add(' + fn.name + ', () => {\
            demo.forEach((val)=>{\
            	' + fn + '.apply(null,val.input);\
            })\
        })'
    })
    eval(fnStr)
        .on('cycle', function(event) {
            var info = String(event.target);
            var obj = {};
            console.log(info);
            obj.name = info.split(' x ')[0];
            obj.time = info.split(' x ')[1].split(' ops/sec')[0];
            timeRank.push(obj);
        })
        .on('complete', function() {
            //运行时间排序
            for (var i = 0, len = timeRank.length; i < len; i++) {
                for (var j = 0; j < len - i - 1; j++) {
                    //比较相邻元素
                    if (+timeRank[j].time.replace(/,/g, '') < +timeRank[j + 1].time.replace(/,/g, '')) {
                        [timeRank[j].time, timeRank[j + 1].time] = [timeRank[j + 1].time, timeRank[j].time];
                        [timeRank[j].name, timeRank[j + 1].name] = [timeRank[j + 1].name, timeRank[j].name];
                    }
                }
            }
            var label = [];
            timeRank.forEach((val) => {
                label.push(val.name + ' ' + val.time)
            })
            console.log(('Alltest : ' + this.filter('successful').map('name')).yellow);
            console.log(('Allrank : ' + label.join('\n          ')).blue);
            console.log(('Fastest : ' + this.filter('fastest').map('name')).green);
            console.log(('Slowest : ' + this.filter('slowest').map('name')).red);
        })
        // 这里的 async 不是 mocha 测试那个 async 的意思，这个选项与它的时间计算有关，默认勾上就好了。
        .run({ 'async': true });
}
