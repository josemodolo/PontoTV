import React from 'react'
import { Header, WhatsApp } from '../components/'
import App from '../HomePage/Components/divcarrosel/carrosel'
import Description from './Components/Description/Description.js'
import Anuncie from './Components/Anuncie/anuncie'
import Contato from '../components/Contato'
import Publicitaria from './Components/Publicitaria'
import Corporativa from './Components/Corporativa'
import Anunciantes from '../HomePage/Anunciantes/index'
import Dados from '../HomePage/Dados/index'
import Parceiros from '../HomePage/parceiros/index'
import Footer from './footer'
import styled from 'styled-components'




const GlobalDivHome = styled.div`
height: 100vh;
overflow: auto;
`

function Home() {
  return (
    <GlobalDivHome>
      <Header />
      <App />
      <Description />
      <WhatsApp />
      <Anuncie />
      <Publicitaria />
      <Corporativa />
      <Anunciantes />
      <Parceiros />
      <Dados />
      <Contato />
      <Footer />
    </GlobalDivHome>
  )
}

export default Home
