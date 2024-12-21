import './App.css';
import Stats from '../Stats/Stats';
import Game from '../Game/Game';
import Info from '../Info/Info';
import {useState} from 'react';


function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [canPlay, setCanPlay] = useState(false);

  return (
    <div className="App">
      <Stats currScore={score} setScore={setScore} currHighscore={highscore} setCanPlay={setCanPlay} setHighscore={setHighscore} />
      <Game setScore={setScore} canPlay={canPlay} />
      <Info />
    </div>
  );
}

export default App;
