import styles from "./Tile.module.css";
import Cross from "./Cross";
import Circle from "./Circle";

function Tile(props) {
  let content;

  switch (props.value) {
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
    <div key={props.number} className={styles.tile} onClick={props.onClick}>
      {content}
    </div>
  );
}

export default Tile;
