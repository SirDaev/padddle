import { useContext,useEffect,useState } from 'react'
// Context
import gameContext from '../../contexts/game/gameContext'
// Functions
import { calcDistance } from '../../functions/calcDistance';
// Data
import { lakes } from '../../data/lakes';
// Style
import {
  EntriesForm,
  Guess
} from './Entries.styles';

const Entries = () => {
  const { gameDispatch,gameState } = useContext(gameContext)
  const [ currentGuess,setCurrentGuess ] = useState('')
  const [ disabled,setDisabled ] = useState(true);
  const correctLakeName = lakes.filter(lake => lake.name === gameState.todaysLake)[0].name

  const handleSubmit = (event) => {
    event.preventDefault();

    if(lakes.filter(lake => lake.name === currentGuess).length) {
      console.log("yes in list")
    } else {
      console.log("not in list")
    }

    if(currentGuess === correctLakeName) {
      console.log("bingo")
    }

    gameDispatch({
      type: 'SET_GUESSES',
      payload: currentGuess
    });
    console.log(calcDistance("48.08722","-90.31778","47.88583","-90.87778"))
    setCurrentGuess('');
  };

  const handleChange = (event) => {
    const val = event.target.value;
    setCurrentGuess(val)
  }

  useEffect(() => {
    setDisabled(currentGuess === "" ? true : false);
  },[currentGuess]);

  const fiveArr = ["","","","",""];

  return (
    <>
      {fiveArr.map((item,index) => {
        return(
          <Guess key={index}>{gameState.guesses[index] ? gameState.guesses[index].text : ""}</Guess>
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