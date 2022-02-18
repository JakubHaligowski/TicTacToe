import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        {props.text}
        <div className={styles.modal_options}>
          <button className={styles.modal_button}>Pokaż historię</button>
          <button className={styles.modal_button}  onClick={props.onRestart}>Spróbuj ponownie</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
