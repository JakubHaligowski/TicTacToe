import styles from "./ScoreButton.module.css";

function ScoreButton({ selected, icon, score, onClick }) {
  let Class;
  if (selected) {
    Class = `${styles.button} ${styles.selected}`;
  } else {
    Class = styles.button;
  }

  return (
    <div className={Class} onClick={onClick}>
      {icon}
      <span className={styles.score}>{score === 0 ? "-" : score}</span>
    </div>
  );
}

export default ScoreButton;
