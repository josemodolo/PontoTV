import React from 'react'
import { Header, WhatsApp } from '../../components'
import FranquiaOque from '../../img/imgfranc/francWhatis.jpg'
import OQueOferecemos from '../../img/imgfranc/oferecemos.jpg'
import VantagensImg from '../../img/imgfranc/vantagens.jpg'
import CasesImg from '../../img/imgfranc/cases.jpg'
import Contato from '../Contato'
import InvestimentoImg from '../../img/imgfranc/investimento.jpg'
import KitImg from '../../img/imgfranc/kit.jpg'
import InteressadoImg from '../../img/imgfranc/interessado.jpg'
import styled from 'styled-components'
import Footer from '../../HomePage/footer'

const FranquiaDiv = styled.div`
background:url(${FranquiaOque});
display: flex;
flex-direction: row-reverse;
height: 71vh;
background-size: 100%;
background-repeat: no-repeat;
`

const Oferecemos = styled.div`
background:url(${OQueOferecemos});
display: flex;
flex-direction: row-reverse;
height: 71vh;
background-size: 100%;
background-repeat: no-repeat;
`

const Vantagens = styled.div`
background:url(${VantagensImg});
display: flex;
flex-direction: row-reverse;
height: 71vh;
background-size: 100%;
background-repeat: no-repeat;
`

const Cases = styled.div`
background:url(${CasesImg});
display: flex;
flex-direction: row-reverse;
height: 184vh;
background-size: 100%;
background-repeat: no-repeat;
`

const Investimento = styled.div`
background:url(${InvestimentoImg});
display: flex;
flex-direction: row-reverse;
height: 70vh;
background-size: 100%;
background-repeat: no-repeat;
`

const Kit = styled.div`
background:url(${KitImg});
display: flex;
flex-direction: row-reverse;
height: 71vh;
background-size: 100%;
background-repeat: no-repeat;
`

const Interessado = styled.div`
background:url(${InteressadoImg});
display: flex;
flex-direction: row-reverse;
height: 70vh;
background-size: 100%;
background-repeat: no-repeat;
`


function SejaFranqueado () {
  return(
    <div>
            
      <Header/>      
      <FranquiaDiv/>
      <Oferecemos/>
      <Vantagens/>
      <Cases/>
      <Investimento/>
      <Kit/>
      {/* video */}
      <Interessado/>
      <Contato/>
      <WhatsApp/>
      <Footer/>

    </div>
  )
}

export default SejaFranqueado