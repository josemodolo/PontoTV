import React from 'react'
import styled from 'styled-components'
import ImgPub from '../../../img/imghome/tvpublicitaria/tvpublicitaria.jpg'
import '../../../fonts/Gilroy-Bold.ttf'
import PubImgMb from '../../../img/imgMobileHome/publicitaria.png'

const DivPub = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media only screen and (max-width: 490px) {
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
  width: 47%;
  height: 0 auto;
  flex-direction: column;
  margin-left: 4.2vw;
  margin-top: 2vw;
  @media (max-width: 490px){
    width: 80vw;
    height: 0 auto;
    margin-left: 0vw;
    margin-top: 0.5vw;
    margin-right: 1vw;
    
  }
  
 `

 const Hash = styled.h4`
   color: white;
   font-size: 1.5vw;
   margin-top: 1vw;
   @media (max-width: 490px){
     font-size: 2vw;
   }
   ;
 `

 const TextTitle = styled.h1`
  color: #ffb030;
  font-family: GilroyHeavy;
  font-weight: 500;
  font-size: 4vw;
  margin-top: 0.5vw;
  @media (max-width: 490px){
    font-size: 6.7vw;
    margin-bottom: 63.2vw;
    
  }
`

 const Ptext = styled.p`
   color: white;
   font-size: 1.4vw;
   @media (max-width: 490px){
    font-size: 3.1vmin;
  }
   
   
 `

 const OrderList = styled.p`
   color: white;
   
   margin-top: 0.5vw;
   margin-left: 1.1vw;
   
   
 `

const OrderText = styled.ul`
font-size: 1.4vw;
@media (max-width: 490px){
    margin-left: 2vw;
    font-size: 3vmin;
    margin-top: 1vw;
  }
   
`

const ListTitle = styled.h2`
  color: #ffb030;
  font-family: GilroyHeavy;
  font-weight: 500;
  font-size: 1.9vw;
  margin-top: 0.5vw;
  @media (max-width: 490px){
    margin-top: 2vw;
    font-size: 5vw;
  }
 `

const Ps = styled.span`

`

// MOBILE

const DivPubMb = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media only screen and (min-width: 490px) {
    display: none;
  }
  @media only screen and (max-width: 490px) {
    justify-content: center;
  }
`

function Publicitaria () {
  return(
    <div>
    <DivPub>
      <Img src={ImgPub}/>
      <TextDiv>
        <Hash>#SEJAUMAEMPRESAPARCEIRA</Hash>
        <TextTitle>TV PUBLICITÁRIA</TextTitle>
        <Ptext>Nesta <Ps>categoria</Ps> seu <Ps>estabelecimento</Ps> pode ser um <Ps>parceiro Ponto TV</Ps>,
        oferecendo <Ps>espaços publicitários</Ps> para <Ps>qualquer anunciante</Ps> que queira
        <Ps> divulgar</Ps> seus <Ps>produtos</Ps> e <Ps>serviços</Ps> através de <Ps>videos</Ps>, além de <Ps>oferecer </Ps>
        aos <Ps>seus clientes</Ps> um <Ps>canal</Ps> de <Ps>informação</Ps> e <Ps>entretenimento</Ps> por meio
        de <Ps>notícias diversas, previsão do tempo, cotação</Ps> da <Ps>bolsa de valores </Ps>
        entre outros.</Ptext>
        <ListTitle>VANTAGENS:</ListTitle>
        <OrderList>
          <OrderText>
            <li><Ps>Entretenimento</Ps> e <Ps>informação</Ps> em <Ps>tempo real</Ps> para os clientes
            durante <Ps>espera forçada</Ps>.</li>
            <li><Ps>Programação</Ps> controlada via acesso <Ps>remoto</Ps>, podendo ser <Ps>alterada </Ps>
            <Ps>sempre</Ps> que <Ps>necessário</Ps>.</li>
            <li>Pode-se <Ps>utilizar</Ps> uma <Ps>TV</Ps> já <Ps>instalada</Ps> no <Ps>local</Ps>.</li>
            <li>Modelo <Ps>compativel</Ps> com <Ps>diversos segmentos</Ps>.</li>
          </OrderText>
        </OrderList>
      </TextDiv>
    </DivPub>
    <DivPubMb>
      <Img src= {PubImgMb}/>
      <TextDiv>
        <Hash>#SEJAUMAEMPRESAPARCEIRA</Hash>
        <TextTitle>TV PUBLICITÁRIA</TextTitle>
        <Ptext>Nesta <Ps>categoria</Ps> seu <Ps>estabelecimento</Ps> pode ser um <Ps>parceiro Ponto TV</Ps>,
        oferecendo <Ps>espaços publicitários</Ps> para <Ps>qualquer anunciante</Ps> que queira
        <Ps> divulgar</Ps> seus <Ps>produtos</Ps> e <Ps>serviços</Ps> através de <Ps>videos</Ps>, além de <Ps>oferecer </Ps>
        aos <Ps>seus clientes</Ps> um <Ps>canal</Ps> de <Ps>informação</Ps> e <Ps>entretenimento</Ps> por meio
        de <Ps>notícias diversas, previsão do tempo, cotação</Ps> da <Ps>bolsa de valores </Ps>
        entre outros.</Ptext>
        <ListTitle>VANTAGENS:</ListTitle>
        <OrderList>
          <OrderText>
            <li><Ps>Entretenimento</Ps> e <Ps>informação</Ps> em <Ps>tempo real</Ps> para os clientes
            durante <Ps>espera forçada</Ps>.</li>
            <li><Ps>Programação</Ps> controlada via acesso <Ps>remoto</Ps>, podendo ser <Ps>alterada </Ps>
            <Ps>sempre</Ps> que <Ps>necessário</Ps>.</li>
            <li>Pode-se <Ps>utilizar</Ps> uma <Ps>TV</Ps> já <Ps>instalada</Ps> no <Ps>local</Ps>.</li>
            <li>Modelo <Ps>compativel</Ps> com <Ps>diversos segmentos</Ps>.</li>
          </OrderText>
        </OrderList>
      </TextDiv>
    </DivPubMb>
    </div>

  )
}

export default Publicitaria