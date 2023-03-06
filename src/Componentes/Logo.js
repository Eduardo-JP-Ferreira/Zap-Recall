import styled from "styled-components"

export default function Logo(){
    return(
        <ContainerTopo>
            <img src="./assets/logo.png"></img>
            <h1>ZapRecall</h1>
        </ContainerTopo>
    )
}

const ContainerTopo = styled.div`
    width: 375px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    
    img{
        width: 52px;
        height: 60px;
    }
    h1{
        width: 204px;
        height: 44px;
        font-family: 'Righteous', cursive;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
    }
`