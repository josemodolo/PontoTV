import React, {useEffect} from "react"
import styled from "styled-components"
import ImgAnuncie from '../../../img/imghome/anuncie/anuncie.jpg'
import AnuncieMob from '../../../img/imgMobileHome/AnuncieMobile.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const DivAnuncie = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
  @media (max-width: 490px) {
    display: none;
  }
`

const TextDiv = styled.div`
  position: absolute;     
  display: flex;    
  width: 50%;
  height: 0 auto;
  flex-direction: column;
  margin-top: 2.5vw;
  @media (max-width: 490px){
    width: 79vw;
    margin-top: 64vw;
    margin-right: 12vw;
  }
`

 const Details = styled.div`
  /* width: 40%; */
  display: flex;
  flex-direction: column;  
 `

 const TextTitle = styled.h1`
  color: #0071c0;
  font-size: 2.5vw;
  font-family: GilroyHeavy;
  font-weight: 500;
  @media (max-width: 490px){
    font-size: 5vw;
  }
 `

 const Ptext = styled.p`   
   font-size: 1.4vw;
   padding-bottom:0.9em;
   color: #505050 ;
   margin-top: 1vw;
   font-family: GilroySemiBold;
   @media (max-width: 490px){
    font-size: 3.1vmin;
  }
 `

 const ListTitle = styled.h2`
  color: #0071c0;
  font-weight: 900;
  font-size: 1.9vw;
  font-family: GilroyHeavy;
  font-weight: 500;
  @media (max-width: 490px){
    font-size: 4vw;
  }
 `

 const OrderText = styled.ul`
  font-size: 1.4vw;
  color: #505050;
  margin-top: 1vw;
  margin-left: 1.3vw;
  @media (max-width: 490px){
    font-size: 3.1vmin;
    margin-left: 3vw;
  }
 `

  const Img = styled.img`
    width: 100%;
    height: 100%;
  `
  
  const Ps = styled.span`
    
  `

  // MOBILE

  const DivAnuncieMob = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
  @media (min-width: 490px) {
    display: none;
  }
  `

function Anuncie (){

  useEffect(()=> {
    Aos.init({duration: 3000, once: true,});
  }, []);

  return(
    <div>
    <DivAnuncie>
      <Img src= {ImgAnuncie}/>
      <TextDiv data-aos="fade-in" data-aos-duration="4000">
      <Details>
        <div>
          <TextTitle>ANUNCIAR NUNCA FOI TÃO FÁCIL!</TextTitle>
          <Ptext>
            Não <Ps>importa</Ps> se você é <Ps>micro</Ps> ou <Ps>macro</Ps>, muito menos o <Ps>tamanho</Ps> ou <Ps>segmento</Ps> do seu <Ps>negócio</Ps>, o <Ps>nosso objetivo</Ps> é <Ps>fazer você aparecer!</Ps>
          </Ptext>
          
          <Ptext>
            Através de <Ps>vídeos</Ps> de <Ps>15</Ps> ou <Ps>30</Ps> segundos, você <Ps>divulga</Ps> seu negócio,
            empresa, serviço, eventos ou produtos, <Ps>impactando milhares</Ps> de <Ps>pessoas diariamente</Ps>, em <Ps>pontos</Ps> comerciais <Ps>estratégicos</Ps>.
          </Ptext>
          
        </div>
        <div>
          <ListTitle>VANTAGENS</ListTitle>

            <OrderText>
              <li>Pacotes <Ps>personalizados</Ps>.</li>
              <li>Nós <Ps>produzimos</Ps> o seu <Ps>vídeo</Ps>.</li>
              <li><Ps>Foco</Ps> em <Ps>pontos estratégicos</Ps>.</li>
              <li><Ps>Foco</Ps> em <Ps>públicos diversificados</Ps>.</li>
              <li><Ps>Mídia limpa, 100% digital</Ps> e que <Ps>não polui</Ps> nem <Ps>agride</Ps> a <Ps>natureza</Ps>.</li>
            </OrderText>

        </div>
      </Details>
      </TextDiv>      
    </DivAnuncie>
    <DivAnuncieMob>
      <Img src= {AnuncieMob}/>
      <TextDiv data-aos="fade-in">
      <Details>
        <div>
          <TextTitle>ANUNCIAR NUNCA FOI TÃO FÁCIL!</TextTitle>
          <Ptext>
            Não <Ps>importa</Ps> se você é <Ps>micro</Ps> ou <Ps>macro</Ps>, muito menos o <Ps>tamanho</Ps> ou <Ps>segmento</Ps> do seu <Ps>negócio</Ps>, o <Ps>nosso objetivo</Ps> é <Ps>fazer você aparecer!</Ps>
          </Ptext>
          
          <Ptext>
            Através de <Ps>vídeos</Ps> de <Ps>15</Ps> ou <Ps>30</Ps> segundos, você <Ps>divulga</Ps> seu negócio,
            empresa, serviço, eventos ou produtos, <Ps>impactando milhares</Ps> de <Ps>pessoas diariamente</Ps>, em <Ps>pontos</Ps> comerciais <Ps>estratégicos</Ps>.
          </Ptext>
          
        </div>
        <div>
          <ListTitle>VANTAGENS</ListTitle>

            <OrderText>
              <li>Pacotes <Ps>personalizados</Ps>.</li>
              <li>Nós <Ps>produzimos</Ps> o seu <Ps>vídeo</Ps>.</li>
              <li><Ps>Foco</Ps> em <Ps>pontos estratégicos</Ps>.</li>
              <li><Ps>Foco</Ps> em <Ps>públicos diversificados</Ps>.</li>
              <li><Ps>Mídia limpa, 100% digital</Ps> e que <Ps>não polui</Ps> nem <Ps>agride</Ps> a <Ps>natureza</Ps>.</li>
            </OrderText>

        </div>
      </Details>
      </TextDiv>  
    </DivAnuncieMob>
    </div>
  )
}

export default Anuncie;