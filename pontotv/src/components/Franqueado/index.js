import React, {useEffect}from 'react'
import { Header, WhatsApp } from '../../components'
import FranquiaOque from '../../img/imgfranc/franquia.jpg'
import OQueOferecemos from '../../img/imgfranc/oferecemos.jpg'
import VantagensImg from '../../img/imgfranc/vantagens.png'
import CasesImg from '../../img/imgfranc/cases.png'
import Contato from '../Contato'
import InvestimentoImg from '../../img/imgfranc/investimento.png'
import KitImg from '../../img/imgfranc/kit.png'
import InteressadoImg from '../../img/imgfranc/interessado.jpg'
import styled from 'styled-components'
import Footer from '../../HomePage/footer'
import YoutubeEmbed from '../Youtube'
import FranquiaMob from '../../img/imgMobileHome/franquiaimg/franquia.png'
import DownloadFile2 from '../DownloadFile2'
import OQueOferecemosMob from '../../img/imgMobileHome/franquiaimg/oferecemosmob.png'
import VantagensMob from '../../img/imgMobileHome/franquiaimg/vantagens.png'
import InvestimentoMob from '../../img/imgMobileHome/franquiaimg/investimentomob.png'
import KitFranquiaMob from '../../img/imgMobileHome/franquiaimg/kitfranquia.png'
import InteressadoMob from '../../img/imgMobileHome/franquiaimg/interessadomob.png'
import CaseImgMob from '../../img/imgfranc/casesmob.png'
import Aos from 'aos';
import "aos/dist/aos.css";

//area da franquia
const FranquiaDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 490px){
    display: none;
  }
`

const Img1 = styled.img`
  width: 100%;
  height: 100%;
`

const FranquiaTextDiv = styled.div`
   //display: flex;
   position: absolute;
   width: 45%;
   height: 0 auto;
   flex-direction: column;
   margin-top: 1vw;
   margin-right: 3.5vw;
   
   
`

 const FranquiaText = styled.p`
   color: white;
   width: 100%;
   height: 0 auto;
   font-weight: 400;
   font-size: 1.3vw;
   padding: 0.6vw;
   line-height: 1.7vw;
 `

//area oferecemos
const OferecemosDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 490px){
    display: none;
  }
`

const Img2 = styled.img`
  width: 100%;
  height: 100%;
`

//area vantagens
const VantagensDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 490px){
    display: none;
  }
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
  @media (max-width: 490px){
    display: none;
  }
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
  @media (max-width: 490px){
      display: none;
    }
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
  @media (max-width: 490px){
      display: none;
    }
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
  @media (max-width: 490px){
        display: none;
      }
`

const Img7 = styled.img`
  width: 100%;
  height: 100%;
`

const DivTextRodrigo = styled.div`
  display: flex;
  position: absolute;
  width: 55%;
  height: 0 auto;
  margin-top: 13vw;
  margin-left: 26vw;
  flex-direction: column;
  @media (max-width: 490px){
    margin-top: 75vw;
    text-align: center;
    width: 80vw;
    margin-left: 10.5vw;
  }
 `

 const DivTextSolange = styled.div`
  position: absolute;
  width: 55.3%;
  height: 0 auto;
  margin-top: 37.3vw;
  margin-left: 36vw;
  @media (max-width: 490px){
    margin-top: 206vw;
    margin-left: 10vw;
    text-align: center;
    width: 80vw;
  }
 `

 const DivTextRafael = styled.div`  
   position: absolute;
   width: 49%;
   height: 0 auto;
   margin-top: 59.5vw;
   margin-left: 26vw; 
   @media (max-width: 490px){
    margin-top: 315vw;
    margin-left: 10vw;
    text-align: center;
    width: 80vw;
  }  
 `

 const DivTextAyla = styled.div`
   position: absolute;
   width: 46%;
   height: 0 auto;
   margin-top: 84.6vw;
   margin-left: 36vw;
   @media (max-width: 490px){
    margin-top: 435vw;
    margin-left: 10vw;
    text-align: center;
    width: 80vw;
  }
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
  background-color: #E6E6E6;
  align-items: center;
  justify-content: center;
  display: flex;
`

const Ps = styled.span`
  
`

const Container = styled.div`
@media (max-width: 490px){
  overflow-x: hidden;
  }
`

//=========================================MOBILE=================================================

const FranquiaDivMob = styled.div`
  @media (min-width: 490px){
    display: none;
  }
  @media (max-width: 490px){
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`

const OferecemosMob = styled.div`
  @media (min-width: 490px){
    display: none;
  }
  @media (max-width: 490px){
    width: 100%;
    height: 100%;
    display: flex;
  }
`

const VantagensDivMob = styled.div`
  @media (min-width: 490px){
    display: none;
  }
  @media (max-width: 490px){
    width: 100%;
    height: 100%;
    display: flex;
  }
`

const InvestimentoMobDiv = styled.div`
  @media (min-width: 490px){
      display: none;
    }
    @media (max-width: 490px){
      width: 100%;
      height: 100%;
      display: flex;
    }
`

const KitDivMob = styled.div`
  @media (min-width: 490px){
        display: none;
      }
      @media (max-width: 490px){
        width: 100%;
        height: 100%;
        display: flex;
      }
`

const Img1Mob = styled.img`
  width: 100%;
  height: 100%;
`

const FranquiaTextDivMob = styled.div`
   position: absolute;
   width: 80vw;
   height: 62vw;
   height: 0 auto;   
   margin-bottom: 18vw;
   margin-right: 3vw;
`

const FranquiaTextMob = styled.p`
   color: white;
   font-weight: 400;
   font-size: 2.7vw;
   padding: 1vw;
   margin-bottom: 1vw;
`

const InteressadoDivMob = styled.div`
  @media (min-width: 490px){
        display: none;
      }
      @media (max-width: 490px){
        width: 100%;
        height: 100%;
        display: flex;
      }
`
const CasesDivMob = styled.div`
@media (min-width: 490px){
        display: none;
      }
      @media (max-width: 490px){
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
      }
  
`

const FranqueadoTextMob = styled.p`
 color: white;
 font-size: 2.9vw;
 font-weight: 500;
 padding: 1vw;
`

const HashtagFirstDiv = styled.h1`
  font-family:"GilroyExtraBold";
  color: #f9ae42;
  font-size: 2.3vw;
  margin-top: 0.3vw;
  margin-left: 0.5vw;
`

function SejaFranqueado () {

  useEffect(()=> {
    Aos.init({duration: 2000});
  }, []);

  return(
    <div>
      <Container>
      <Header/>
      {/* <FranquiaTextMob></FranquiaTextMob> */}
      {/* MOBILE */}
      <FranquiaDivMob>
        <Img1Mob src= {FranquiaMob}/>
          <FranquiaTextDivMob data-aos="fade-in">
            <FranquiaTextMob>A <Ps>Ponto TV</Ps> está em <Ps>expansão</Ps> para todo o <Ps>Brasil</Ps>, e você também
              pode <Ps>crescer</Ps> junto <Ps>conosco</Ps>!</FranquiaTextMob>
            <FranquiaTextMob>A <Ps>Franquia de Mídia Indoor</Ps> da <Ps>Ponto TV</Ps>, é uma <Ps>franquia barata </Ps>
              que traz um <Ps>modelo</Ps> de <Ps>negócio lucrativo</Ps>, com <Ps>maturidade </Ps>
              de <Ps>mercado</Ps> e <Ps>estratégias</Ps> de <Ps>atuações eficientes</Ps> dentro do <Ps>ramo </Ps>
              de <Ps>publicidade Indoor</Ps>.</FranquiaTextMob>
            <FranquiaTextMob><Ps>Além</Ps> do <Ps>lucro</Ps> por meio da <Ps>publicidade</Ps>, os <Ps>franqueados</Ps> podem
              <Ps> rentabilizar</Ps> também <Ps>através</Ps> da <Ps>TV Corporativa</Ps>, tudo isso,
              <Ps> dentro</Ps> de um <Ps>modelo "home based"</Ps>, com <Ps>baixo investimento </Ps>
              e <Ps>baixo custo</Ps> de <Ps>operação</Ps>.</FranquiaTextMob>
            <FranquiaTextMob><Ps>Inicialmente</Ps>, a <Ps>rotina</Ps> de negócio <Ps>possibilita</Ps> que o <Ps>franqueado </Ps>
              <Ps>atue sozinho</Ps>, realizando a <Ps>venda</Ps> e <Ps>publicação</Ps> de <Ps>anúncios</Ps>,
              que são <Ps>desenvolvidos</Ps> por uma <Ps>equipe preparada</Ps>, que é
              <Ps> disponibilizada</Ps> pela <Ps>franqueadora</Ps>.</FranquiaTextMob>
            <FranquiaTextMob><Ps>Não há limite</Ps> de <Ps>idade</Ps> nem <Ps>restrição de gênero</Ps> para quem irá
              <Ps> investir</Ps> na <Ps>franquia</Ps>, e a franqueadora <Ps>não exige educação formal</Ps>,
              contudo, boas <Ps>habilidades</Ps> de <Ps>comunicação</Ps> são <Ps>essenciais</Ps>.</FranquiaTextMob>
          </FranquiaTextDivMob>
      </FranquiaDivMob>
      {/* MOBILE       */}
      <FranquiaDiv>
        <Img1 src= {FranquiaOque}/>
          <FranquiaTextDiv data-aos="fade-in">
          <HashtagFirstDiv>#SEJAAPONTOTVNASUACIDADE</HashtagFirstDiv>
            <FranquiaText>A <Ps>Ponto TV</Ps> está em <Ps>expansão</Ps> para todo o <Ps>Brasil</Ps>, e você também
              pode <Ps>crescer</Ps> junto <Ps>conosco</Ps>!</FranquiaText>
              <FranquiaText>A <Ps>Franquia de Mídia Indoor</Ps> da <Ps>Ponto TV</Ps>, é uma <Ps>franquia barata </Ps>
              que traz um <Ps>modelo</Ps> de <Ps>negócio lucrativo</Ps>, com <Ps>maturidade </Ps>
              de <Ps>mercado</Ps> e <Ps>estratégias</Ps> de <Ps>atuações eficientes</Ps> dentro do <Ps>ramo </Ps>
              de <Ps>publicidade Indoor</Ps>.</FranquiaText>
              <FranquiaText><Ps>Além</Ps> do <Ps>lucro</Ps> por meio da <Ps>publicidade</Ps>, os <Ps>franqueados</Ps> podem
              <Ps> rentabilizar</Ps> também <Ps>através</Ps> da <Ps>TV Corporativa</Ps>, tudo isso,
              <Ps> dentro</Ps> de um <Ps>modelo "home based"</Ps>, com <Ps>baixo investimento </Ps>
              e <Ps>baixo custo</Ps> de <Ps>operação</Ps>.</FranquiaText>
              <FranquiaText><Ps>Inicialmente</Ps>, a <Ps>rotina</Ps> de negócio <Ps>possibilita</Ps> que o <Ps>franqueado </Ps>
              <Ps>atue sozinho</Ps>, realizando a <Ps>venda</Ps> e <Ps>publicação</Ps> de <Ps>anúncios</Ps>,
              que são <Ps>desenvolvidos</Ps> por uma <Ps>equipe preparada</Ps>, que é
              <Ps> disponibilizada</Ps> pela <Ps>franqueadora</Ps>.</FranquiaText>
              <FranquiaText><Ps>Não há limite</Ps> de <Ps>idade</Ps> nem <Ps>restrição de gênero</Ps> para quem irá
              <Ps> investir</Ps> na <Ps>franquia</Ps>, e a franqueadora <Ps>não exige educação formal</Ps>,
              contudo, boas <Ps>habilidades</Ps> de <Ps>comunicação</Ps> são <Ps>essenciais</Ps>.</FranquiaText>
          </FranquiaTextDiv>
      </FranquiaDiv>
        

      <OferecemosDiv>
        <Img2 src = {OQueOferecemos}/>
      </OferecemosDiv>

      <OferecemosMob>
        <Img1Mob src= {OQueOferecemosMob}/>
      </OferecemosMob>

      <VantagensDiv>
        <Img3 src= {VantagensImg}/>
      </VantagensDiv>

      <VantagensDivMob>
        <Img1Mob src= {VantagensMob}/>
      </VantagensDivMob>

      <CasesDiv>
        <Img4 src = {CasesImg}/>
        <DivTextRodrigo data-aos="fade-in">
          <FranqueadosText>A <Ps>escolha</Ps> pela <Ps>franquia Ponto TV</Ps> foi muito <Ps>assertiva</Ps>, <Ps>iniciei</Ps> com o <Ps>Kit Básico</Ps> e em <Ps>apenas 1 mês </Ps>
           já <Ps>estava</Ps> com <Ps>todos</Ps> os <Ps>pontos instalados</Ps>. Com <Ps>poucos meses</Ps> de <Ps>operação</Ps> já <Ps>possuo 10 pontos </Ps>
          e percebi que o <Ps>modelo</Ps> de <Ps>negócio</Ps> era <Ps>promissor</Ps> e que <Ps>rapidamente</Ps> renderia <Ps>lucros</Ps> e haveria
          o <Ps>retorno</Ps> do <Ps>investimento</Ps>.</FranqueadosText>
          <FranqueadosText>A <Ps>equipe</Ps> nos dá todo o <Ps>suporte necessário</Ps>, seja na <Ps>parte técnica</Ps> ou na <Ps>comercial</Ps>, desta forma
          as <Ps>metas diárias</Ps> se tornaram mas <Ps>eficazes</Ps> e <Ps>sucesso</Ps> de <Ps>empreendimento</Ps> foi <Ps>garantido</Ps>.</FranqueadosText>
          <FranqueadosText>A <Ps>Ponto TV</Ps>, sem dúvida é um <Ps>excelente investimento</Ps> para quem tem foco e <Ps>determinação</Ps>,
          pois <Ps>reúne</Ps> em um só produto <Ps>várias possibilidades</Ps> de <Ps>ganhos</Ps>, <Ps>abrindo</Ps> as <Ps>portas</Ps> para
          um <Ps>negócio local</Ps> de <Ps>sucesso</Ps>... Estou <Ps>muito satisfeito</Ps> com os <Ps>resultados</Ps>!</FranqueadosText>
          
        </DivTextRodrigo>
        <DivTextSolange data-aos="fade-in">
          <FranqueadosText>Decidimos <Ps>investir</Ps> na <Ps>Ponto TV</Ps> por <Ps>entendermos</Ps> que <Ps>franquia</Ps> é um <Ps>negócio mais seguro </Ps>
          e <Ps>descomplicado</Ps>.</FranqueadosText>
          <FranqueadosText>Estamos em um <Ps>mercado</Ps> com <Ps>alto potencial</Ps> para <Ps>expansão</Ps> e com <Ps>possibilidade</Ps> de fazermos
          <Ps> mais</Ps> e melhor que a <Ps>concorrência</Ps>.</FranqueadosText>
          <FranqueadosText>A <Ps>gestão</Ps> do <Ps>negócio</Ps> é <Ps>simples</Ps> e a <Ps>franqueadora</Ps> fornece <Ps>treinamentos</Ps> e <Ps>suporte</Ps> para <Ps>rede</Ps>.</FranqueadosText>
          <FranqueadosText>Logo, para o <Ps>negócio prosperar</Ps> só <Ps>depende de nós</Ps>, colocando <Ps>energia</Ps> e <Ps>foco</Ps>,
          o <Ps>sucesso</Ps> é <Ps>questão de tempo</Ps>!</FranqueadosText>
        </DivTextSolange>

        <DivTextRafael data-aos="fade-in">
          <FranqueadosText>Ser um <Ps>franqueado</Ps> da <Ps>Ponto TV</Ps> me traz duas <Ps>satisfações</Ps> importantes.</FranqueadosText>
          <FranqueadosText>A primeira é a <Ps>possibilidade</Ps> de <Ps>contribuir</Ps> com <Ps>empresas</Ps> que <Ps>precisam divulgar</Ps> mais
          os <Ps>seus serviços</Ps>, e a segunda é a <Ps>rentabilidade</Ps> do <Ps>négocio</Ps>.</FranqueadosText>
          <FranqueadosText>Dai a <Ps>razão</Ps> de ser franqueado <Ps>Ponto TV</Ps>!</FranqueadosText>
          <FranqueadosText>O fato de ser <Ps>lotérico</Ps> a <Ps>mais de 10 anos</Ps>, também <Ps>ajudou</Ps> muito a <Ps>trabalhar</Ps> com a <Ps>franquia</Ps>.</FranqueadosText>
          <FranqueadosText><Ps>Sempre</Ps> que tenho alguma <Ps>necessidade</Ps>, a <Ps>franqueadora</Ps> me <Ps>ajuda</Ps> no que eu <Ps>preciso</Ps> para
          <Ps> continuar</Ps> nos <Ps>negócios</Ps>.</FranqueadosText>
        </DivTextRafael>

        <DivTextAyla data-aos="fade-in">
          <FranqueadosText><Ps>Antes</Ps> da <Ps>Ponto TV</Ps>, tinhamos receio sobre o <Ps>modelo</Ps> de <Ps>franquia</Ps>, desde o medo
          da falta de <Ps>suporte</Ps>, até o medo de não dar certo!</FranqueadosText>
          <FranqueadosText><Ps>Porém</Ps>, desde o <Ps>primeiro contato</Ps>, a <Ps>Ponto TV</Ps> nos passou <Ps>segurança</Ps>, e <Ps>ganhou </Ps>
          nossa <Ps>confiança</Ps>! O <Ps>modelo</Ps> de <Ps>negócio</Ps> é <Ps>simples</Ps>, <Ps>direto</Ps> e <Ps>lucrativo</Ps>!</FranqueadosText>
          <FranqueadosText>O <Ps>suporte</Ps> é <Ps>prático</Ps>, ativo e <Ps>confiável</Ps>!</FranqueadosText>
          <FranqueadosText><Ps>Hoje sabemos</Ps> que a <Ps>Ponto TV</Ps> é um <Ps>meio econômico</Ps> para <Ps>qualquer empresa</Ps> anunciar seu <Ps>negócio</Ps>.</FranqueadosText>
        </DivTextAyla>
      </CasesDiv>

      <CasesDivMob>
        <Img4 src = {CaseImgMob}/>
        <DivTextRodrigo data-aos="fade-in">
          <FranqueadoTextMob>A <Ps>escolha</Ps> pela <Ps>franquia Ponto TV</Ps> foi muito <Ps>assertiva</Ps>, <Ps>iniciei</Ps> com o <Ps>Kit Básico</Ps> e em <Ps>apenas 1 mês </Ps>
           já <Ps>estava</Ps> com <Ps>todos</Ps> os <Ps>pontos instalados</Ps>.</FranqueadoTextMob> 
          <FranqueadoTextMob>Com <Ps>poucos meses</Ps> de <Ps>operação</Ps> já <Ps>possuo 10 pontos </Ps>
          e percebi que o <Ps>modelo</Ps> de <Ps>negócio</Ps> era <Ps>promissor</Ps> e que <Ps>rapidamente</Ps> renderia <Ps>lucros</Ps> e haveria
          o <Ps>retorno</Ps> do <Ps>investimento</Ps>.</FranqueadoTextMob>
          <FranqueadoTextMob>A <Ps>equipe</Ps> nos dá todo o <Ps>suporte necessário</Ps>, seja na <Ps>parte técnica</Ps> ou na <Ps>comercial</Ps>, desta forma
          as <Ps>metas diárias</Ps> se tornaram mas <Ps>eficazes</Ps> e <Ps>sucesso</Ps> de <Ps>empreendimento</Ps> foi <Ps>garantido</Ps>.</FranqueadoTextMob>
          <FranqueadoTextMob>A <Ps>Ponto TV</Ps>, sem dúvida é um <Ps>excelente investimento</Ps> para quem tem foco e <Ps>determinação</Ps>,
          pois <Ps>reúne</Ps> em um só produto <Ps>várias possibilidades</Ps> de <Ps>ganhos</Ps>, <Ps>abrindo</Ps> as <Ps>portas</Ps> para
          um <Ps>negócio local</Ps> de <Ps>sucesso</Ps>... Estou <Ps>muito satisfeito</Ps> com os <Ps>resultados</Ps>!</FranqueadoTextMob>
          
        </DivTextRodrigo>

        <DivTextSolange data-aos="fade-in">
        <FranqueadoTextMob>Decidimos <Ps>investir</Ps> na <Ps>Ponto TV</Ps> por <Ps>entendermos</Ps> que <Ps>franquia</Ps> é um <Ps>negócio mais seguro </Ps>
          e <Ps>descomplicado</Ps>.</FranqueadoTextMob>
          <FranqueadoTextMob>Estamos em um <Ps>mercado</Ps> com <Ps>alto potencial</Ps> para <Ps>expansão</Ps> e com <Ps>possibilidade</Ps> de fazermos
          <Ps> mais</Ps> e melhor que a <Ps>concorrência</Ps>.</FranqueadoTextMob>
          <FranqueadoTextMob>A <Ps>gestão</Ps> do <Ps>negócio</Ps> é <Ps>simples</Ps> e a <Ps>franqueadora</Ps> fornece <Ps>treinamentos</Ps> e <Ps>suporte</Ps> para <Ps>rede</Ps>.</FranqueadoTextMob>
          <FranqueadoTextMob>Logo, para o <Ps>negócio prosperar</Ps> só <Ps>depende de nós</Ps>, colocando <Ps>energia</Ps> e <Ps>foco</Ps>,
          o <Ps>sucesso</Ps> é <Ps>questão de tempo</Ps>!</FranqueadoTextMob>
        </DivTextSolange>

        <DivTextRafael data-aos="fade-in">
          <FranqueadoTextMob>Ser um <Ps>franqueado</Ps> da <Ps>Ponto TV</Ps> me traz duas <Ps>satisfações</Ps> importantes.</FranqueadoTextMob>
          <FranqueadoTextMob>A primeira é a <Ps>possibilidade</Ps> de <Ps>contribuir</Ps> com <Ps>empresas</Ps> que <Ps>precisam divulgar</Ps> mais
          os <Ps>seus serviços</Ps>, e a segunda é a <Ps>rentabilidade</Ps> do <Ps>négocio</Ps>.</FranqueadoTextMob>
          <FranqueadoTextMob>Dai a <Ps>razão</Ps> de ser franqueado <Ps>Ponto TV</Ps>!</FranqueadoTextMob>
          <FranqueadoTextMob>O fato de ser <Ps>lotérico</Ps> a <Ps>mais de 10 anos</Ps>, também <Ps>ajudou</Ps> muito a <Ps>trabalhar</Ps> com a <Ps>franquia</Ps>.</FranqueadoTextMob>
          <FranqueadoTextMob><Ps>Sempre</Ps> que tenho alguma <Ps>necessidade</Ps>, a <Ps>franqueadora</Ps> me <Ps>ajuda</Ps> no que eu <Ps>preciso</Ps> para
          <Ps> continuar</Ps> nos <Ps>negócios</Ps>.</FranqueadoTextMob>
        </DivTextRafael>

        <DivTextAyla data-aos="fade-in">
          <FranqueadoTextMob><Ps>Antes</Ps> da <Ps>Ponto TV</Ps>, tinhamos receio sobre o <Ps>modelo</Ps> de <Ps>franquia</Ps>, desde o medo
          da falta de <Ps>suporte</Ps>, até o medo de não dar certo!</FranqueadoTextMob>
          <FranqueadoTextMob><Ps>Porém</Ps>, desde o <Ps>primeiro contato</Ps>, a <Ps>Ponto TV</Ps> nos passou <Ps>segurança</Ps>, e <Ps>ganhou </Ps>
          nossa <Ps>confiança</Ps>! O <Ps>modelo</Ps> de <Ps>negócio</Ps> é <Ps>simples</Ps>, <Ps>direto</Ps> e <Ps>lucrativo</Ps>!</FranqueadoTextMob>
          <FranqueadoTextMob>O <Ps>suporte</Ps> é <Ps>prático</Ps>, ativo e <Ps>confiável</Ps>!</FranqueadoTextMob>
          <FranqueadoTextMob><Ps>Hoje sabemos</Ps> que a <Ps>Ponto TV</Ps> é um <Ps>meio econômico</Ps> para <Ps>qualquer empresa</Ps> anunciar seu <Ps>negócio</Ps>.</FranqueadoTextMob>
        </DivTextAyla>
      </CasesDivMob>

      

      <InvestimentoDiv>
        <Img5 src = {InvestimentoImg}/>
      </InvestimentoDiv>

      <InvestimentoMobDiv>
        <Img1Mob src= {InvestimentoMob}/>
      </InvestimentoMobDiv>

      <KitDiv>
        <Img6 src= {KitImg}/>
      </KitDiv>

      <KitDivMob>
        <Img1Mob src= {KitFranquiaMob}/>
      </KitDivMob>

      {/* <YoutubeDiv>
        <YoutubeEmbed/>
      </YoutubeDiv> */}
      <DownloadFile2 />

      <InteressadoDiv>
        <Img7 src = {InteressadoImg}/>
      </InteressadoDiv>

      <InteressadoDivMob>
        <Img1Mob src= {InteressadoMob}/>
      </InteressadoDivMob>


      <Contato/>
      <WhatsApp/>
      <Footer/>

      </Container>      
      
    </div>
  )
}

export default SejaFranqueado