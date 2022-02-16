import styles from "./Cross.module.css";

function Cross() {
  return (
    <svg
      width="78"
      height="78"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id={styles.line1}
        d="M5 5L73 73"
        stroke="#33FFFF"
        stroke-width="9"
        stroke-linecap="round"
      />
      <path
        id={styles.line2}
        d="M5 73L73 5"
        stroke="#33FFFF"
        stroke-width="9"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default Cross;
