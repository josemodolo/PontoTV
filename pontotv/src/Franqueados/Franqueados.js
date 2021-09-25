import React from 'react'
import { Header } from '../components/'
import styled from 'styled-components'
import BrazilMap from '../Franqueados/Map'

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
    </div>
  )
}

export default Franqueados