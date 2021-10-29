import React from 'react'
import styled from 'styled-components'
import ImgPub from '../../../img/imghome/tvpublicitaria/tvpublicitaria.jpg'
import '../../../fonts/Gilroy-Bold.ttf'

const DivPub = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  background-size: cover;
  background-image: url(${ImgPub});
  background-size: 100% 100%;   
`

const TextArea = styled.div`
  margin: 80px 0 0 24px;
`

const Hash = styled.h4`
  color: white;
`

const TextTitle = styled.h1`
  color: #ffb131;
  margin-top: 10px;
  font-size: 40px;
`

const TextImg = styled.p`
  color: white;
  font-size: 20px;
`

const OrderList = styled.p`
  color: white;
  list-style-position: initial;
  margin-left: 20px;
  font-size: 20px;
`

const ListTitle = styled.h2`
  color: #0071c0;
  font-weight: 900;
  font-size: 25px;
`

function Publicitaria () {
  return(
    <DivPub>
      <TextArea>
        <Hash>#SEJAUMAEMPRESAPARCEIRA</Hash>
        <TextTitle>TV PUBLICITÁRIA</TextTitle>
        <TextImg>Nesta <strong>categoria</strong> seu <strong>estabelecimento</strong> pode ser um <strong>parceiro Ponto TV</strong>,<br/>
        oferecendo <strong>espaços publicitários</strong> para <strong>qualquer anunciante</strong> que queira<br/>
        <strong>divulgar</strong> seus <strong>produtos</strong> e <strong>serviços</strong> através de <strong>videos</strong>, além de <strong>oferecer</strong><br/>
        aos <strong>seus clientes</strong> um <strong>canal</strong> de <strong>informação</strong> e <strong>entretenimento</strong> por meio<br/>
        de <strong>notícias diversas</strong>, <strong>previsão do tempo</strong>, <strong>cotação</strong> da <strong>bolsa de valores</strong><br />
        entre outros.</TextImg>
        <ListTitle>VANTAGENS:</ListTitle>
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