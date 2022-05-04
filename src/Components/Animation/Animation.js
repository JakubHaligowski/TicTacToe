import LineHorizontal from "./LineHorizontal";
import LineVertiacl from "./LineVertical";
import { useStore } from "../../Store/Store";

import styles from "./Animation.module.css";

function Animation() {
  
  const { state } = useStore();
  
  const position =  state.winingPos;

  let line;
  let animationStyle;

  switch (position) {
    case 0:
    case 1:
    case 2:
      animationStyle = {
        gridRow: `${position + 1}/${position + 2}`,
        gridColumn: "1/4",
      };
      line = <LineHorizontal style={animationStyle} className={styles.line} />;
      break;
    case 3:
    case 4:
    case 5:
      animationStyle = {
        gridRow: "1/4",
        gridColumn: `${position - 2}/${position - 2}`,
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
      console.log(position);
      break;
  }

  return <div className={styles.container}>{line}</div>;
}

export default Animation;
