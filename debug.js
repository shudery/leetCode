var fs = require("fs");
var path = require("path");
var num = process.env.n || 209;

var path = __dirname + "/problems";
var problems = fs.readdirSync(path);

//匹配对应题目
let reg = new RegExp(num);
let problem = "";
for (let i = 0; i < problems.length; i++) {
  if (reg.test(problems[i])) {
    problem = problems[i];
    break;
  }
}

let fns = require("./problems/" + problem + "/index.js")[0];
if (Object.prototype.toString.call(fns) === "[object Array") fns = fns[0];
let demos = require("./problems/" + problem + "/test.js");

demos.forEach((v, i) => {
  let result = fns.apply(null, v.input);
  let desc = `demo ${i} pass`;
  if (typeof v.output === "object") {
    let want = JSON.stringify(v.output);
    if (want !== JSON.stringify(result))
      desc = `demo ${i} error: ${want} !== ${JSON.stringify(result)}`;
  } else {
    if (v.output !== result)
      desc = `demo ${i} error: ${v.output} !== ${result}`;
  }
  console.log(desc);
});
