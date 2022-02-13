import styles from './Animation.module.css';

function Animation(props) {
    
    let animationStyle;
    let classType;
    
    switch (props.position) {
        case 0:
        case 1:
        case 2:
            animationStyle={
                gridRow: `${props.position+1}/${props.position+2}`,
                gridColumn: "1/4"
            }
            classType = styles.line_horizonatl;
            break;
        case 3:
        case 4:
        case 5:
            animationStyle={
                gridRow: "1/4",
                gridColumn: `${props.position-2}/${props.position-2}`
            }
            classType = styles.line_vertical;
            break;
        case 6:
        case 7:
        default:
            console.log(props.animationPos);
            break;
    } 
    
    return (
        <div className={styles.container}>
            <div className={styles.line_oblique} /*className={classType} style={animationStyle}*/ ></div>
        </div>
        
    );
}

export default Animation;