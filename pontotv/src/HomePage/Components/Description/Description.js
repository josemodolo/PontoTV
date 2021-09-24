import React from "react";
import Descriptionimg from '../../../img/imghome/historia/historia.jpg'
import styled from "styled-components";


const DivHistory = styled.div`
  display: flex;
  background:url(${Descriptionimg});
  align-items: center;
  justify-content: center;
  height: 36vh;
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
`


const ImgText = styled.p`
 z-index: +1;
 color: white;
`

function Description () {
  return(
    <DivHistory>      
      <ImgText>A <strong>Ponto TV</strong> surgiu em 2013 visando ser referência no mercado de midia indoor, onde a publicidade é oferecida<br/>
      a qualquer empresa que queira anunciar seus produtos e serviços, através de videos que são exibidos em TV's,<br/>
      instaladas dentro de estabelecimentos comerciais com grande concentração de pessoas.<br/><br/>
      Inicialmente atuando em Curitiba (PR) e região metropolitana, hoje contamos com mais de 190 pontos de TV's<br/>
      pelo Brasil, distribuidos em 10 estados, ao longo de 35 cidades.<br/><br/>
      Dentro desta proporção, nossa rede impacta 80 mil pessoas diariamente com as publicidades exibidas nas TV's,<br/>
      que por sua vez, são estrategicamente instaladas em restaurantes, academias, cartórios,<br/>
      lotéricas, hospitais, farmácias, dentre outros.</ImgText>
    </DivHistory>
  )
}

export default Description;