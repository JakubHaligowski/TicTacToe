import styles from "./Status.module.css";
import Cross from "./Cross";
import Circle from "./Circle";

function Status(props) {
  return (
    <span id={styles.status}>
      Teraz ruch ma:{" "}
      {props.next===true ? (
        <Cross
          svgClass={styles.svg}
          shape1Class={styles.cross}
          shape2Class={styles.cross}
        />
      ) : (
        <Circle svgClass={styles.svg} shapeClass={styles.circle} />
      )}
    </span>
  );
}

export default Status;
