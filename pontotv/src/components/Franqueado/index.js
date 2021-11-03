import React from 'react'
import { Header, WhatsApp } from '../../components'
import FranquiaOque from '../../img/imgfranc/franquia.jpg'
import OQueOferecemos from '../../img/imgfranc/oferecemos.jpg'
import VantagensImg from '../../img/imgfranc/vantagens.jpg'
import CasesImg from '../../img/imgfranc/cases.jpg'
import Contato from '../Contato'
import InvestimentoImg from '../../img/imgfranc/investimento.jpg'
import KitImg from '../../img/imgfranc/kit.jpg'
import InteressadoImg from '../../img/imgfranc/interessado.jpg'
import styled from 'styled-components'
import Footer from '../../HomePage/footer'
import YoutubeEmbed from '../Youtube'


//area da franquia
const FranquiaDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`

const Img1 = styled.img`
  width: 100%;
  height: 100%;
`

const FranquiaTextDiv = styled.div`
   //display: flex;
   position: absolute;
   width: 50%;
   height: 0 auto;
   flex-direction: column;
   margin-top: 0.7vw;
   
`

 const FranquiaText = styled.p`
   color: white;
   width: 100%;
   height: 0 auto;
   font-weight: 400;
   font-size: 1.4vw;
   padding: 1vw;
 `

//area oferecemos
const OferecemosDiv = styled.div`
  width: 100%;
  height: 100%;
`

const Img2 = styled.img`
  width: 100%;
  height: 100%;
`

//area vantagens
const VantagensDiv = styled.div`
  width: 100%;
  height: 100%;
`

const Img3 = styled.img`
  width: 100%;
  height: 100%;
`

//area cases
const CasesDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const Img4 = styled.img`
  width: 100%;
  height: 100%;
`

//area investimento
const InvestimentoDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Img5 = styled.img`
  width: 100%;
  height: 100%;
  
`

//area kit
const KitDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Img6 = styled.img`
  width: 100%;
  height: 100%;
`

//area interessado
const InteressadoDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Img7 = styled.img`
  width: 100%;
  height: 100%;
`

//  const FranquiaText = styled.p`
//    color: white;
  
//    font-size: clamp(1.5rem, 2.5vw, 4rem);
//  `

 const DivTextRodrigo = styled.div`
   display: flex;
   position: absolute;
   width: 55%;
   height: 0 auto;
   margin-top: 13vw;
   margin-left: 26vw;
   flex-direction: column;
   
 `

 const DivTextSolange = styled.div`
  position: absolute;
  width: 55.3%;
  height: 0 auto;
  margin-top: 37.3vw;
  margin-left: 36vw;
 `

 const DivTextRafael = styled.div`  
   position: absolute;
   width: 49%;
   height: 0 auto;
   margin-top: 59.5vw;
   margin-left: 26vw;   
 `

 const DivTextAyla = styled.div`
   position: absolute;
   width: 46%;
   height: 0 auto;
   margin-top: 84.6vw;
   margin-left: 36vw;
 `

 const FranqueadosText = styled.p`
 color: white;
 font-size: 1.2vw;
 font-weight: 500;
 padding: 1vw;
 
 `

const YoutubeDiv = styled.div`
  width: 100%;
  height: 0 auto;
  background-color: #0072c0;
  
`


function SejaFranqueado () {
  return(
    <div>
            
      <Header/>      
      <FranquiaDiv>
        <Img1 src= {FranquiaOque}/>
          <FranquiaTextDiv>
            <FranquiaText>A <strong>Ponto TV</strong> está em <strong>expansão</strong> para todo o <strong>Brasil</strong>, e você também
              pode <strong>crescer</strong> junto <strong>conosco</strong>!</FranquiaText>
              <FranquiaText>A <strong>Franquia de Midia Indoor</strong> da <strong>Ponto TV</strong>, é uma <strong>franquia barata</strong>
              que traz um <strong>modelo</strong> de <strong>negócios lucrativo</strong>, com <strong>maturidade</strong>
              de <strong>mercado</strong> e <strong>estratégias</strong> de <strong>atuação eficientes</strong> dentro do <strong>ramo</strong>
              de <strong>publicidade indoor</strong>.</FranquiaText>
              <FranquiaText><strong>Além</strong> do lucro por meio da <strong>publicidade</strong>, os <strong>franqueados</strong> podem
              <strong>rentabilizar</strong> também <strong>através</strong> da <strong>TV Corporativa</strong>, tudo isso,
              <strong>dentro</strong> de um <strong>modelo "home based"</strong>, com <strong>baixo investimento</strong>
              e <strong>baixo custo</strong> de <strong>operação</strong>.</FranquiaText>
              <FranquiaText><strong>Inicialmente</strong>, a <strong>rotina</strong> de negócios <strong>possibilita</strong> que o <strong>franqueado</strong>
              <strong>atue sozinho</strong>, realizando a <strong>venda</strong> e <strong>publicação</strong> de <strong>anúndios</strong>,
              que são <strong>desenvolvidos</strong> por uma <strong>equipe preparada</strong>, que é
              <strong>disponibilizada</strong> pela <strong>franqueadora</strong>.</FranquiaText>
              <FranquiaText><strong>Não há limite</strong> de <strong>idade</strong> nem <strong>restrição de gênero</strong> para quem irá
              <strong>investir</strong> na <strong>franquia</strong>, e a franqueadora <strong>não exige educação formal</strong>,
              contudo, boas <strong>habilidades</strong> de <strong>comunicação</strong> são <strong>essenciais</strong>.</FranquiaText>
          </FranquiaTextDiv>
      </FranquiaDiv>
        

      <OferecemosDiv>
        <Img2 src = {OQueOferecemos}/>
      </OferecemosDiv>

      <VantagensDiv>
        <Img3 src= {VantagensImg}/>
      </VantagensDiv>

      <CasesDiv>
        <Img4 src = {CasesImg}/>
        <DivTextRodrigo>
          <FranqueadosText>A <strong>escolha</strong> pela <strong>franquia Ponto TV</strong> foi muito <strong>assertiva</strong>, <strong>iniciei</strong> com o <strong>Kit Básico</strong> e em <strong>apenas 1 mês </strong>
           já <strong>estava</strong> com <strong>todos</strong> os <strong>pontos instalados</strong>. Com <strong>poucos meses</strong> de <strong>operação</strong> já <strong>possuo 10 pontos </strong>
          e percebi que o <strong>modelo</strong> de <strong>negócios</strong> era <strong>promissor</strong> e que <strong>rapidamente</strong> renderia <strong>lucros</strong> e haveria
          o <strong>retorno</strong> do <strong>investimento</strong>.</FranqueadosText>
          <FranqueadosText>A <strong>equipe</strong> nos dá todo o <strong>suporte necessário</strong>, seja na <strong>parte técnica</strong> ou na <strong>comercial</strong>, desta forma
          as <strong>metas diárias</strong> se tornaram mas <strong>eficazes</strong> e <strong>sucesso</strong> de <strong>empreendimento</strong> foi <strong>garantido</strong>.</FranqueadosText>
          <FranqueadosText>A <strong>Ponto TV</strong>, sem dúvida é um <strong>excelente investimento</strong> para quem tem foco e <strong>determinação</strong>,
          pois <strong>reúne</strong> em um só produto <strong>várias possibilidades</strong> de <strong>ganhos</strong>, <strong>abrindo</strong> as <strong>portas</strong> para
          um <strong>negócio local</strong> de <strong>sucesso</strong>... Estou <strong>muito satisfeito</strong> com os <strong>resultados</strong>!</FranqueadosText>
          
        </DivTextRodrigo>
        <DivTextSolange>
          <FranqueadosText>Decidimos <strong>investir</strong> na <strong>Ponto TV</strong> por <strong>entendermos</strong> que <strong>franquia</strong> é um <strong>negócio mais seguro</strong>
          e <strong>descomplicado</strong>.</FranqueadosText>
          <FranqueadosText>Estamos em um <strong>mercado</strong> com <strong>alto potencial</strong> para <strong>expansão</strong> e com <strong>possibilidade</strong> de fazermos
          <strong>mais</strong> e melhor que a <strong>concorrência</strong>.</FranqueadosText>
          <FranqueadosText>A <strong>gestão</strong> do <strong>negócio</strong> é <strong>simples</strong> e a <strong>franqueadora</strong> fornece <strong>treinamentos</strong> e <strong>suporte</strong> para <strong>rede</strong>.</FranqueadosText>
          <FranqueadosText>Logo, para o <strong>negócio prosperar</strong> só <strong>depende de nós</strong>, colocando <strong>energia</strong> e <strong>foco</strong>,
          o <strong>sucesso</strong> é <strong>questão de tempo</strong>!</FranqueadosText>
        </DivTextSolange>
        <DivTextRafael>
          <FranqueadosText>Ser um <strong>franqueado</strong> da <strong>Ponto TV</strong> me traz duas <strong>satisfações</strong> importantes.</FranqueadosText>
          <FranqueadosText>A primeira é a <strong>possibilidade</strong> de <strong>contribuir</strong> com <strong>empresas</strong> que <strong>precisam divulgar</strong> mais
          os <strong>seus serviços</strong>, e a segunda é a <strong>rentabilidade</strong> do <strong>négocio</strong>.</FranqueadosText>
          <FranqueadosText>Dai a <strong>razão</strong> de ser franqueado <strong>Ponto TV</strong>!</FranqueadosText>
          <FranqueadosText>O fato de ser <strong>lotérico</strong> a <strong>mais de 10 anos</strong>, também <strong>ajudou</strong> muito a <strong>trabalhar</strong> com a <strong>franquia</strong>.</FranqueadosText>
          <FranqueadosText><strong>Sempre</strong> que tenho alguma <strong>necessidade</strong>, a <strong>franqueadora</strong> me <strong>ajuda</strong> no que eu <strong>preciso</strong> para
          <strong>continuar</strong> nos <strong>negócios</strong>.</FranqueadosText>
        </DivTextRafael>
        <DivTextAyla>
          <FranqueadosText><strong>Antes</strong> da <strong>Ponto TV</strong>, tinhamos receio sobre o <strong>modelo</strong> de <strong>franquia</strong>, desde o medo
          da falta de <strong>suporte</strong>, até o medo de não dar certo!</FranqueadosText>
          <FranqueadosText><strong>Porém</strong>, desde o <strong>primeiro contato</strong>, a <strong>Ponto TV</strong> nos passou <strong>segurança</strong>, e <strong>ganhou</strong>
          nossa <strong>confiança</strong>! O <strong>modelo</strong> de <strong>negócio</strong> é <strong>simples</strong>, <strong>direto</strong> e <strong>lucrativo</strong>!</FranqueadosText>
          <FranqueadosText>O <strong>suporte</strong> é <strong>prático</strong>, ativo e <strong>confiável</strong>!</FranqueadosText>
          <FranqueadosText><strong>Hoje sabemos</strong> que a <strong>Ponto TV</strong> é um <strong>meio econômico</strong> para <strong>qualquer empresa</strong> anunciar seu <strong>negócio</strong>.</FranqueadosText>
        </DivTextAyla>       
      </CasesDiv>

      <InvestimentoDiv>
        <Img5 src = {InvestimentoImg}/>
      </InvestimentoDiv>
      <KitDiv>
        <Img6 src= {KitImg}/>
      </KitDiv>
      <YoutubeDiv>
        <YoutubeEmbed/>
      </YoutubeDiv>      
      <InteressadoDiv>
        <Img7 src = {InteressadoImg}/>
      </InteressadoDiv>
      <Contato/>
      <WhatsApp/>
      <Footer/>

    </div>
  )
}

export default SejaFranqueado