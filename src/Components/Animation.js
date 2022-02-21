import LineHorizontal from "./LineHorizontal";
import LineVertiacl from "./LineVertical";

import styles from "./Animation.module.css";

function Animation(props) {
  let line;
  let animationStyle;

  switch (props.position) {
    case 0:
    case 1:
    case 2:
      animationStyle = {
        gridRow: `${props.position + 1}/${props.position + 2}`,
        gridColumn: "1/4",
      };
      line = <LineHorizontal style={animationStyle} className={styles.line} />;
      break;
    case 3:
    case 4:
    case 5:
      animationStyle = {
        gridRow: "1/4",
        gridColumn: `${props.position - 2}/${props.position - 2}`,
      };
      line = <LineVertiacl style={animationStyle} className={styles.line} />;
      break;
    case 6:
      line = (
        <LineHorizontal
          style={animationStyle}
          className={`${styles.oblique1} ${styles.line}`}
        />
      );
      break;
    case 7:
      line = (
        <LineHorizontal
          style={animationStyle}
          className={`${styles.oblique2} ${styles.line}`}
        />
      );
      break;
    default:
      console.log(props.animationPos);
      break;
  }

  return <div className={styles.container}>{line}</div>;
}

export default Animation;
