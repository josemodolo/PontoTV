import React, {useEffect}from "react";
import ImgCorp from '../../../img/imghome/tvcorporativa/tvcorporativa.png'
import styled from "styled-components";
import CorporativaImgBg from '../../../img/imgMobileHome/corporativa.png'
import Aos from 'aos';
import "aos/dist/aos.css";


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

  useEffect(()=> {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div>
      <DivCorpMob>
        <Img src={CorporativaImgBg}/>
        <TextDiv data-aos="fade-in">
        <Hash>#PARASUAEMPRESA</Hash>
        <TextTitle>TV CORPORATIVA</TextTitle>
        <Ptext>Nesta <Ps>categoria</Ps> você <Ps>aproveita TV's</Ps> presentes em <Ps>salas</Ps> de <Ps>espera </Ps>
        e <Ps>filas de atendimento</Ps>, e <Ps>apresenta</Ps> um <Ps>conteúdo</Ps> 100% personalizado,
        divulgando <Ps>informações</Ps>, <Ps>produtos</Ps> e <Ps>serviços</Ps> da <Ps>própria empresa </Ps>
        para os seus <Ps>próprios clientes</Ps>, ou até mesmo <Ps>funcionários</Ps>.
        Além de ter seu <Ps>próprio canal interno</Ps> com <Ps>notícias diversas</Ps>, <Ps>previsão </Ps>
        do <Ps>tempo</Ps> e <Ps>cotação da bolsa de valores</Ps>, a <Ps>Ponto TV</Ps> cria <Ps>conteúdos </Ps>
        em <Ps>vídeo</Ps> com <Ps>foco</Ps> em <Ps>sua empresa</Ps>, seja com destaque <Ps>institucional</Ps>,
        em <Ps>produtos</Ps>, <Ps>ofertas</Ps>, ou <Ps>serviços específicos</Ps>.</Ptext>
        <ListTitle>VANTAGENS:</ListTitle>
          <OrderList>
            <li><Ps>Fortaleça</Ps> o <Ps>relacionamento</Ps> entre <Ps>empresa</Ps> e <Ps>funcionários/clientes</Ps>.</li>
            <li><Ps>Programação</Ps> controlada via acesso <Ps>remoto</Ps>, podendo ser <Ps>alterada </Ps>
            <Ps>sempre</Ps> que <Ps>necessário</Ps>.</li>
            <li>Pode-se <Ps>utilizar</Ps> uma <Ps>TV</Ps> já <Ps>instalada</Ps> no <Ps>local</Ps>.</li>
            <li>Modelo <Ps>compatível</Ps> com <Ps>diversos segmentos</Ps>.</li>
          </OrderList>
      </TextDiv>
      </DivCorpMob>

      <DivCorp>
      <Img src={ImgCorp}/>
      <TextDiv data-aos="fade-in">
        <TextAreaHash>
          <Hash>#PARASUAEMPRESA</Hash>
          <TextTitle>TV CORPORATIVA</TextTitle>
        </TextAreaHash>
        <Ptext>Nesta <Ps>categoria</Ps> você <Ps>aproveita TV's</Ps> presentes em <Ps>salas</Ps> de <Ps>espera </Ps>
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
            <li><Ps>Programação</Ps> controlada via acesso <Ps>remoto</Ps>, podendo ser <Ps>alterada </Ps>
            <Ps>sempre</Ps> que <Ps>necessário</Ps>.</li>
            <li>Pode-se <Ps>utilizar</Ps> uma <Ps>TV</Ps> já <Ps>instalada</Ps> no <Ps>local</Ps>.</li>
            <li>Modelo <Ps>compatível</Ps> com <Ps>diversos segmentos</Ps>.</li>
          </OrderList>
      </TextDiv>
    </DivCorp>
    </div>
    
  )
}

export default Corporativa