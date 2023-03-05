import styled from "styled-components"

export default function Perguntas(){
    return(
        <ContainerPerguntas>
            <CaixaPerguntas>
                <h1>Pergunta 1</h1>
                <img src="./assets/seta_play.png"></img>
            </CaixaPerguntas>
            <CaixaPerguntas>
                <h1>Pergunta 2</h1>
                <img src="./assets/seta_play.png"></img>
            </CaixaPerguntas>
        </ContainerPerguntas>
    )
}

const ContainerPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 444px;
    background-color: lightgoldenrodyellow;
    margin-top: 26px;
`

const CaixaPerguntas = styled.div`
    width: 300px;
    height: 65px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;

    h1{
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        margin-left: 15px;
    }

    img{
        width: 20px;
        height: 23px;
        margin-right: 22px;
    }
`