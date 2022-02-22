import Modal from "./Modal";
import Score from "./Scoreing/Score";
import Status from "./Scoreing/Status";
import Board from "./Board";
import { useStore } from "../Store/Store";

import styles from "./Game.module.css";

function Game() {
    
    const {state} = useStore();

    return (
    <div id={styles.game}>
      {state.endOfGame && (
        <Modal/>
      )}
      <Score/>
      <Status/>
      <Board/>
    </div>
  );
}

export default Game;