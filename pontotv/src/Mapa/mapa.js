import React, { useState } from 'react'
import { Header, WhatsApp } from '../components'
import styled from 'styled-components'
import BrazilMap from './Map'
import { Contato } from '../components'
import Footer from '../HomePage/footer'
import "react-svg-map/lib/index.css"





const MapDiv = styled.div`
  width: 100vh;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
`

const Slider = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  width: 400px;
  border-left: 2px solid black;
  background-color: grey;
  height: 100vh;
`

function Franqueados (props) {
  const [showSlider, setShowSlider] = useState (false)
  // const [selectedState, setSelecetedState] = useState ('')

  function divLateral () {
    setShowSlider(true)
  }


  return(
    <div>
      <Header/>
      <TitleDiv><h1>UNIDADES PELO BRASIL</h1></TitleDiv>
        <MapDiv>      
          <BrazilMap onLocationClick={divLateral}/>
          {showSlider && <Slider></Slider>}    
        </MapDiv>
        <Contato />
        <Footer />
        <WhatsApp/>
    </div>
  )
}

export default Franqueados