import React from 'react'
import Header from '../HomePage/Components/header/header.js'
import App from '../HomePage/Components/divcarrosel/carrosel'
import WhatsApp from '../../src/HomePage/WhatsApp/WhatsApp';
import Description from './Components/Description/Description.js';

function Home() {
  return (
    <div>
      <Header/>
      <App/>
      <Description/>
      <WhatsApp/>
      
      

    </div>
  );
}

export default Home;
