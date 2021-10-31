// import logo from './logo.svg';
import './App.css';
import { StyledButton } from './components/Button.style';
import { AppContainer } from './components/Container.style';
import { GlobalStyles } from './GlobalStyles.style';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <StyledButton buttonlabel="Click here" backgroundColor="violet"></StyledButton>

    </AppContainer>
  );
}

export default App;
