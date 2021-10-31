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
  width: 50%;
  height: 0 auto;
  flex-direction: column;  
  padding: 1vw;
 `

 const Hash = styled.h4`
   color: black;
   font-size: 1.5vw;
   padding-bottom:0.9em;  
 `

 const TextTitle = styled.h1`
  color: #0071c0;
  font-weight: 900;
  font-size: 2.5vw;
  padding-bottom:0.5em ;
 `

 const Ptext = styled.p`
  color: black;
   font-weight: 500;
   font-size: 1.5vw;
   padding-bottom:0.9em;  
 `

  const OrderList = styled.p`
    color: black;
    font-size: 1.5vw;
  `

const OrderText = styled.ul`
font-size: 1.5vw;
`

 const ListTitle = styled.h2`
  color: #0071c0;
  font-weight: 900;
  font-size: 1.9vw;
  padding-bottom:0.5em ;  
 `

function Corporativa () {
  return (
    <DivCorp>
      <Img src={ImgCorp}/>
      <TextDiv>
        <Hash>#PARASUAEMPRESA</Hash>
        <TextTitle>TV CORPORATIVA</TextTitle>
        <Ptext>Nesta <strong>categoria</strong> voce <strong>aproveita TV's</strong> presentes em <strong>salas</strong> de <strong>espera</strong><br/>
        e <strong>filas de atendimento</strong>, e <strong>apresenta</strong> um <strong>conteúdo</strong> 100% personalizado,<br/>
        divulgando <strong>informações</strong>, <strong>produtos</strong> e <strong>serviços</strong> da <strong>própria empresa</strong><br/>
        para os seus <strong>próprios clientes</strong>, ou até mesmo <strong>funcionários</strong>.<br/>
        Além de ter seu <strong>próprio canal interno</strong> com <strong>notícias diversas</strong>, <strong>previsão</strong><br/>
        do <strong>tempo</strong> e <strong>cotação da bolsa de valores</strong>, a <strong>Ponto TV</strong> cria <strong>conteúdos</strong><br/>
        em <strong>vídeo</strong> com <strong>foco</strong> em <strong>sua empresa</strong>, seja com destaque <strong>institucional</strong>,<br/>
        em <strong>produtos</strong>, <strong>ofertas</strong>, ou <strong>serviços especificos</strong>.</Ptext>
        <ListTitle>VANTAGENS:</ListTitle>
        
          <OrderList>
            <li><strong>Fortaleça</strong> o <strong>relacionamento</strong> entre <strong>empresa</strong> e <strong>funcionários/clientes.</strong></li>
            <li><strong>Programação</strong> controlada via acesso <strong>remoto</strong>, podendo ser <strong>alterada</strong><br/>
            <strong>sempre</strong> que <strong>necessário</strong>.</li>
            <li>Pode-se <strong>utilizar</strong> uma <strong>TV</strong> já <strong>instalada</strong> no <strong>local</strong>.</li>
            <li>Modelo <strong>compatível</strong> com <strong>diversos segmentos</strong>.</li>
          </OrderList>
        
      </TextDiv>
    </DivCorp>
  )
}

export default Corporativa