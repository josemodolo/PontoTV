import React from "react"
import styled from "styled-components"
import ImgAnuncie from '../../../img/imghome/anuncie/anuncie.jpg'

const DivAnuncie = styled.div`
  background:url(${ImgAnuncie});
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh ;
  background-size: 100%;
  background-repeat: no-repeat;
    
`

const TextArea = styled.div`
width: 50vw;
height: 43vh;
margin-left: 49vw;

border: 1px solid black;
`


const TextTitle = styled.h1`
 z-index: +1;
 color: #0071c0;
 font-weight: 900;
  
`

const TextImg = styled.p`
 z-index: +1;
 color: #4d4d4d;
 font-size: 1vw;
 `

const OrderList = styled.p`
z-index: +1;
color: #4d4d4d;
font-size: 20px;
margin-left: 20px;
`

const ListTitle = styled.h2`
 z-index: +1;
 color: #0071c0;
 font-weight: 900;
 font-size: 25px ;
`

function Anuncie (){
  return(
    <DivAnuncie>
      <TextArea>
        <TextTitle>ANUNCIAR NUNCA FOI TÃO FÁCIL!</TextTitle><br/>
            <TextImg>Não <strong>importa</strong> se você é <strong>micro</strong> ou macro, muito menos o <strong>tamanho</strong><br/>
              ou <strong>segmento</strong> do seu <strong>negócio</strong>, o <strong>nosso objetivo</strong> é <strong>fazer você aparecer!</strong><br/><br/>
              Através de <strong>vídeos</strong> de <strong>15</strong> ou <strong>30</strong> segundos, você <strong>divulga</strong> seu negócio,<br/>
              empresa, serviço, eventos ou produtos, <strong>impactando milhares</strong> de<br/>
              <strong>pessoas diariamente</strong>, em <strong>pontos</strong> comerciais <strong>estratégicos</strong>.<br/>
            </TextImg><br/>
        <ListTitle>VANTAGENS:</ListTitle><br/>
            <OrderList>
              <ul>
                <li>Pacotes <strong>personalizados.</strong></li>
                <li>Nós <strong>produzimos</strong> o seu <strong>video</strong>.</li>
                <li><strong>Foco</strong> em <strong>pontos estratégicos</strong>.</li>
                <li><strong>Foco</strong> em <strong>públicos diversificados</strong>.</li>
                <li><strong>Mídia limpa, 100% digital</strong> e que <strong>não polui</strong> nem <strong>agride</strong> a <strong>natureza</strong>.</li>  
              </ul>  
            </OrderList>   
      </TextArea>              
    </DivAnuncie>
  )
}

export default Anuncie;