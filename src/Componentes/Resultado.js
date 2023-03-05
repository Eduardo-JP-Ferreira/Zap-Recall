import styled from "styled-components";

export default function Resultado(){

    return(
        <ContainerResultado>
            <CaixaResultado>
                <h1>0/4 CONCLUÍDOS</h1>
            </CaixaResultado>
        </ContainerResultado>
    )
}

const ContainerResultado = styled.div`
    width: 375px;
    height: 70px;
    background-color: lightgray;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`

const CaixaResultado = styled.div`
    width: 375px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`