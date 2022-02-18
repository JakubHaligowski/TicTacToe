import styles from "./Score.module.css";
import ScoreButton from "./ScoreButton";
import Cross from "./Cross";
import Circle from "./Circle";

function Score(props) {
  return (
    <div className={styles.score}>
      <ScoreButton
        icon={<Cross svgClass={styles.svg} shape1Class={styles.cross} shape2Class={styles.cross} />}
        score={"1"}
        selected={props.next}
      />
      <ScoreButton
        icon={<Circle svgClass={styles.svg} shapeClass={styles.circle} />}
        score={"-"}
        selected={!props.next}
      />
    </div>
  );
}

export default Score;
