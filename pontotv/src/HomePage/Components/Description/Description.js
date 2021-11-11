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
  font-size: 1.4vw;
  animation: fadeIn 6s;
}
`


const Ps = styled.span`
  
`


function Description () {
  return(
    <DivHistory>
      <Img src={HistoryImg}/>
      <TextDiv>
        <Ptext>A <Ps>Ponto TV</Ps> surgiu em <Ps>2013</Ps> visando ser <Ps>referência</Ps> no mercado de <Ps>midia indoor</Ps>, onde a <Ps>publicidade</Ps> é oferecida<br/>
        a qualquer <Ps>empresa</Ps> que queira <Ps>anunciar</Ps> seus <Ps>produtos</Ps> e <Ps>serviços</Ps>, através de <Ps>videos</Ps> que são <Ps>exibidos</Ps> em <Ps>TV's</Ps>,<br/>
        <Ps>instaladas</Ps> dentro de <Ps>estabelecimentos comerciais</Ps> com <Ps>grande concentração</Ps> de <Ps>pessoas</Ps>.<br/><br/>
        <Ps>Inicialmente</Ps> atuando em <Ps>Curitiba</Ps> (PR) e região metropolitana, <Ps>hoje</Ps> contamos com mais de <Ps>190 pontos</Ps> de <Ps>TV's</Ps><br/>
        pelo <Ps>Brasil</Ps>, distribuidos em <Ps>10 estados</Ps>, ao longo de <Ps>35 cidades</Ps>.<br/><br/>
        Dentro desta <Ps>proporção</Ps>, nossa rede <Ps>impacta 80 mil</Ps> pessoas <Ps>diariamente</Ps> com as <Ps>publicidades exibidas</Ps> nas TV's,<br/>
        que por sua vez, são <Ps>estrategicamente instaladas</Ps> em restaurantes, academias, cartórios,<br/>
        lotéricas, hospitais, farmácias, dentre outros.</Ptext>
      </TextDiv>
    </DivHistory>
  )
}

export default Description;