import styles from "./Tile.module.css";
import Cross from "./Common/Cross";
import Circle from "./Common/Circle";

import { useStore } from "../Store/Store";
import { addMove } from "../Store/Reducer"


function Tile({number}) {
  
  const {state, dispatch} = useStore();


  // const handleTileClick = (e,id) => {
  //   console.log(e);
  //   console.log(id);
  //   // dispatch(addMove(id))
  // }

  function handleTileClick(id){
    console.log(id);
    dispatch(addMove(id));
  }
  
  let content;

  switch (state.board[number]) {
    case "O":
      content = (
        <Circle svgClass={styles.svgClass} shapeClass={styles.circle} />
      );
      break;
    case "X":
      content = (
        <Cross
          svgClass={styles.svgClass}
          shape1Class={styles.cross_line1}
          shape2Class={styles.cross_line2}
        />
      );
      break;
    default:
      content = " ";
      break;
  }


  return (
    <div key={number} className={styles.tile} onClick={() => handleTileClick(number)}>
      {content}
    </div>
  );
}


export default Tile;
