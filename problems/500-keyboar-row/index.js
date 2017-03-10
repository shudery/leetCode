// Title  : keyboar-row
// Date   : 2017-03-10
// Author : Daguo
/*****************************************

*****************************************/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var firstRow = ['q','w','e','r','t','y','u','i','o','p'];
    var secondRow = ['a','s','d','f','g','h','j','k','l'];
    var thirdRow = ['z','x','c','v','b','n','m'];
    words.forEach((v,index)=>{
        var arr = v.split('');
        var n = arr[0].toLocaleLowerCase();
        var row = null;
        if(firstRow.indexOf(n) !== -1){
            row = firstRow;
        }else if(secondRow.indexOf(n) !== -1){
            row = secondRow;
        }else{
            row = thirdRow;
        }
        for(var i=1;i<arr.length;i++){
            if(row.indexOf(arr[i].toLocaleLowerCase()) == -1){
       		 	return words.splice(index,1);
            }
        }
    })
    return words;
};
module.exports = findWords;
