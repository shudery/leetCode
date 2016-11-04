/**
419. Battleships in a Board
Given an 2D board, count how many different battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:

You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.

Example:
X..X
...X
...X
In the above board there are 2 battleships.

 * @param {character[][]} board
 * @return {number}
 */



function countBattleships1(board) {
    let row = board.length;
    let col = board[0].length;
    let arr = [];
    let count = 0;
    for (let i = 0; i < row; i++) {
    	//将字符串分隔为数组
        arr.push(board[i].split(''));
        for (let j = 0; j < col; j++) {
            if (i === 0) {
            	//判断同行，如果值为X，且前一个值不为X说明是不同的battleships
                if (arr[i][j] !== arr[i][j - 1] && arr[i][j] === 'X') {
                    count++;
                }
            } else {
            	//除了判断同行之外还要判断前一行，去除重复
                if (arr[i][j] !== arr[i][j - 1] && arr[i][j] === 'X' && arr[i][j] !== arr[i - 1][j]) {
                    count++;
                }
            }
        }
    }
    return count;
}


module.exports = [countBattleships1];

