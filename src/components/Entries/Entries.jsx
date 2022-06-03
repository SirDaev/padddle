import { useContext,useEffect,useState } from 'react'
// Components
import { Entry } from "../Entry"
// Context
import gameContext from '../../contexts/game/gameContext'
// Functions
import { calcBearing } from '../../functions/calcBearing';
import { calcDistance } from '../../functions/calcDistance';
// Data
import { lakes } from '../../data/lakes';
// Style
import {
  EntriesForm
} from './Entries.styles';

const Entries = () => {
  const { gameDispatch,gameState } = useContext(gameContext)
  const [ currentGuess,setCurrentGuess ] = useState('')
  const [ disabled,setDisabled ] = useState(true);
  const correctLake = lakes.filter(lake => lake.name === gameState.todaysLake)[0]

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentLake = lakes.filter(lake => lake.name === currentGuess)[0]

    calcBearing(currentLake.lat,currentLake.lon,correctLake.lat,correctLake.lon)

    gameDispatch({
      type: 'SET_GUESS',
      payload: {
        name: currentGuess,
        distance: calcDistance(currentLake.lat,currentLake.lon,correctLake.lat,correctLake.lon)
      }
    });
    setCurrentGuess('');
  };

  const handleChange = (event) => {
    const val = event.target.value;
    setCurrentGuess(val)
  }

  useEffect(() => {
    console.log(gameState)
  },[gameState]);

  useEffect(() => {
    setDisabled(currentGuess === "" ? true : false);
  },[currentGuess]);

  const fiveArr = ["","","","",""];

  return (
    <>
      {fiveArr.map((item,index) => {
        return(
          <Entry
            key={index}
            name={gameState.guesses[index].name}
            distance={gameState.guesses[index].distance.mi === null ? "" : (Math.round(gameState.guesses[index].distance.mi * 10) / 10)}
          />
        )
      })}
      <EntriesForm onSubmit={handleSubmit}>
        <input type="text" value={currentGuess} onChange={handleChange} />
        <button type="submit" disabled={disabled}>GUESS</button>
      </EntriesForm>
    </>
  )
}

export default Entries;