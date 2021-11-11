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
  height: 100%;
  background-color: #0072c0;
  align-items: center;
  justify-content: center;
  display: flex;
`

const Ps = styled.span`
  
  `


function SejaFranqueado () {
  return(
    <div>
            
      <Header/>      
      <FranquiaDiv>
        <Img1 src= {FranquiaOque}/>
          <FranquiaTextDiv>
            <FranquiaText>A <Ps>Ponto TV</Ps> está em <Ps>expansão</Ps> para todo o <Ps>Brasil</Ps>, e você também
              pode <Ps>crescer</Ps> junto <Ps>conosco</Ps>!</FranquiaText>
              <FranquiaText>A <Ps>Franquia de Midia Indoor</Ps> da <Ps>Ponto TV</Ps>, é uma <Ps>franquia barata </Ps>
              que traz um <Ps>modelo</Ps> de <Ps>negócios lucrativo</Ps>, com <Ps>maturidade </Ps>
              de <Ps>mercado</Ps> e <Ps>estratégias</Ps> de <Ps>atuação eficientes</Ps> dentro do <Ps>ramo</Ps>
              de <Ps>publicidade indoor</Ps>.</FranquiaText>
              <FranquiaText><Ps>Além</Ps> do lucro por meio da <Ps>publicidade</Ps>, os <Ps>franqueados</Ps> podem
              <Ps> rentabilizar</Ps> também <Ps>através</Ps> da <Ps>TV Corporativa</Ps>, tudo isso,
              <Ps> dentro</Ps> de um <Ps>modelo "home based"</Ps>, com <Ps>baixo investimento</Ps>
              e <Ps>baixo custo</Ps> de <Ps>operação</Ps>.</FranquiaText>
              <FranquiaText><Ps>Inicialmente</Ps>, a <Ps>rotina</Ps> de negócios <Ps>possibilita</Ps> que o <Ps>franqueado</Ps>
              <Ps>atue sozinho</Ps>, realizando a <Ps>venda</Ps> e <Ps>publicação</Ps> de <Ps>anúndios</Ps>,
              que são <Ps>desenvolvidos</Ps> por uma <Ps>equipe preparada</Ps>, que é
              <Ps>disponibilizada</Ps> pela <Ps>franqueadora</Ps>.</FranquiaText>
              <FranquiaText><Ps>Não há limite</Ps> de <Ps>idade</Ps> nem <Ps>restrição de gênero</Ps> para quem irá
              <Ps> investir</Ps> na <Ps>franquia</Ps>, e a franqueadora <Ps>não exige educação formal</Ps>,
              contudo, boas <Ps>habilidades</Ps> de <Ps>comunicação</Ps> são <Ps>essenciais</Ps>.</FranquiaText>
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
          <FranqueadosText>A <Ps>escolha</Ps> pela <Ps>franquia Ponto TV</Ps> foi muito <Ps>assertiva</Ps>, <Ps>iniciei</Ps> com o <Ps>Kit Básico</Ps> e em <Ps>apenas 1 mês </Ps>
           já <Ps>estava</Ps> com <Ps>todos</Ps> os <Ps>pontos instalados</Ps>. Com <Ps>poucos meses</Ps> de <Ps>operação</Ps> já <Ps>possuo 10 pontos </Ps>
          e percebi que o <Ps>modelo</Ps> de <Ps>negócios</Ps> era <Ps>promissor</Ps> e que <Ps>rapidamente</Ps> renderia <Ps>lucros</Ps> e haveria
          o <Ps>retorno</Ps> do <Ps>investimento</Ps>.</FranqueadosText>
          <FranqueadosText>A <Ps>equipe</Ps> nos dá todo o <Ps>suporte necessário</Ps>, seja na <Ps>parte técnica</Ps> ou na <Ps>comercial</Ps>, desta forma
          as <Ps>metas diárias</Ps> se tornaram mas <Ps>eficazes</Ps> e <Ps>sucesso</Ps> de <Ps>empreendimento</Ps> foi <Ps>garantido</Ps>.</FranqueadosText>
          <FranqueadosText>A <Ps>Ponto TV</Ps>, sem dúvida é um <Ps>excelente investimento</Ps> para quem tem foco e <Ps>determinação</Ps>,
          pois <Ps>reúne</Ps> em um só produto <Ps>várias possibilidades</Ps> de <Ps>ganhos</Ps>, <Ps>abrindo</Ps> as <Ps>portas</Ps> para
          um <Ps>negócio local</Ps> de <Ps>sucesso</Ps>... Estou <Ps>muito satisfeito</Ps> com os <Ps>resultados</Ps>!</FranqueadosText>
          
        </DivTextRodrigo>
        <DivTextSolange>
          <FranqueadosText>Decidimos <Ps>investir</Ps> na <Ps>Ponto TV</Ps> por <Ps>entendermos</Ps> que <Ps>franquia</Ps> é um <Ps>negócio mais seguro </Ps>
          e <Ps>descomplicado</Ps>.</FranqueadosText>
          <FranqueadosText>Estamos em um <Ps>mercado</Ps> com <Ps>alto potencial</Ps> para <Ps>expansão</Ps> e com <Ps>possibilidade</Ps> de fazermos
          <Ps>mais</Ps> e melhor que a <Ps>concorrência</Ps>.</FranqueadosText>
          <FranqueadosText>A <Ps>gestão</Ps> do <Ps>negócio</Ps> é <Ps>simples</Ps> e a <Ps>franqueadora</Ps> fornece <Ps>treinamentos</Ps> e <Ps>suporte</Ps> para <Ps>rede</Ps>.</FranqueadosText>
          <FranqueadosText>Logo, para o <Ps>negócio prosperar</Ps> só <Ps>depende de nós</Ps>, colocando <Ps>energia</Ps> e <Ps>foco</Ps>,
          o <Ps>sucesso</Ps> é <Ps>questão de tempo</Ps>!</FranqueadosText>
        </DivTextSolange>
        <DivTextRafael>
          <FranqueadosText>Ser um <Ps>franqueado</Ps> da <Ps>Ponto TV</Ps> me traz duas <Ps>satisfações</Ps> importantes.</FranqueadosText>
          <FranqueadosText>A primeira é a <Ps>possibilidade</Ps> de <Ps>contribuir</Ps> com <Ps>empresas</Ps> que <Ps>precisam divulgar</Ps> mais
          os <Ps>seus serviços</Ps>, e a segunda é a <Ps>rentabilidade</Ps> do <Ps>négocio</Ps>.</FranqueadosText>
          <FranqueadosText>Dai a <Ps>razão</Ps> de ser franqueado <Ps>Ponto TV</Ps>!</FranqueadosText>
          <FranqueadosText>O fato de ser <Ps>lotérico</Ps> a <Ps>mais de 10 anos</Ps>, também <Ps>ajudou</Ps> muito a <Ps>trabalhar</Ps> com a <Ps>franquia</Ps>.</FranqueadosText>
          <FranqueadosText><Ps>Sempre</Ps> que tenho alguma <Ps>necessidade</Ps>, a <Ps>franqueadora</Ps> me <Ps>ajuda</Ps> no que eu <Ps>preciso</Ps> para
          <Ps> continuar</Ps> nos <Ps>negócios</Ps>.</FranqueadosText>
        </DivTextRafael>
        <DivTextAyla>
          <FranqueadosText><Ps>Antes</Ps> da <Ps>Ponto TV</Ps>, tinhamos receio sobre o <Ps>modelo</Ps> de <Ps>franquia</Ps>, desde o medo
          da falta de <Ps>suporte</Ps>, até o medo de não dar certo!</FranqueadosText>
          <FranqueadosText><Ps>Porém</Ps>, desde o <Ps>primeiro contato</Ps>, a <Ps>Ponto TV</Ps> nos passou <Ps>segurança</Ps>, e <Ps>ganhou </Ps>
          nossa <Ps>confiança</Ps>! O <Ps>modelo</Ps> de <Ps>negócio</Ps> é <Ps>simples</Ps>, <Ps>direto</Ps> e <Ps>lucrativo</Ps>!</FranqueadosText>
          <FranqueadosText>O <Ps>suporte</Ps> é <Ps>prático</Ps>, ativo e <Ps>confiável</Ps>!</FranqueadosText>
          <FranqueadosText><Ps>Hoje sabemos</Ps> que a <Ps>Ponto TV</Ps> é um <Ps>meio econômico</Ps> para <Ps>qualquer empresa</Ps> anunciar seu <Ps>negócio</Ps>.</FranqueadosText>
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