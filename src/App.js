import { useReducer } from 'react'
import { ThemeProvider } from 'styled-components';
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
  const [gameState,gameDispatch] = useReducer(gameReducer,initialGameData)

  return (
    <GameProvider value={{ gameState,gameDispatch}}>
      <ThemeProvider theme={theme}>
        <Header>
          <h1>PADD<span>DLE</span></h1>
        </Header>
        <Main>
          <img src="/sawbill.svg" alt="lake" />
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
