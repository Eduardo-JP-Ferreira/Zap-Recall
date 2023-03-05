import styled from "styled-components";
import Logo from "./Componentes/Logo";
import Perguntas from "./Componentes/Perguntas";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
  
  <Container>
    <GlobalStyle/>
    <Logo/>
    <Perguntas/>


  </Container>
  );
}

const Container = styled.div`
  background-color: #FB6B6B;
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  position: top;
`

export default App;
