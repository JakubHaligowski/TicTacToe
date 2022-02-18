import styles from './Circle.module.css'

function Circle() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id={styles.circle}
        cx="40"
        cy="40"
        r="35.5"
        stroke="#EA6B6B"
        stroke-width="9"
      />
    </svg>
  );
}

export default Circle;
