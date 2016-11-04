/**
 * 
 * @param {number} num
 * @return {number[]}
 */
function main(num) {
    let arr =[0];
    for(let i=1;i<=num;i++){
        let count = i.toString(2).match(/1/g).length
        arr.push(count);
    }
    return arr;
};


module.exports = main;