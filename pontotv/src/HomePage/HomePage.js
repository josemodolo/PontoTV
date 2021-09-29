import React from 'react'
import { Header, WhatsApp } from '../components/'
import App from '../HomePage/Components/divcarrosel/carrosel'
import Description from './Components/Description/Description.js'
import Anuncie from './Components/Anuncie/anuncie'
import Contato from '../components/Contato'

function Home() {
  return (
    <div>
      <Header />
      <App />
      <Description />
      <WhatsApp />
      <Anuncie />
      <Contato />
    </div>
  )
}

export default Home
