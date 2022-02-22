import styles from './ScoreButton.module.css'

function ScoreButton({selected, icon, score}) {

    let Class;
    if(selected){
        Class = `${styles.button} ${styles.selected}`
    }else{
        Class = styles.button;
    }
    
    return (
        <div className={Class}>
            {icon}
            <span className={styles.score}>{score}</span>
        </div>
    );
}

export default ScoreButton;