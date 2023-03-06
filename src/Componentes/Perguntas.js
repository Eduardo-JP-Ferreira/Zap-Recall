import styled from "styled-components"

export default function Perguntas(props) {

    if(props.contaClique[props.cards.id]==0){
            
        return (     
            <CaixaPerguntas1 data-test="flashcard">
                <h1 data-test="flashcard-text">{props.cards.name}</h1>
                <img data-test="play-btn" key={props.cards.id} onClick={() => props.clicou(props.cards.id)} src="./assets/seta_play.png"></img>
            </CaixaPerguntas1> 
        )
   }
   else if(props.contaClique[props.cards.id]==1){

       return(
        <CaixaPerguntas2 data-test="flashcard">
            <h1 data-test="flashcard-text">{props.cards.question}</h1>
            <img data-test="turn-btn" key={props.cards.id} onClick={() => props.clicou(props.cards.id)} src="./assets/seta_virar.png"></img>
        </CaixaPerguntas2> 
        )
    }
    else if(props.contaClique[props.cards.id]==2){
        return(
         <CaixaPerguntas3 data-test="flashcard">
             <h1 data-test="flashcard-text">{props.cards.answer}</h1>
             <CaixaBotoes>
              <BotaoErro data-test="no-btn" onClick={() => props.botao("erro",props.cards.id)}>Não lembrei</BotaoErro>
              <BotaoQuase data-test="partial-btn" onClick={() => props.botao("quase",props.cards.id)}>Quase não lembrei</BotaoQuase>
              <BotaoAcerto data-test="zap-btn" onClick={() => props.botao("acerto",props.cards.id)}>Zap!</BotaoAcerto>
             </CaixaBotoes>
         </CaixaPerguntas3> 
         )
     }
     else if(props.contaClique[props.cards.id]>2 && props.resultado[props.cards.id] == "erro"){
        return(
            <CaixaPerguntasErro data-test="flashcard">
                <h1 data-test="flashcard-text">{props.cards.name}</h1>
                <img data-test="no-icon" key={props.cards.id} onClick={() => props.clicou(props.cards.id)} src="./assets/icone_erro.png"></img>
            </CaixaPerguntasErro> 
        )
     }
     else if(props.contaClique[props.cards.id]>2 && props.resultado[props.cards.id] == "quase"){
        return(
            <CaixaPerguntasQuase data-test="flashcard">
                <h1 data-test="flashcard-text">{props.cards.name}</h1>
                <img data-test="partial-icon" key={props.cards.id} onClick={() => props.clicou(props.cards.id)} src="./assets/icone_quase.png"></img>
            </CaixaPerguntasQuase> 
        )
     }
     else if(props.contaClique[props.cards.id]>2 && props.resultado[props.cards.id] == "acerto"){
        return(
            <CaixaPerguntasAcerto data-test="flashcard">
                <h1 data-test="flashcard-text">{props.cards.name}</h1>
                <img data-test="zap-icon" key={props.cards.id} onClick={() => props.clicou(props.cards.id)} src="./assets/icone_certo.png"></img>
            </CaixaPerguntasAcerto> 
        )
     }
}

const CaixaPerguntas1 = styled.div`
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

const CaixaPerguntas2 = styled.div`
    width: 300px;
    min-height: 131px;;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    background-color: #FFFFD4;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    position: relative;

    h1{
        height: auto;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin-left: 15px;
        position: absolute;
        top: 18px;
        left: 15px;
        margin-right: 20px;
        margin-bottom: 40px;
    }

    img{
        width: 30px;
        height: 20px;
        position: absolute;
        right: 15px;
        bottom: 6px;
    }
`
const CaixaPerguntas3 = styled.div`
    width: 300px;
    min-height: 131px;;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    background-color: #FFFFD4;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    position: relative;

    h1{
        height: auto;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin-left: 15px;
        position: absolute;
        top: 18px;
        left: 15px;
        margin-right: 20px;
        margin-bottom: 40px;
    }
 
`
const CaixaBotoes = styled.div`
    width: 300px;
    height: 57px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const BotaoErro = styled.button`
    width: 85px;
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-left: 17px;
    background-color: #FF3030;
    
    color: white;
    font-size: 12px;
    line-height: 14px;
`
const BotaoQuase = styled.button`
    width: 85px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #FF922E;
    
    color: white;
    font-size: 12px;
    line-height: 14px;
`
const BotaoAcerto= styled.button`
    width: 85px;
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-right: 12px;
    background-color: #2FBE34;

    color: white;
    font-size: 12px;
    line-height: 14px;
`
const CaixaPerguntasErro = styled.div`
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
        color: #FF3030;
        margin-left: 15px;
        text-decoration: line-through;
    }

    img{
        width: 23px;
        height: 23px;
        margin-right: 22px;
    }
`

const CaixaPerguntasQuase = styled.div`
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
        color: #FF922E;
        margin-left: 15px;
        text-decoration: line-through;
    }

    img{
        width: 23px;
        height: 23px;
        margin-right: 22px;
    }
`
const CaixaPerguntasAcerto = styled.div`
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
        color: #2FBE34;
        margin-left: 15px;
        text-decoration: line-through;
    }

    img{
        width: 23px;
        height: 23px;
        margin-right: 22px;
    }
`