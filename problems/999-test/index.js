// Title  : test
// Date   : 2019-03-28
// Author : Daguo
/*****************************************

*****************************************/

// 19022 ops/sec
function forEach(arr) {
  const res = [];
  const key = 1;
  arr.forEach((v, i) => {
    if (v === key) res.splice(i, 1);
  });
}
// 77225 ops/sec
function forarr(arr) {
  const res = [];
  const key = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) res.splice(i, 1);
  }
}

module.exports = [forEach, forarr];
