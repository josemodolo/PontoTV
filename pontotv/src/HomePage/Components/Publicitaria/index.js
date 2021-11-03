import React from 'react'
import styled from 'styled-components'
import ImgPub from '../../../img/imghome/tvpublicitaria/tvpublicitaria.jpg'
import '../../../fonts/Gilroy-Bold.ttf'

const DivPub = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
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
  margin-left: 1.3vw ;
  
 `

 const Hash = styled.h4`
   color: white;
   font-size: 1.5vw;
   margin-top: 1vw;
 `

 const TextTitle = styled.h1`
  color: #ffb030;
  font-weight: 900;
  font-size: 4vw;
  margin-top: 0.5vw;
`

 const Ptext = styled.p`
   font-weight: 500;
   font-size: 1.5vw;
   
   
 `

 const OrderList = styled.p`
   color: white;
   font-size: 1.3vw;
   margin-top: 0.5vw;
   margin-left: 1.3vw;
 `

const OrderText = styled.ul`
font-size: 1.5vw;
`

const ListTitle = styled.h2`
  color: #ffb030;
  font-weight: 900;
  font-size: 1.9vw;
  margin-top: 0.5vw;
 `

function Publicitaria () {
  return(
    <DivPub>
      <Img src={ImgPub}/>
      <TextDiv>
        <Hash>#SEJAUMAEMPRESAPARCEIRA</Hash>
        <TextTitle>TV PUBLICITÁRIA</TextTitle>
        <Ptext>Nesta <strong>categoria</strong> seu <strong>estabelecimento</strong> pode ser um <strong>parceiro Ponto TV</strong>,
        oferecendo <strong>espaços publicitários</strong> para <strong>qualquer anunciante</strong> que queira
        <strong>divulgar</strong> seus <strong>produtos</strong> e <strong>serviços</strong> através de <strong>videos</strong>, além de <strong>oferecer</strong>
        aos <strong>seus clientes</strong> um <strong>canal</strong> de <strong>informação</strong> e <strong>entretenimento</strong> por meio
        de <strong>notícias diversas</strong>, <strong>previsão do tempo</strong>, <strong>cotação</strong> da <strong>bolsa de valores</strong>
        entre outros.</Ptext>
        <ListTitle>VANTAGENS:</ListTitle>
        <OrderList>
          <OrderText>
            <li>Entretenimento e informação em tempo real para os clientes
            durante espera forçada.</li>
            <li>Programação controlada via acesso remoto, podendo ser alterada
            sempre que necessário.</li>
            <li>Pode-se utilizar uma TV já instalada no local.</li>
            <li>Modelo compativel com diversos segmentos.</li>
          </OrderText>
        </OrderList>
      </TextDiv>
    </DivPub>

  )
}

export default Publicitaria