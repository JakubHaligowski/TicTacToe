import styles from "./Board.module.css";
import Tile from "./Tile";
import { useState, useEffect } from "react";
import Animation from "./Animation";
import Modal from "./Modal";
import Status from "./Status";
import Score from "./Score";


function Board() {
  const [gameState, setgameState] = useState({
    board: Array(9).fill(null),
    isXNext: true,
    move: 0,
  });

  const [message, setMessage] = useState();  
  const [showAnimation , setShowAnimation] = useState(false);
  const [animationPos , setAnimationPos] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let message;
    const [winner, position] = calculateWinner(gameState.board);
    if (winner) {
      message = "Wygrywa: " + winner;
      setShowAnimation(true);
      setAnimationPos(position);
      setShowModal(true);
    } else if (gameState.move === 9) {
      message = "Remis";
      setShowModal(true);      
    } else {
      message = "Następny gracz: " + (gameState.isXNext ? "X" : "O");
    }

    console.log(message);
    setMessage(message);
  }, [gameState]);

  function onClickHandler(id) {
    const boardUpdate = gameState.board.slice();

    if (boardUpdate[id] !== null) {
      return;
    }

    boardUpdate[id] = gameState.isXNext ? "X" : "O";

    setgameState({
      board: boardUpdate,
      isXNext: !gameState.isXNext,
      move: gameState.move + 1,
    });
  }

  const restartHandler = () => {
    setShowModal(false);
    setShowAnimation(false);
    setgameState({ board: Array(9).fill(null), isXNext: true, move: 0 });
  };

  return (
    <div id={styles.game}>
      {showModal && <Modal text={message} onRestart={restartHandler}/>}
      <Score next={gameState.isXNext}/>
      <Status next={gameState.isXNext}/>
      <div id={styles.board}>
      {showAnimation && <Animation position={animationPos}/>}
        {gameState.board.map((tile, i) => {
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
      return [squares[a],i];
    }
  }
  return [null,null];
}

export default Board;
