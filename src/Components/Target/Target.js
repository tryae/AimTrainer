import './Target.css';
import {updateScore} from '../../Score/Score';
import {useState, useEffect} from 'react';

function Target(props) {
    const [diameter, setDiameter] = useState(50);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const handleRandDiameter = () => {
      let randDiameter = Math.floor((Math.random() * 70) + 30);
      setDiameter(randDiameter);
      return randDiameter;
    }

    const handleRandHeight = (randDiameter) => {
      let randHeight = Math.floor((Math.random() * 700));
      if ((randHeight + randDiameter + 2) > 700) {
         randHeight = randHeight - randDiameter - 2;
      };
      setTop(randHeight);

    }
    const handleRandWidth = (randDiameter) => {
      let randWidth = Math.floor((Math.random() * 900));
      if ((randWidth + randDiameter + 2) > 900) {
         randWidth = randWidth - randDiameter - 2;
      };
      setLeft(randWidth);
    }

    useEffect(() => {
      setLeft(425)
      setTop(325)
      setDiameter(50);
    }, [props.canPlay]);

    const handleClick = ({target}) => {
        if(props.canPlay){
            const randDiameter = handleRandDiameter();
            handleRandHeight(randDiameter);
            handleRandWidth(randDiameter);
            props.setScore((prev) => prev + 1);
            updateScore();
        }
    }

    return (
        <div className="Target" onClick={handleClick}
          style={{
            height: `${diameter}px`,
            width: `${diameter}px`,
            top: `${top}px`,
            left: `${left}px`
          }}>

        </div>
    )
}

export default Target;