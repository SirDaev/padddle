import { useContext,useEffect,useState } from 'react'
// Context
import gameContext from '../../contexts/game/gameContext'
// Style
import { EntriesForm } from './Entries.styles';

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
    console.log(currentGuess)
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
    if(currentGuess === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  },[currentGuess]);

  return (
    <>
      <ol>
        {gameState.guesses.map((guess) => {
          return (
            <li key={guess.id}>{guess.text}</li>
          )
        })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" value={currentGuess} onChange={handleChange} />
        <button type="submit" disabled={disabled}>GUESS</button>
      </form>
    </>
  )
}

export default Entries;