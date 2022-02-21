import styles from "./Modal.module.css";

function Modal(props) {
  
  let message;
  switch (props.winner) {
    case null:
      message = "Remis!";
      break;
    case "X":
      message = "Wygrywa X!"
      break;
    case "O":
      message = "Wgrywa O!"
      break;
    default:
      break;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        {message}
        <div className={styles.modal_options}>
          <button className={styles.modal_button}>Pokaż historię</button>
          <button className={styles.modal_button}  onClick={props.onRestart}>Spróbuj ponownie</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
