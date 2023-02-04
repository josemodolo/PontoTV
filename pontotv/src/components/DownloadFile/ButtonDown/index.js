import React from "react"
import styled from "styled-components"

const ButtonDownFile = styled.button `
    background-color: #0071bb;
    cursor: pointer;
    padding-top: 1.1vw;
    border: none;
    border-radius: 0.7vw;
    padding-left: 1vw;
    padding-right: 2vw;
    line-height: 1.7vw;
    @media (max-width: 490px){
        padding: 1vw;
        padding-left: 5vw;
        padding-right: 5vw;
        line-height: 3vw;
        padding-top: 3.5vw;
        border: none;
        border-radius: 2vw;
    }
    &:hover{
        background-color: #ffb047;
    }
`

const ButtonTextUp = styled.p`
    color: #ffb047;
    font-size: 3.2vw;
    font-family:"GilroyHeavy";
    @media (max-width: 490px){
        font-size: 6.5vw;
    }
    &:hover{
        color: #0071bb;
    }    
`

const ButtonTextDown = styled.p`
@media (max-width: 490px){
    font-size: 1.8vw;
}
    color: white;
    font-size: 0.9vw; 
`

export default function ButtonDownload (){
    return(
        <>
            <ButtonDownFile><ButtonTextUp>CLIQUE AQUI</ButtonTextUp><ButtonTextDown>PARA BAIXAR NOSSA APRESENTAÇÃO EM PDF</ButtonTextDown></ButtonDownFile>
        </>
    )
}