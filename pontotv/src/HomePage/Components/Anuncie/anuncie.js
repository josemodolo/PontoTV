import react from "react";
import styled from "styled-components";
import ImgAnuncie from '../../../img/imghome/anuncie/anuncie.jpg'

const DivAnuncie = styled.div`
  background:url(${ImgAnuncie});
  display: flex;
  align-items: center;
  justify-content: center;
  height: 63vh;
  background-size: 100%;
  background-repeat: no-repeat;
`

const TextArea = styled.div`
width: 50vw;
height: 60vh;
margin-left: 650px;
`


const TextTitle = styled.h1`
 z-index: +1;
 color: #0071c0;
 font-weight: 900; 
`

const TextImg = styled.p`
 z-index: +1;
 color: #4d4d4d;
 font-weight: 500;
 `

const OrderList = styled.p`
z-index: +1;
color: #4d4d4d;
font-weight: 500;
`

function Anuncie (){
  return(
    <DivAnuncie>
      <TextArea>
        <TextTitle>ANUNCIAR NUNCA FOI TÃO FÁCIL!</TextTitle>
            <TextImg>Não <strong>importa</strong> se você é micro ou macro, muito menos o tamanho<br/>
              ou segmento do seu negócio, o nosso objetivo é fazer você aparecer!<br/><br/>
              Através de vídeos de 15 ou 30 segundos, você divulga seu negócio,<br/>
              empresa, serviço, eventos ou produtos, impactando milhares de<br/>
              pessoas diariamente, em pontos comerciais estratégicos.<br/>
            </TextImg>
        <TextTitle>VANTAGENS:</TextTitle>
            <OrderList>
              <ul>
                <li>Pacotes <strong>personalizados.</strong></li>
                <li>Nós confeccionamos o seu video.</li>
                <li>Foco em pontos estratégicos.</li>
                <li>Foco em públicos diversificados.</li>
                <li>Mídia limpa, que não polui nem agride a natureza.</li>  
              </ul>  
            </OrderList>   
      </TextArea>              
    </DivAnuncie>
  )
}

export default Anuncie;