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
  width: 30vw;
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
            {franchisees[selectedState]?.map((franquia) => {
              return (
                <FranchiseCard
                  representantes={franquia.representantes}
                  estado={franquia.estado}
                  nome={franquia.nome}
                  local={franquia.local}
                  franqueada={franquia.franqueada}
                  franqueado={franquia.franqueado}
                  telefone={franquia.telefone}
                  facebook={franquia.facebook}
                  instagram={franquia.instagram}
                />
              )
            })
            }
          </Slider>
        </MapDiv>
        <Footer />
        <WhatsApp/>
    </Container>
  )
}

export default Franqueados