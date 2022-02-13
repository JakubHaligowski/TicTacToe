import styles from "./Tile.module.css";
import { ReactComponent as Circle } from "../res/Circle.svg";
import { ReactComponent as Cross } from "../res/Cross.svg";

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
