import React from "react"
import styled from "styled-components"
import ImgAnuncie from '../../../img/imghome/anuncie/anuncie.jpg'

const DivAnuncie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 500px;
  background-size: 100% 100%;
  background-size: cover;      
  background-image: url(${ImgAnuncie});
  color: #4d4d4d;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 150px ;
`

const TextTitle = styled.h1`
 color: #0071c0;
 font-weight: 900;
 font-size: clamp(1.75em, 1em + 3vw, 2.5em);
`

const Ptext = styled.p`  
  font-size: clamp(1.75em, 1em + 1vw, 1em);
`

const ListTitle = styled.h2`
 color: #0071c0;
 font-weight: 900;
`

function Anuncie (){
  return(
    <DivAnuncie>
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
            <ul>
              <li>Pacotes <strong>personalizados.</strong></li>
              <li>Nós <strong>produzimos</strong> o seu <strong>video</strong>.</li>
              <li><strong>Foco</strong> em <strong>pontos estratégicos</strong>.</li>
              <li><strong>Foco</strong> em <strong>públicos diversificados</strong>.</li>
              <li><strong>Mídia limpa, 100% digital</strong> e que <strong>não polui</strong> nem <strong>agride</strong> a <strong>natureza</strong>.</li>
            </ul>
          </p>
        </div>
      </Details>
    </DivAnuncie>
  )
}

export default Anuncie;