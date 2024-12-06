import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) return;

    boardCopy[index] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick} />
      {winner && (
        <div className={`winner ${winner == "X" ? "is-x":"is-o"}`}>Winner is {winner}</div>
      )}
      <button className="game-reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
