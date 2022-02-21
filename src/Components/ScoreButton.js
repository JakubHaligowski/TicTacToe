import styles from './ScoreButton.module.css'

function ScoreButton(props) {

    let Class;
    if(props.selected){
        Class = `${styles.button} ${styles.selected}`
    }else{
        Class = styles.button;
    }
    
    return (
        <div className={Class}>
            {props.icon}
            <span className={styles.score}>{props.score}</span>
        </div>
    );
}

export default ScoreButton;