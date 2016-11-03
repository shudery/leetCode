var fs = require('fs');
var expect = require('chai').expect;

var path = './problems';
var problems = fs.readdirSync(path);

problems.forEach((problem) => {
    let fn = require('./problems/' + problem + '/index.js');
    let demo = require('./problems/' + problem + '/test.js');

    describe("test:"+problem, function() {
        demo.forEach((val,i) => {
            it("demo-"+i, function() {
                expect(fn.apply(null, val.input)).to.deep.equal(val.output);
            });
        })
    });
});
