import React from "react";
import ImgCorp from '../../../img/imghome/tvcorporativa/tvcorporativa.jpg'
import styled from "styled-components";

const DivCorp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`
 const TextDiv = styled.div`  
  position: absolute;   
  color: white; 
  //display: flex;    
  width: 47%;
  height: 0 auto;
  flex-direction: column;
  margin-top: 0.5vw;  
  margin-right: 2.2vw;
  
 `

 const Hash = styled.h4`
   color: #505050;
   font-size: 1.5vw;
   margin-top: 1vw;
   
 `

 const TextTitle = styled.h1`
  color: #0071c0;
  font-weight: 900;
  font-size: 4vw;
  margin-top: 0.5vw;
  
 `

 const Ptext = styled.p`
   color: #505050;
   font-weight: 500;
   font-size: 1.4vw;
   
 `

  const OrderList = styled.p`
    color: #505050;
    font-size: 1.4vw;
    margin-top: 0.5vw;
  `

 const ListTitle = styled.h2`
  color: #0071c0;
  font-weight: 900;
  font-size: 1.9vw;
  margin-top: 0.5vw;
 `

const Ps = styled.span`

`

function Corporativa () {
  return (
    <DivCorp>
      <Img src={ImgCorp}/>
      <TextDiv>
        <Hash>#PARASUAEMPRESA</Hash>
        <TextTitle>TV CORPORATIVA</TextTitle>
        <Ptext>Nesta <Ps>categoria</Ps> voce <Ps>aproveita TV's</Ps> presentes em <Ps>salas</Ps> de <Ps>espera </Ps>
        e <Ps>filas de atendimento</Ps>, e <Ps>apresenta</Ps> um <Ps>conteúdo</Ps> 100% personalizado,
        divulgando <Ps>informações</Ps>, <Ps>produtos</Ps> e <Ps>serviços</Ps> da <Ps>própria empresa </Ps>
        para os seus <Ps>próprios clientes</Ps>, ou até mesmo <Ps>funcionários</Ps>.
        Além de ter seu <Ps>próprio canal interno</Ps> com <Ps>notícias diversas</Ps>, <Ps>previsão </Ps>
        do <Ps>tempo</Ps> e <Ps>cotação da bolsa de valores</Ps>, a <Ps>Ponto TV</Ps> cria <Ps>conteúdos </Ps>
        em <Ps>vídeo</Ps> com <Ps>foco</Ps> em <Ps>sua empresa</Ps>, seja com destaque <Ps>institucional</Ps>,
        em <Ps>produtos</Ps>, <Ps>ofertas</Ps>, ou <Ps>serviços especificos</Ps>.</Ptext>
        <ListTitle>VANTAGENS:</ListTitle>
          <OrderList>
            <li><Ps>Fortaleça</Ps> o <Ps>relacionamento</Ps> entre <Ps>empresa</Ps> e <Ps>funcionários/clientes</Ps>.</li>
            <li><Ps>Programação</Ps> controlada via acesso <Ps>remoto</Ps>, podendo ser <Ps>alterada</Ps>
            <Ps>sempre</Ps> que <Ps>necessário</Ps>.</li>
            <li>Pode-se <Ps>utilizar</Ps> uma <Ps>TV</Ps> já <Ps>instalada</Ps> no <Ps>local</Ps>.</li>
            <li>Modelo <Ps>compatível</Ps> com <Ps>diversos segmentos</Ps>.</li>
          </OrderList>
        
      </TextDiv>
    </DivCorp>
  )
}

export default Corporativa