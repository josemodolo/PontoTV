import React from 'react'
import Header from '../HomePage/Components/header/header';
import Brasil from '../img/full.png'
import styled from 'styled-components';
import ReactDOM from "react-dom";
import Taiwan from "@svg-maps/taiwan";
import { SVGMap } from "react-svg-map";

const Map = styled.img`
  width: 110vh;
`
const MapDiv = styled.div`
border: 2px solid black;
width: 100vh;
height: 80vh;
display: flex;
align-items: center;

`

function Franqueados () {
  return(
    <div>
      <Header/>
        <MapDiv>
          <Map src={Brasil}/>
        </MapDiv>
        <SVGMap map={Taiwan}/>      
    </div>
  )
}

export default Franqueados;