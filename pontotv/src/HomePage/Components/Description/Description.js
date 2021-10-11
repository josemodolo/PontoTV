import React from "react";
import styled from "styled-components";
import HistoryImg from '../../../img/imghome/historia/historia.jpg'


const DivHistory = styled.div`
  display: flex;
  background:url(${HistoryImg});
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
 font-size: 18px;
`

function Description () {
  return(
    <DivHistory>      
      <ImgText>A <strong>Ponto TV</strong> surgiu em <strong>2013</strong> visando ser <strong>referência</strong> no mercado de <strong>midia indoor</strong>, onde a <strong>publicidade</strong> é oferecida<br/>
      a qualquer <strong>empresa</strong> que queira <strong>anunciar</strong> seus <strong>produtos</strong> e <strong>serviços</strong>, através de <strong>videos</strong> que são <strong>exibidos</strong> em <strong>TV's</strong>,<br/>
      <strong>instaladas</strong> dentro de <strong>estabelecimentos comerciais</strong> com <strong>grande concentração</strong> de <strong>pessoas</strong>.<br/><br/>
      <strong>Inicialmente</strong> atuando em <strong>Curitiba</strong> (PR) e região metropolitana, <strong>hoje</strong> contamos com <strong>mais</strong> de <strong>190 pontos</strong> de <strong>TV's</strong><br/>
      pelo <strong>Brasil</strong>, distribuidos em <strong>10 estados</strong>, ao longo de <strong>35 cidades</strong>.<br/><br/>
      Dentro desta <strong>proporção</strong>, nossa rede <strong>impacta 80 mil</strong> pessoas <strong>diariamente</strong> com as <strong>publicidades exibidas</strong> nas TV's,<br/>
      que por sua vez, são <strong>estrategicamente instaladas</strong> em restaurantes, academias, cartórios,<br/>
      lotéricas, hospitais, farmácias, dentre outros.</ImgText>
    </DivHistory>
  )
}

export default Description;