import { useReducer,useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { DateTime } from 'luxon';
// Components
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Entries } from './components/Entries'
import { Modal } from './components/Modal'
// Context
import { GameProvider,gameReducer,initialGameData } from './contexts/game/gameContext'
// Style
import {
  Footer
} from './App.styles';

const theme = {
  highlight: "green"
}

function App() {
  const [gameState,gameDispatch] = useReducer(gameReducer,initialGameData);
  const [menuOpen,setMenuOpen] = useState(false);
  const gameStartDate = DateTime.fromFormat('01-01-2022', 'MM-dd-yyyy');
  const daysSinceGameStartDate = Math.floor(Math.abs(gameStartDate.diffNow('days',{}).values.days));
  const todaysLakeIndex = daysSinceGameStartDate%150;
  console.log(todaysLakeIndex);

  return (
    <GameProvider value={{ gameState,gameDispatch}}>
      <ThemeProvider theme={theme}>
        <Header open={() => setMenuOpen(true)} />
        <Main>
          <img className="lake-image" src="/images/lakes/lac la croix.svg" alt="lake" />
          <Entries />
          <Modal isOpen={menuOpen} close={() => setMenuOpen(false)} />
        </Main>
        <Footer>
          footer
        </Footer>
      </ThemeProvider>
    </GameProvider>
  );
}

export default App;
