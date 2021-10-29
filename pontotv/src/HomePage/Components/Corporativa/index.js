import React from "react";
import ImgCorp from '../../../img/imghome/tvcorporativa/tvcorporativa.jpg'
import styled from "styled-components";

const DivCorp = styled.div`
  background:url(${ImgCorp}); 
  //display: flex;
  //height: 100vh;
  justify-content: center ;
  //background-size: 100%;
  background-repeat: no-repeat;

  //@media (max-width: 1440px){
    //height: 90vh;
  //}
`
const TextArea = styled.div`
//width: 50vw;
height: max-content;
//margin-left: 48vw;

`

const Hash = styled.h4`
//padding: 20px;
//font-size: 20px;
//margin-top: 20px;
color: #4d4d4d;
`

const TextTitle = styled.h1`
// z-index: +1;
 color: #0071c0;
 //font-weight: 900;
 //padding: 15px;
 //font-size: 10pt;
 
`

const TextImg = styled.p`
 //z-index: +1;
 color: #4d4d4d;
 font-size: 15px;
 `

const OrderList = styled.p`
//z-index: +1;
color: #4d4d4d;
//font-size: 15px;
//margin-left: 15px;
`

const ListTitle = styled.h2`
 //z-index: +1;
 color: #0071c0;
 //font-weight: 900;
 //font-size: 15px ;
`

function Corporativa () {
  return (
    <DivCorp>
      <TextArea>
        <Hash>#PARASUAEMPRESA</Hash>
        <TextTitle>TV CORPORATIVA</TextTitle>
        <TextImg>Nesta <strong>categoria</strong> voce <strong>aproveita TV's</strong> presentes em <strong>salas</strong> de <strong>espera</strong><br/>
        e <strong>filas de atendimento</strong>, e <strong>apresenta</strong> um <strong>conteúdo</strong> 100% personalizado,<br/>
        divulgando <strong>informações</strong>, <strong>produtos</strong> e <strong>serviços</strong> da <strong>própria empresa</strong><br/>
        para os seus <strong>próprios clientes</strong>, ou até mesmo <strong>funcionários</strong>.<br/>
        Além de ter seu <strong>próprio canal interno</strong> com <strong>notícias diversas</strong>, <strong>previsão</strong><br/>
        do <strong>tempo</strong> e <strong>cotação da bolsa de valores</strong>, a <strong>Ponto TV</strong> cria <strong>conteúdos</strong><br/>
        em <strong>vídeo</strong> com <strong>foco</strong> em <strong>sua empresa</strong>, seja com destaque <strong>institucional</strong>,<br/>
        em <strong>produtos</strong>, <strong>ofertas</strong>, ou <strong>serviços especificos</strong>.</TextImg><br/>
        <ListTitle>VANTAGENS:</ListTitle><br/>
        <OrderList>
          <ul>
            <li><strong>Fortaleça</strong> o <strong>relacionamento</strong> entre <strong>empresa</strong> e <strong>funcionários/clientes.</strong></li>
            <li><strong>Programação</strong> controlada via acesso <strong>remoto</strong>, podendo ser <strong>alterada</strong><br/>
            <strong>sempre</strong> que <strong>necessário</strong>.</li>
            <li>Pode-se <strong>utilizar</strong> uma <strong>TV</strong> já <strong>instalada</strong> no <strong>local</strong>.</li>
            <li>Modelo <strong>compatível</strong> com <strong>diversos segmentos</strong>.</li>
          </ul>
        </OrderList>
      </TextArea>
    </DivCorp>
  )
}

export default Corporativa