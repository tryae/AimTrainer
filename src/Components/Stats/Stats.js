import './Stats.css';
import {useState} from 'react';
import { resetScore,score } from '../../Score/Score';

function Stats(props) {
    const [name, setName] = useState('Start');
    const [time, setTime] = useState(0);

    function wait(){
      return new Promise (resolve => {
        setTimeout(resolve, 1000);
      })
    };

    const handleClick = async ({target}) => {
      if (target.value === 'Start') {
        setName((prev) => prev === "Start" ? "Wait": "Start")
        props.setCanPlay(true);
        for (let i = 15; i >= 0; i--) {
          setTime(i);
          await wait();
        }
        props.setCanPlay(false);
        setName("Start");
        if (score > props.currHighscore) {
          props.setHighscore(score);
        }
        props.setScore(0);
        resetScore();
      }
    }

    return (
        <div className="container">
          <button onClick={handleClick} value={name}>
            Start
          </button>
          <h2>Timer: {time}</h2>
          <h2>Score: {props.currScore}</h2>
          <h2>HighScore: {props.currHighscore}</h2>
        </div>
    )
}

export default Stats;