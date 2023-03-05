import styled from "styled-components"

export default function Perguntas(props) {

    //console.log(props.contaClique)
    if(props.contaClique[props.cards.id]==0){
            
        return (     
            <CaixaPerguntas>
                <h1>{props.cards.name}</h1>
                <img key={props.cards.id} onClick={() => props.clicou(props.cards.id)} src="./assets/seta_play.png"></img>
            </CaixaPerguntas> 
        )
   }
   else{

       return(
        <CaixaPerguntas>
            <h1>{props.cards.question}</h1>
            <img key={props.cards.id} onClick={() => props.clicou(props.cards.id)} src="./assets/seta_virar.png"></img>
        </CaixaPerguntas> 
        )
    }
}

const CaixaPerguntas = styled.div`
    width: 300px;
    min-height: 65px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

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