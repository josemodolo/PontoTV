import React from "react";
import styled from "styled-components";
import HistoryImg from '../../../img/imghome/historia/historia.jpg'

const DivHistory = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const TextDiv = styled.div`
  position: absolute;
  text-align: center; 
  color: white;
  
`

const Ptext = styled.p`
  font-size: 1.5vw;
  font-weight: 450;
  
`

function Description () {
  return(
    <DivHistory>
      <Img src={HistoryImg}/>
      <TextDiv><Ptext>A <strong>Ponto TV</strong> surgiu em <strong>2013</strong> visando ser <strong>referência</strong> no mercado de <strong>midia indoor</strong>, onde a <strong>publicidade</strong> é oferecida<br/>
      a qualquer <strong>empresa</strong> que queira <strong>anunciar</strong> seus <strong>produtos</strong> e <strong>serviços</strong>, através de <strong>videos</strong> que são <strong>exibidos</strong> em <strong>TV's</strong>,<br/>
      <strong>instaladas</strong> dentro de <strong>estabelecimentos comerciais</strong> com <strong>grande concentração</strong> de <strong>pessoas</strong>.<br/><br/>
      <strong>Inicialmente</strong> atuando em <strong>Curitiba</strong> (PR) e região metropolitana, <strong>hoje</strong> contamos com <strong>mais</strong> de <strong>190 pontos</strong> de <strong>TV's</strong><br/>
      pelo <strong>Brasil</strong>, distribuidos em <strong>10 estados</strong>, ao longo de <strong>35 cidades</strong>.<br/><br/>
      Dentro desta <strong>proporção</strong>, nossa rede <strong>impacta 80 mil</strong> pessoas <strong>diariamente</strong> com as <strong>publicidades exibidas</strong> nas TV's,<br/>
      que por sua vez, são <strong>estrategicamente instaladas</strong> em restaurantes, academias, cartórios,<br/>
      lotéricas, hospitais, farmácias, dentre outros.</Ptext></TextDiv>
    </DivHistory>
  )
}

export default Description;