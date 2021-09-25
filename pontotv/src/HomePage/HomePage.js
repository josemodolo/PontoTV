import React from 'react'
import { Header, WhatsApp } from '../components/'
import App from '../HomePage/Components/divcarrosel/carrosel'
import Description from './Components/Description/Description.js'
import Anuncie from './Components/Anuncie/anuncie'

function Home() {
  return (
    <div>
      <Header />
      <App />
      <Description />
      <WhatsApp />
      <Anuncie />
    </div>
  )
}

export default Home
