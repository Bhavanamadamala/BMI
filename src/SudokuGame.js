import React, { useState } from 'react';
import './SudokuGame.css';

const BOARD_SIZE = 9;
const EMPTY_CELL = 0;

function SudokuGame() {
    const [board, setBoard] = useState(() => generateRandomBoard());

    const generateRandomBoard = () => {
        const board = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            board.push(Array.from({ length: BOARD_SIZE }, () => Math.floor(Math.random() * 9) + 1));
        }
        return board;
    };

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
                        onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                        readOnly={cell !== EMPTY_CELL}
                    />
                ))}
            </div>
        ));
    };

    const handleInputChange = (rowIndex, colIndex, value) => {
        const newBoard = [...board];
        newBoard[rowIndex][colIndex] = value === '' ? EMPTY_CELL : parseInt(value);
        setBoard(newBoard);
    };

    return <div className="sudoku-game">{renderBoard()}</div>;
}

export default SudokuGame;
