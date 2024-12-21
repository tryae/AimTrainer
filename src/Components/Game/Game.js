import './Game.css';
import Target from '../Target/Target';

function Game(props) {

    return (
        <div className="Game">
          <Target canPlay={props.canPlay} setScore={props.setScore} />
        </div>
    )
}

export default Game;