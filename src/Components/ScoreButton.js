import styles from './ScoreButton.module.css'

function ScoreButton(props) {

    let style;
    if(props.selected){
        style = `${styles.button} ${styles.selected}`
    }else{
        style = styles.button;
    }
    
    return (
        <div className={style}>
            {props.icon}
            <span className={styles.score}>{props.score}</span>
        </div>
    );
}

export default ScoreButton;