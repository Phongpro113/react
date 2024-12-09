import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helpers";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
}


// immutable
const gameReducer = (state, action) => {
  switch (action.type) {
    case 'CLICK': {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) {
        return state;
      }

      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext

      return nextState;
    }

    case 'RESET': {
      return initialState
    }

    default:
      break;
  }

  return state;
}

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);


  const [state, dispatch] = useReducer(gameReducer, initialState);

  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true, 
  //   name: "abc"
  // })

  const winner = calculateWinner(state.board);

  const handleClick = (index) => {

    // const boardCopy = [...state.board];

    // if (winner || boardCopy[index]) return;

    dispatch({
      type: 'CLICK',
      payload: {
        index,
        winner
      }
    })

    // boardCopy[index] = state.xIsNext ? "X" : "O";

    // setBoard(boardCopy);
    // setXIsNext(!state.xIsNext);

    // setState({
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext
    // })

    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext
    // })

  };

  const resetGame = () => {
    dispatch({
      type: 'RESET'
    })
    // setState({
    //   board: Array(9).fill(null)
    // })
    // setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick} />
      {winner && (
        <div className={`winner ${winner === "X" ? "is-x" : "is-o"}`}>Winner is {winner}</div>
      )}
      <button className="game-reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
