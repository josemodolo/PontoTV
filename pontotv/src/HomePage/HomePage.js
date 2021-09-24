import React from 'react'
import Header from '../HomePage/Components/header/header.js'
import App from '../HomePage/Components/divcarrosel/carrosel'
import WhatsApp from '../../src/HomePage/WhatsApp/WhatsApp';
import Description from './Components/Description/Description.js';
import Anuncie from './Components/Anuncie/anuncie'

function Home() {
  return (
    <div>
      <Header/>
      <App/>
      <Description/>
      <WhatsApp/>
      <Anuncie/>
      
    </div>
  );
}

export default Home;
