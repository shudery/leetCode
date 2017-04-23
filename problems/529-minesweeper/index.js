// Title  : minesweeper
// Date   : 2017-04-13
// Author : Daguo
/*****************************************
You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:

If a mine ('M') is revealed, then the game is over - change it to 'X'.
If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.

Input: 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

*****************************************/

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let row = click[0];
    let col = click[1];
    //点到雷爆炸
    if (board[row][col] == 'M') {
        board[row][col] = 'X';
        return board;
    }
    //不是E不能点
    if (board[row][col] != 'E')
        return board;
    
    //记录递归查雷时，已经查过的点
    let checked = [];

    let find = function(row, col) {
        let count = 0;
        //检测周围九宫格，检测边界
        for (let i = col - 1; i <= col + 1; i++)
            if (0 <= i && i < board[0].length)
                for (let j = row - 1; j <= row + 1; j++)
                    if (j >= 0 && j < board.length && board[j][i] == 'M')
                        count++;

        if (count != 0) {
            //找到雷的信息就停止迭代，修改该点信息
            board[row][col] = '' + count;
        } else {
            //无雷的信息，将该点记为B
            board[row][col] = 'B';
            //记录上层递归的位置，防止重复查雷
            checked.push(row + '-' + col);

            //向周围九宫格格扩展递归找雷，检测边界和已查数组checked
            for (let i = col - 1; i <= col + 1; i++)
                if (0 <= i && i < board[0].length)
                    for (let j = row - 1; j <= row + 1; j++)
                        if (j >= 0 && j < board.length && checked.indexOf(j + '-' + i) == -1)
                            find(j, i);
        }
    }
    find(row, col);
    return board;
};
module.exports = updateBoard;
