import React from 'react'
import { Header, WhatsApp } from '../components'
import styled from 'styled-components'
import BrazilMap from './Map'
import { Contato } from '../components'
import Footer from '../HomePage/footer'

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

function Franqueados (props) {
  return(
    <div>
      <Header/>
      <TitleDiv><h1>UNIDADES PELO BRASIL</h1></TitleDiv>
        <MapDiv>      
          <BrazilMap />    
        </MapDiv>
        <Contato />
        <Footer />
        <WhatsApp/>
    </div>
  )
}

export default Franqueados