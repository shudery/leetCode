const fs = require('fs');
const path = require('path');
const colors = require('colors');

const problems = fs.readdirSync(__dirname + '/problems');

// const num = process.env.n || 24;
//匹配对应题目
// const reg = new RegExp(num);
// let problem = '';
// for (let i = 0; i < problems.length; i++) {
//   if (reg.test(problems[i])) {
//     problem = problems[i];
//     break;
//   }
// }

problems.forEach(problem => {
    console.log(problem.yellow);
    let fns = require('./problems/' + problem + '/index.js');
    if (Object.prototype.toString.call(fns) === '[object Array') fns = fns[0];
    const demos = require('./problems/' + problem + '/test.js');
    fns.forEach(fn => {
        console.log(`name: ${fn ? fn.name : 'null'.red}`);
        demos.forEach((v, i) => {
            if (!fn) return;
            const result = fn.apply(null, v.input);
            let desc = `input ${i} exec result: pass`.green;
            if (typeof v.output === 'object') {
                let want = JSON.stringify(v.output);
                if (want !== JSON.stringify(result))
                    desc = `input ${i} exec result: ${want} !== ${JSON.stringify(result)}`
                    .red;
            } else {
                if (v.output !== result)
                    desc = `input ${i} exec result: ${v.output} !== ${result}`.red;
            }
            console.log(desc);
        });
    });
});