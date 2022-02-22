import styles from "./Status.module.css";
import Cross from "../Common/Cross";
import Circle from "../Common/Circle";

import { useStore } from "../../Store/Store";


function Status({next}) {
  
  const {state} = useStore(); 
  
  return (
    <span id={styles.status}>
      Teraz ruch ma:
      {state.isXNext===true ? (
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
