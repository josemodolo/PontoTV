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

const FranquiaDiv = styled.div`
background:url(${FranquiaOque});
display: flex;
height: 500px;
background-size: 100% 100%;
background-size: cover;
background-repeat: no-repeat;
`

const Oferecemos = styled.div`
background:url(${OQueOferecemos});
display: flex;
flex-direction: row-reverse;
height: 600px;
background-size: 100% 100%;
background-repeat: no-repeat;
`

const Vantagens = styled.div`
background:url(${VantagensImg});
display: flex;
flex-direction: row-reverse;
height: 600px;
background-size: 100% 100%;
background-repeat: no-repeat;
`

const Cases = styled.div`
background:url(${CasesImg});
height: 1450px;
background-size: 100% 100%;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
`

const Investimento = styled.div`
background:url(${InvestimentoImg});
display: flex;
flex-direction: row-reverse;
height: 600px;
background-size: 100% 100%;
background-repeat: no-repeat;
`

const Kit = styled.div`
background:url(${KitImg});
display: flex;
flex-direction: row-reverse;
height: 600px;
background-size: 100% 100%;
background-repeat: no-repeat;
`

const Interessado = styled.div`
background:url(${InteressadoImg});
display: flex;
flex-direction: row-reverse;
height: 600px;
background-size: 100% 100%;
background-repeat: no-repeat;
`

const FranquiaText = styled.p`
  color: white;
  
  font-size: clamp(1.5rem, 2.5vw, 4rem);
`

const DivTextRodrigo = styled.div`  
  width: 60vw;
  height: 30vh;
  margin-top: 200px;
  margin-left: 350px;
`

const DivTextSolange = styled.div`  
  width: 60vw;
  height: 30vh;
  margin-top:90px;
  margin-left: 490px;
  
`

const DivTextRafael = styled.div`  
  width: 60vw;
  height: 30vh;
  margin-top:75px;
  margin-left: 350px;  
`

const DivTextAyla = styled.div`  
  width: 60vw;
  height: 30vh;
  margin-top: 135px;
  margin-left: 490px;  
`

const FranqueadosText = styled.p`
color: white;
`

const YoutubeDiv = styled.div`
  
  height: 70vh;
  background-color: #0072c0;
  display: flex;
  align-items: center;
  justify-content: center;
`


function SejaFranqueado () {
  return(
    <div>
            
      <Header/>      
      <FranquiaDiv>
        <FranquiaText>A <strong>Ponto TV</strong> está em <strong>expansão</strong> para todo o <strong>Brasil</strong>, e você também<br/>
        pode <strong>crescer</strong> junto <strong>conosco</strong>!<br/><br/>
        A <strong>Franquia de Midia Indoor</strong> da <strong>Ponto TV</strong>, é uma <strong>franquia barata</strong><br/>
        que traz um <strong>modelo</strong> de <strong>negócios lucrativo</strong>, com <strong>maturidade</strong><br/>
        de <strong>mercado</strong> e <strong>estratégias</strong> de <strong>atuação eficientes</strong> dentro do <strong>ramo</strong><br/>
        de <strong>publicidade indoor</strong>.<br/><br/>
        <strong>Além</strong> do lucro por meio da <strong>publicidade</strong>, os <strong>franqueados</strong> podem<br/>
        <strong>rentabilizar</strong> também <strong>através</strong> da <strong>TV Corporativa</strong>, tudo isso,<br/>
        <strong>dentro</strong> de um <strong>modelo "home based"</strong>, com <strong>baixo investimento</strong><br/>
        e <strong>baixo custo</strong> de <strong>operação</strong>.<br/><br/>
        <strong>Inicialmente</strong>, a <strong>rotina</strong> de negócios <strong>possibilita</strong> que o <strong>franqueado</strong><br/>
        <strong>atue sozinho</strong>, realizando a <strong>venda</strong> e <strong>publicação</strong> de <strong>anúndios</strong>,<br/>
        que são <strong>desenvolvidos</strong> por uma <strong>equipe preparada</strong>, que é<br/>
        <strong>disponibilizada</strong> pela <strong>franqueadora</strong>.<br/><br/>
        <strong>Não há limite</strong> de <strong>idade</strong> nem <strong>restrição de gênero</strong> para quem irá<br/>
        <strong>investir</strong> na <strong>franquia</strong>, e a franqueadora <strong>não exige educação formal</strong>,<br/>
        contudo, boas <strong>habilidades</strong> de <strong>comunicação</strong> são <strong>essenciais</strong>.</FranquiaText>
      </FranquiaDiv>
      <Oferecemos/>
      <Vantagens/>
      <Cases>
        <DivTextRodrigo>
          <FranqueadosText>A escolha pela franquia Ponto TV foi muito assertiva, iniciei com Kit Básico e em apenas 1 mês<br/>
          já estava com todas os pontos instalados. Com poucos meses de operação já possuo 10 pontos<br/>
          e percebi que o modelo de negócios era promissor e que rapidamente renderia lucros e haveria<br/>
          o retorno do investimento.<br/><br/>
          A equipe nos dá todo o suporte necessário, seja na parte técnica ou na comercial, desta forma<br/>
          as metas diárias se tornaram mas eficazes e sucesso de empreendimento foi garantido.<br/><br/>
          A Ponto TV, sem dúvida é um excelente investimento para quem tem foco e determinação,<br/>
          pois reúne em um só produto várias possibilidades de ganhos, abrindo as portas para<br/>
          um negócio local de sucesso... Estou muito satisfeito com os resultados!
          </FranqueadosText>
        </DivTextRodrigo>
        <DivTextSolange>
          <FranqueadosText>Decidimos investir na PontoTV por entendermos que a franquia é um negócio mais seguro<br/>
          e descomplicado.<br/><br/>
          Estamos em um mercado com alto potencial para expansão e com possibilidade de fazermos<br/>
          mas e melhor que a concorrência.<br/><br/>
          A gestão do negócio é simples e a franquia fornece treinamentos e suporte para rede.<br/><br/>
          Logo, para o negócio prosperar só depende de nós, colocando energia e foco,<br/>
          o sucesso é questão de tempo!</FranqueadosText>
        </DivTextSolange>
        <DivTextRafael>
          <FranqueadosText>Ser um franqueado da Ponto TV me traz duas satisfações importantes.<br/><br/>
          A primeira é a possibilidade de contribuir com empresas que precisam divulgar mais<br/>
          os seus serviços, e a segunda é a rentabilidade do négocio.<br/><br/>
          Dai a razão de ser franqueado Ponto TV!<br/><br/>
          O fato de ser lotérico a mais de 10 anos, também ajudou muito a trabalhar com a franquia.<br/><br/>
          Sempre que tenho alguma necessidade, a franqueadora me ajuda no que eu preciso para<br/>
          continuar nos negócios.</FranqueadosText>
        </DivTextRafael>
        <DivTextAyla>
          <FranqueadosText>Ser um franqueado da Ponto TV me traz duas satisfações importantes.<br/><br/>
          A primeira é a possibilidade de contribuir com empresas que precisam divulgar mais<br/>
          o seu negócio, e a segunda é a rentabilidade do negócio.<br/><br/>
          Dai a razão de ser franqueado Ponto TV.</FranqueadosText>
        </DivTextAyla>       
      </Cases>
      <Investimento/>
      <Kit/>
      <YoutubeDiv>
        <YoutubeEmbed/>
      </YoutubeDiv>      
      <Interessado/>
      <Contato/>
      <WhatsApp/>
      <Footer/>

    </div>
  )
}

export default SejaFranqueado