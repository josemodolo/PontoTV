import React from "react"
import styled from "styled-components"
import ImgAnuncie from '../../../img/imghome/anuncie/anuncie.jpg'

const DivAnuncie = styled.div`
  
  /* width: 100%; */
  height: 500px;
  display: flex;
  align-items: center;
  //flex-direction: row-reverse;
  //width:100% ;
  //height: 10px;
  background-size: 100%;
  background-repeat: no-repeat;
  //flex-wrap: wrap;
  position: relative;
  
`

const Img = styled.img`
 width: 100%;
`



const TextArea = styled.div`
  background-color: yellow;
;
`


const TextTitle = styled.h1`
 position: absolute;
 color: #0071c0;
 font-weight: 900;
 top: 8px;
 right: 16px;

`

const TextImg = styled.p`
    
    color: #4d4d4d;
    //font-size: 20px;
    position: absolute;

 `

const OrderList = styled.p`

color: #4d4d4d;
//font-size: 20px;

`

const ListTitle = styled.h2`
 
 color: #0071c0;
 font-weight: 900;
 //font-size: 25px ;
`

function Anuncie (){
  return(
    <DivAnuncie>
      <Img src={ImgAnuncie}/>
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
    </DivAnuncie>
  )
}

export default Anuncie;