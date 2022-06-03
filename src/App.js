import { useReducer } from 'react'
import { ThemeProvider } from 'styled-components';
import { DateTime } from 'luxon';
// Components
import { Entries } from './components/Entries'
import { Main } from './components/Main'
// Context
import { GameProvider,gameReducer,initialGameData } from './contexts/game/gameContext'
// Style
import {
  Footer,
  Header
} from './App.styles';

const theme = {
  highlight: "green"
}

function App() {
  const [gameState,gameDispatch] = useReducer(gameReducer,initialGameData);

  const gameStartDate = DateTime.fromFormat('01-01-2022', 'MM-dd-yyyy');
  const daysSinceGameStartDate = Math.floor(Math.abs(gameStartDate.diffNow('days',{}).values.days));
  const todaysLakeIndex = daysSinceGameStartDate%150;
  console.log(todaysLakeIndex);

  return (
    <GameProvider value={{ gameState,gameDispatch}}>
      <ThemeProvider theme={theme}>
        <Header>
          <h1>PADD<span>DLE</span></h1>
        </Header>
        <Main>
          <img src="/images/lakes/saganaga.svg" alt="lake" />
          <Entries />
        </Main>
        <Footer>
          footer
        </Footer>
      </ThemeProvider>
    </GameProvider>
  );
}

export default App;
