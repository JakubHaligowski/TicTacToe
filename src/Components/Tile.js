import styles from "./Tile.module.css";
import Cross from "./Cross";
import Circle from "./Circle";

function Tile(props) {
  let content;

  switch (props.value) {
    case "O":
      content = <Circle />;
      break;
    case "X":
      content = <Cross />;
      break;
    default:
      content = " ";
      break;
  }

  return (
    <div key={props.number} className={styles.tile} onClick={props.onClick}>
      {content}
    </div>
  );
}

export default Tile;
