import React, { useState } from 'react';
import './SudokuGame.css';

const BOARD_SIZE = 9;
const EMPTY_CELL = 0;

function generateRandomBoard() {
    const board = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        board.push(Array.from({ length: BOARD_SIZE }, () => Math.floor(Math.random() * 9) + 1));
    }
    return board;
}

function SudokuGame() {
    const [board, setBoard] = useState(() => generateRandomBoard());

    const renderBoard = () => {
        return board.map((row, rowIndex) => (
            <div key={rowIndex} className="board-row">
                {row.map((cell, colIndex) => (
                    <input
                        key={colIndex}
                        className={`cell ${cell === EMPTY_CELL ? 'empty' : ''}`}
                        type="text"
                        maxLength="1"
                        value={cell === EMPTY_CELL ? '' : cell}
                        readOnly={cell !== EMPTY_CELL}
                    />
                ))}
            </div>
        ));
    };

    return <div className="sudoku-game">{renderBoard()}</div>;
}

export default SudokuGame;
