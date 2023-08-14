const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Sudoku solving endpoint
app.post('/solve', (req, res) => {
    const board = req.body.board;

    if (!board || board.length !== 9 || board[0].length !== 9) {
        return res.status(400).json({ error: "Invalid board" });
    }

    if (solveSudoku(board)) {
        return res.json({ solvedBoard: board });
    } else {
        return res.json({ error: "Unsolvable" });
    }
});

// Sudoku solving logic
function solveSudoku(board) {
    let emptySpot = findEmpty(board);
    if (!emptySpot) {
        return true; // puzzle solved
    }

    let row = emptySpot[0];
    let col = emptySpot[1];

    for (let num = 1; num <= 9; num++) {
        if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) {
                return true;
            }
            board[row][col] = 0; // reset the cell
        }
    }
    return false;
}

function findEmpty(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                return [i, j]; // row, col
            }
        }
    }
    return false;
}

function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num || board[row][i] === num) {
            return false; // check row and column
        }
        if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === num) {
            return false; // check 3*3 box
        }
    }
    return true;
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
