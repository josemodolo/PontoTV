import React, { useState } from 'react'
import { FranchiseCard, WhatsApp } from '../components'
import styled from 'styled-components'
import BrazilMap from './Map'
import Footer from '../HomePage/footer'
import "react-svg-map/lib/index.css"
import Bg from '../img/imghome/conteudomap/bg.jpg'
import { franchisees } from './franchisees'
import Imgunidades from './imgunidades.png'
import Arrow from '../Mapa/icon1.png'
import Header2 from '../components/Header map/index'
import BgMob from '../Mapa/unidadesBgMob.png'
import Accordion from './Accordion Menu/index'

const StateDiv = styled.div`
  background-color: #0071c0;
  border-radius: 10px;  
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0.9vw;
  display: inline-block;
  line-height: 1.7vw;
`

const Representantes = styled.p`
  font-size: 2vw;
  font-family:"GilroyHeavy";
  color: #ffb131;
`

const Estado = styled.p`
  font-size: 1.8vw;
  font-family:"GilroyHeavy";
  color: white;
`


const MapDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url(${Bg});
  background-size: cover;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 490px){
  display: none;
}  
`

const Slider = styled.div`
  width: 36vw;
  overflow: auto;
  height: 80%;
  @media only screen and (max-width: 490px){
  display: none;
} 
`

const ImgUni = styled.img`
  width: 15vw;
  position: absolute;
  @media only screen and (max-width: 490px){
  display: none;
}  
`

const Container = styled.div`
@media (max-width: 490px){
  overflow-x: hidden;
  }
`

const Titlediv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  color: white; 
  justify-content: center;
  margin-top: 0.6vw;
  @media only screen and (max-width: 490px){
  display: none;
}  
`

const MapArea = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media only screen and (max-width: 490px){
  display: none;
}  
`

const MapMobArea = styled.div`
@media only screen and (max-width: 490px){
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media only screen and (min-width: 490px){
  display: none;
}
`

const ImgBgMob = styled.img`
@media only screen and (max-width: 490px){
  width: 100%;
  height: 100%;
}
@media only screen and (min-width: 490px){
  display: none;
}
`


function Franqueados (props) {
  const [selectedState, setSelectedState] = useState ('')

  function handleLocationClick (e) {
    setSelectedState(e.target.id)
  }

  const selectedFranchise = franchisees.find((representante) => representante.id === selectedState)

  return (
    <Container>
      <Header2/>
        <MapMobArea>
          <ImgBgMob src={BgMob}/>
          <Accordion/>
        </MapMobArea>
        <Titlediv>
          <img src= {Arrow} alt=""/><h1>SELECIONE SEU ESTADO</h1>
        </Titlediv>
        <MapDiv>
          <MapArea>
            <ImgUni src= {Imgunidades}/>
            <BrazilMap
              onLocationClick={handleLocationClick} />
          </MapArea>
          <Slider>
            {selectedFranchise && (
              <>
                <StateDiv>
                  <Representantes>REPRESENTANTES</Representantes>
                  <Estado>{selectedFranchise.estado}</Estado>
                </StateDiv>
                {
                  selectedFranchise.representantes.map((data) => 
                    <FranchiseCard
                      key={data.nome}
                      data={data}
                    />
                  )
                }
              </>
              )}
          </Slider>
        </MapDiv>
        <Footer />
        <WhatsApp/>
    </Container>
  )
}

export default Franqueados