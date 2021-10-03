import React from 'react'
import styled from 'styled-components'
import ImgPub from '../../../img/imghome/tvpublicitaria/tvpublicitaria.jpg'
import '../../../fonts/Gilroy-Bold.ttf'

const DivPub = styled.div`
  background:url(${ImgPub}); 
  display: flex;  
  height: 89vh;
  background-size: 100%;
  background-repeat: no-repeat;
`

const TextArea = styled.div`
width: 50vw;
height: 60vh;
margin-left: 50px;
`


const TextTitle = styled.h1`
 z-index: +1;
 color: #ffb131;
 font-weight: 900 bolder;
 
`

const TextImg = styled.p`
 z-index: +1;
 color: white;
 font-weight: 900;
 `

const OrderList = styled.p`
z-index: +1;
color: white;
font-weight: 500;
list-style-position: initial;
`

function Publicitaria () {
  return(  
    <DivPub>
      <TextArea>
        <h4>#SEJAUMAEMPRESAPARCEIRA</h4>
        <TextTitle>TV PUBLICITÁRIA</TextTitle>
        <TextImg>Nesta categoria seu estabelecimento pode ser um parceiro Ponto TV,<br/>
        oferecendo espaços publicitários para qualquer anunciante que queira<br/>
        divulgar seus produtos e serviços através de videos, além de oferecer<br/>
        aos seus clientes um canal de informação e entretenimento por meio<br/>
        de notícias diversas, previsão do tempo, cotação da bolsa de valores entre outros.<br/></TextImg>
        <TextTitle>VANTAGENS:</TextTitle>
        <OrderList>
          <ul>
            <li>Entretenimento e informação em tempo real para os clientes<br/>
            durante espera forçada.</li>
            <li>Programação controlada via acesso remoto, podendo ser alterada<br/>
            sempre que necessário.<br/></li>
            <li>Pode-se utilizar uma TV já instalada no local.</li>
            <li>Modelo compativel com diversos segmentos.</li>
          </ul>
        </OrderList>
      </TextArea>      
    </DivPub>  
       
  )
}

export default Publicitaria