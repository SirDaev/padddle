import { useContext,useEffect,useState } from 'react'
// Context
import gameContext from '../../contexts/game/gameContext'
// Style
import {
  EntriesForm,
  Guess
} from './Entries.styles';

const Entries = () => {
  const { gameDispatch,gameState } = useContext(gameContext)
  const [ currentGuess,setCurrentGuess ] = useState('')
  const [ disabled,setDisabled ] = useState(true);
  const possibleGuesses = [
    "Clearwater",
    "Sawbill",
    "Altono",
    "Polly",
    "Smoke",
    "Flame",
    "Burnt",
    "Phoebe",
    "Zenith",
    "Mountain",
    "Hungry Jack",
    "Bearskin"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    gameDispatch({
      type: 'SET_GUESSES',
      payload: currentGuess
    });
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