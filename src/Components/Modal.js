import styles from "./Modal.module.css";

import { useStore } from "../Store/Store";
import {restart} from "../Store/Reducer"


function Modal({winner, onRestart}) {
  
  const {state, dispatch} = useStore();
  
  const handleRestart = () => {
    dispatch(restart());
  }
  
  
  let message;
  switch (state.winner) {
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
          <button className={styles.modal_button}  onClick={handleRestart}>Spróbuj ponownie</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
