import styles from "./Score.module.css";
import ScoreButton from "./ScoreButton";
import Cross from "../Common/Cross";
import Circle from "../Common/Circle";

import { useStore } from "../../Store/Store";
import { changePlayer } from "../../Store/Reducer";
import { useEffect, useState } from 'react';

function Score(props) {
  const { state, dispatch } = useStore();

  function handleOnClick(player) {
    dispatch(changePlayer(player));
  }

  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  useEffect(()=>{
    if(state.winner===null){
      return
    }

    if(state.winner==="X"){
      setScoreX(scoreX=>setScoreX(scoreX+1));
    }

    if(state.winner==="O"){
      setScoreO(scoreO=>setScoreO(scoreO+1));
    }

  },[state.winner])

  return (
    <div className={styles.score}>
      <ScoreButton
        onClick={() => handleOnClick("X")}
        icon={
          <Cross
            svgClass={styles.svg}
            shape1Class={styles.cross}
            shape2Class={styles.cross}
          />
        }
        score={scoreX}
        selected={state.isXNext}
      />
      <ScoreButton
        onClick={() => handleOnClick("O")}
        icon={<Circle svgClass={styles.svg} shapeClass={styles.circle} />}
        score={scoreO}
        selected={!state.isXNext}
      />
    </div>
  );
}

export default Score;
