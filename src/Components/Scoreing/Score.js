import styles from "./Score.module.css";
import ScoreButton from "./ScoreButton";
import Cross from "../Common/Cross";
import Circle from "../Common/Circle";

import { useStore } from "../../Store/Store";

function Score(props) {
  
  const {state} = useStore();
  
  return (
    <div className={styles.score}>
      <ScoreButton
        icon={<Cross svgClass={styles.svg} shape1Class={styles.cross} shape2Class={styles.cross} />}
        score={"1"}
        selected={state.isXNext}
      />
      <ScoreButton
        icon={<Circle svgClass={styles.svg} shapeClass={styles.circle} />}
        score={"-"}
        selected={!state.isXNext}
      />
    </div>
  );
}

export default Score;
