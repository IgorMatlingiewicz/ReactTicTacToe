import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((previousGameBoard) => {
            const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])]       ;
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((colplayerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{colplayerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}
    </ol>
}