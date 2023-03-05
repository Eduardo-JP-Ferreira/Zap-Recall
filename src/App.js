import { useState } from "react";
import styled from "styled-components";
import Logo from "./Componentes/Logo";
import Perguntas from "./Componentes/Perguntas";
import Resultado from "./Componentes/Resultado";
import GlobalStyle from "./styles/GlobalStyles";

function App(){
    const cards = [
        { id: "0", name: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { id: "1", name: "Pergunta 2", question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { id: "2", name: "Pergunta 3", question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { id: "3", name: "Pergunta 4", question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { id: "4", name: "Pergunta 5", question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { id: "5", name: "Pergunta 6", question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { id: "6", name: "Pergunta 7", question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { id: "7", name: "Pergunta 8", question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    const [contaClique, setContaClique] = useState(["0","0","0","0","0","0","0",])
    function clicou(chave){
        alert(`Clicou ${Number(chave)+1} OK`)
    }

    return (
  
        <Container>
            <GlobalStyle/>
            <Logo/>
            <ContainerPerguntas>
            {cards.map((item)=>
                <Perguntas clicou={clicou} cards={cards[item.id]}/>
            )}
            </ContainerPerguntas>
            <Resultado/>
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
const ContainerPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 444px;
    background-color: lightgoldenrodyellow;
    margin-top: 51px;
    overflow-y: scroll;
`
export default App;