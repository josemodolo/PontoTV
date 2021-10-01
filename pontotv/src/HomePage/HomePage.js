import React from 'react'
import { Header, WhatsApp } from '../components/'
import App from '../HomePage/Components/divcarrosel/carrosel'
import Description from './Components/Description/Description.js'
import Anuncie from './Components/Anuncie/anuncie'
import Contato from '../components/Contato'
import Publicitaria from './Components/Publicitaria'
import Corporativa from './Components/Corporativa'

function Home() {
  return (
    <div>
      <Header />
      <App />
      <Description />
      <WhatsApp />
      <Anuncie />
      <Publicitaria />
      <Corporativa />
      <Contato />
    </div>
  )
}

export default Home
