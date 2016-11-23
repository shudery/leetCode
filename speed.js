var Benchmark = require('benchmark');
var colors = require('colors');
var fs = require('fs');
var _ = require('daguo');

var suite = new Benchmark.Suite;
var num = process.env.n || 001;

var path = './problems';
var problems = fs.readdirSync(path);

//匹配对应题目
let reg = new RegExp(num);
let problem = '';
for (let i = 0; i < problems.length; i++) {
    if (reg.test(problems[i])) {
        problem = problems[i];
        break;
    }
}


let fns = require('./problems/' + problem + '/index.js');
let demos = require('./problems/' + problem + '/test.js');
//传值不传引用
let demo = _.clone(demos);
//函数性能测试
speedTest(problem, fns, demo)

function speedTest(problem, fns, demo) {
    console.log(('<--start fns speed test-->' + problem).underline + '\n')
        //非数组引用报错
    if (Object.prototype.toString.call(fns) !== '[object Array]') {
        console.log(('./problems/' + problem + '/index.js \n--you can export a array fns for comparing speed between 2 or more fns').yellow)
        return;
    }
    //时间性能排名
    var timeRank = [];

    var str = 'suite';
    fns.forEach((fn, i) => {
        str += '.add("' + fn.name + '", function() {\
            fns[' + i + '].apply(null,demo[0].input);\
        })'
    });
    eval(str)
        .on('cycle', function(event) {
            var info = String(event.target);
            var obj = {};
            console.log(info.yellow);
            obj.name = info.split(' x ')[0];
            obj.time = info.split(' x ')[1].split(' ops/sec')[0];
            timeRank.push(obj);
        })
        .on('complete', function() {
            // 运行时间排序
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
                    label.push(val.name + ' >>> ' + val.time)
                })
                // console.log(('Alltest : ' + this.filter('successful').map('name')).yellow);
            console.log(('Allrank : ' + label.join('\n          ')).blue);
            console.log(('Fastest : ' + this.filter('fastest').map('name')).green);
            console.log(('Slowest : ' + this.filter('slowest').map('name')).red);
        })
        // 这里的 async 不是 mocha 测试那个 async 的意思，这个选项与它的时间计算有关，默认勾上就好了。
        .run({ 'async': true });
}
