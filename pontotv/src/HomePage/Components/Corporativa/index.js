import React from "react";
import ImgCorp from '../../../img/imghome/tvcorporativa/tvcorporativa.jpg'
import styled from "styled-components";
import CorporativaImgBg from '../../../img/imgMobileHome/corporativa.png'

const DivCorp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 490px) {
    display: none;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`
 const TextDiv = styled.div`  
  position: absolute;   
  color: white; 
  //display: flex;    
  width: 43%;
  height: 0 auto;
  flex-direction: column;
  margin-top: 1vw;  
  margin-right: 4.2vw;
  
  @media (max-width: 490px){
    width: 80%;
    height: 0 auto;
    margin-top: 0;
    margin-right: 0;
  }  
 `

 const Hash = styled.h4`
   color: #505050;
   font-size: 1.5vw;
   position: absolute;
   @media (max-width: 490px){
     font-size: 2.6vw;
     margin-top: 2.5vw;
   }
 `

 const TextTitle = styled.h1`
  color: #0071c0;
  font-family: GilroyHeavy;
  font-weight: 500;
  font-size: 4vw;
  margin-top: 1vw;
  @media (max-width: 490px){
     font-size: 6.7vw;
     margin-top: 4vw;
   }  
 `

 const Ptext = styled.p`
   color: #505050;
   font-weight: 500;
   font-size: 1.4vw;
   margin-top: 0vw;
   line-height: 1.7vw;
   @media (max-width: 490px){
     font-size: 3vw;
     margin-top: 64.5vw;
     line-height: 3.5vw;
   }   
 `

  const OrderList = styled.ul`
    color: #505050;
    font-size: 1.4vw;
    margin-top: 0.5vw;
    margin-left: 1vw;
    @media (max-width: 490px){
     font-size: 3vw;
   }
  `

 const ListTitle = styled.h2`
  color: #0071c0;
  font-family: GilroyHeavy;
  font-weight: 500;
  font-size: 1.9vw;
  margin-top: 0.5vw;
  @media (max-width: 490px){
     font-size: 5vw;
     margin-top: 2vw;
   }
 `

const Ps = styled.span`

`

const TextAreaHash = styled.div`
  display: flex;
  flex-direction: column;
`

//MOBILE

 const DivCorpMob = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   @media (min-width: 490px) {
     display: none;
   }
   @media (max-width: 490px) {
     justify-content: center;
   }
 `

function Corporativa () {
  return (
    <div>
      <DivCorpMob>
        <Img src={CorporativaImgBg}/>
        <TextDiv>
        <Hash>#PARASUAEMPRESA</Hash>
        <TextTitle>TV CORPORATIVA</TextTitle>
        <Ptext>Nesta <Ps>categoria</Ps> voc?? <Ps>aproveita TV's</Ps> presentes em <Ps>salas</Ps> de <Ps>espera </Ps>
        e <Ps>filas de atendimento</Ps>, e <Ps>apresenta</Ps> um <Ps>conte??do</Ps> 100% personalizado,
        divulgando <Ps>informa????es</Ps>, <Ps>produtos</Ps> e <Ps>servi??os</Ps> da <Ps>pr??pria empresa </Ps>
        para os seus <Ps>pr??prios clientes</Ps>, ou at?? mesmo <Ps>funcion??rios</Ps>.
        Al??m de ter seu <Ps>pr??prio canal interno</Ps> com <Ps>not??cias diversas</Ps>, <Ps>previs??o </Ps>
        do <Ps>tempo</Ps> e <Ps>cota????o da bolsa de valores</Ps>, a <Ps>Ponto TV</Ps> cria <Ps>conte??dos </Ps>
        em <Ps>v??deo</Ps> com <Ps>foco</Ps> em <Ps>sua empresa</Ps>, seja com destaque <Ps>institucional</Ps>,
        em <Ps>produtos</Ps>, <Ps>ofertas</Ps>, ou <Ps>servi??os espec??ficos</Ps>.</Ptext>
        <ListTitle>VANTAGENS:</ListTitle>
          <OrderList>
            <li><Ps>Fortale??a</Ps> o <Ps>relacionamento</Ps> entre <Ps>empresa</Ps> e <Ps>funcion??rios/clientes</Ps>.</li>
            <li><Ps>Programa????o</Ps> controlada via acesso <Ps>remoto</Ps>, podendo ser <Ps>alterada </Ps>
            <Ps>sempre</Ps> que <Ps>necess??rio</Ps>.</li>
            <li>Pode-se <Ps>utilizar</Ps> uma <Ps>TV</Ps> j?? <Ps>instalada</Ps> no <Ps>local</Ps>.</li>
            <li>Modelo <Ps>compat??vel</Ps> com <Ps>diversos segmentos</Ps>.</li>
          </OrderList>
      </TextDiv>
      </DivCorpMob>

      <DivCorp>
      <Img src={ImgCorp}/>
      <TextDiv>
        <TextAreaHash>
          <Hash>#PARASUAEMPRESA</Hash>
          <TextTitle>TV CORPORATIVA</TextTitle>
        </TextAreaHash>
        <Ptext>Nesta <Ps>categoria</Ps> voc?? <Ps>aproveita TV's</Ps> presentes em <Ps>salas</Ps> de <Ps>espera </Ps>
        e <Ps>filas de atendimento</Ps>, e <Ps>apresenta</Ps> um <Ps>conte??do</Ps> 100% personalizado,
        divulgando <Ps>informa????es</Ps>, <Ps>produtos</Ps> e <Ps>servi??os</Ps> da <Ps>pr??pria empresa </Ps>
        para os seus <Ps>pr??prios clientes</Ps>, ou at?? mesmo <Ps>funcion??rios</Ps>.
        Al??m de ter seu <Ps>pr??prio canal interno</Ps> com <Ps>not??cias diversas</Ps>, <Ps>previs??o </Ps>
        do <Ps>tempo</Ps> e <Ps>cota????o da bolsa de valores</Ps>, a <Ps>Ponto TV</Ps> cria <Ps>conte??dos </Ps>
        em <Ps>v??deo</Ps> com <Ps>foco</Ps> em <Ps>sua empresa</Ps>, seja com destaque <Ps>institucional</Ps>,
        em <Ps>produtos</Ps>, <Ps>ofertas</Ps>, ou <Ps>servi??os especificos</Ps>.</Ptext>
        <ListTitle>VANTAGENS:</ListTitle>
          <OrderList>
            <li><Ps>Fortale??a</Ps> o <Ps>relacionamento</Ps> entre <Ps>empresa</Ps> e <Ps>funcion??rios/clientes</Ps>.</li>
            <li><Ps>Programa????o</Ps> controlada via acesso <Ps>remoto</Ps>, podendo ser <Ps>alterada </Ps>
            <Ps>sempre</Ps> que <Ps>necess??rio</Ps>.</li>
            <li>Pode-se <Ps>utilizar</Ps> uma <Ps>TV</Ps> j?? <Ps>instalada</Ps> no <Ps>local</Ps>.</li>
            <li>Modelo <Ps>compat??vel</Ps> com <Ps>diversos segmentos</Ps>.</li>
          </OrderList>
      </TextDiv>
    </DivCorp>
    </div>
    
  )
}

export default Corporativa