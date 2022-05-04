import { useStore } from "../Store/Store";

import styles from "./Board.module.css";

import Tile from "./Tile";
import Animation from "./Animation/Animation";

function Board() {
  
  const {state} = useStore()
  
  return (
    <div id={styles.board}>
      {state.endOfGame && <Animation/>}
      {state.board.map((tile, i) => {
        return <Tile value={tile} number={i} />;
      })}
    </div>
  );
}

export default Board;
