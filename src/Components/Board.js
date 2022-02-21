import styles from "./Board.module.css";
import Tile from "./Tile";
import {useReducer } from "react";
import Animation from "./Animation";
import Modal from "./Modal";
import Status from "./Status";
import Score from "./Score";

function Board() {
  const initialState = {
    board: Array(9).fill(null),
    isXNext: true,
    move: 0,
    endOfGame: false,
    winner: null,
    winingPos: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "move":
        const boardUpdate = state.board.slice();
        const id = action.tileId;

        if (boardUpdate[id] !== null) {
          return state;
        }

        boardUpdate[id] = state.isXNext ? "X" : "O";

        const [winner, position] = calculateWinner(boardUpdate);

        if (winner) {
          return {
            ...state,
            board: boardUpdate,
            isXNext: !state.isXNext,
            move: state.move + 1,
            endOfGame: true,
            winner: winner,
            winingPos: position
          };
        } else if (state.move === 8) {
          return {
            ...state,
            board: boardUpdate,
            isXNext: !state.isXNext,
            move: state.move + 1,
            endOfGame: true
          };
        } else {
          return {
            ...state,
            board: boardUpdate,
            isXNext: !state.isXNext,
            move: state.move + 1,
          };
        }
 
      case "restart":
        return initialState;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);


  function onClickHandler(id) {
    dispatch({ type: "move", tileId: id });
  }

  const restartHandler = () => {
    dispatch({ type: "restart" });
  };

  return (
    <div id={styles.game}>
      {state.endOfGame && <Modal winner={state.winner} onRestart={restartHandler} />}
      <Score next={state.isXNext} />
      <Status next={state.isXNext} />
      <div id={styles.board}>
        {state.endOfGame && <Animation position={state.winingPos} />}
        {state.board.map((tile, i) => {
          return (
            <Tile value={tile} number={i} onClick={() => onClickHandler(i)} />
          );
        })}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], i];
    }
  }
  return [null, null];
}

export default Board;
