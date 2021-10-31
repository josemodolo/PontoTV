import React from "react"
import styled from "styled-components"
import ImgAnuncie from '../../../img/imghome/anuncie/anuncie.jpg'

const DivAnuncie = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
`

const TextDiv = styled.div`
  position: absolute;   
  color: black; 
  display: flex;    
  width: 50%;
  height: 0 auto;
  flex-direction: column;
  padding: 2vw;
`

 const Details = styled.div`
  /* width: 40%; */
  display: flex;
  flex-direction: column;  
 `

 const TextTitle = styled.h1`
  color: #0071c0;
  font-weight: 900;
  font-size: 2.5vw;
  padding-bottom:0.5em ;
 `

 const Ptext = styled.p`
   font-weight: 500;
   font-size: 1.5vw;
   padding-bottom:0.9em;  
 `

 const ListTitle = styled.h2`
  color: #0071c0;
  font-weight: 900;
  font-size: 1.9vw;
  padding-bottom:0.5em ;  
 `

 const OrderText = styled.ul`
  font-size: 1.5vw;
 `

  const Img = styled.img`
    width: 100%;
    height: 100%;
  `

function Anuncie (){
  return(
    <DivAnuncie>
      <Img src= {ImgAnuncie}/>
      <TextDiv>
      <Details>
        <div>
          <TextTitle>ANUNCIAR NUNCA FOI TÃO FÁCIL!</TextTitle>
          <Ptext>
            Não <strong>importa</strong> se você é <strong>micro</strong> ou macro, muito menos o <strong>tamanho</strong> ou <strong>segmento</strong> do seu <strong>negócio</strong>, o <strong>nosso objetivo</strong> é <strong>fazer você aparecer!</strong>
          </Ptext>
          
          <Ptext>
            Através de <strong>vídeos</strong> de <strong>15</strong> ou <strong>30</strong> segundos, você <strong>divulga</strong> seu negócio,
            empresa, serviço, eventos ou produtos, <strong>impactando milhares</strong> de <strong>pessoas diariamente</strong>, em <strong>pontos</strong> comerciais <strong>estratégicos</strong>.
          </Ptext>
          
        </div>
        <div>
          <ListTitle>VANTAGENS</ListTitle>
          <p>
            <OrderText>
              <li>Pacotes <strong>personalizados.</strong></li>
              <li>Nós <strong>produzimos</strong> o seu <strong>video</strong>.</li>
              <li><strong>Foco</strong> em <strong>pontos estratégicos</strong>.</li>
              <li><strong>Foco</strong> em <strong>públicos diversificados</strong>.</li>
              <li><strong>Mídia limpa, 100% digital</strong> e que <strong>não polui</strong> nem <strong>agride</strong> a <strong>natureza</strong>.</li>
            </OrderText>
          </p>
        </div>
      </Details>
      </TextDiv>      
    </DivAnuncie>
  )
}

export default Anuncie;