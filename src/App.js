import { ThemeProvider } from 'styled-components';
// Components
import { Main } from './components/Main'
// Style
import {
  Footer,
  Header
} from './App.styles';

const theme = {
  highlight: "green"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <h1>PADD<span>DLE</span></h1>
      </Header>
      <Main>
        <img src="/superior.svg" alt="lake" />
      </Main>
      <Footer>
        footer
      </Footer>
    </ThemeProvider>
  );
}

export default App;
