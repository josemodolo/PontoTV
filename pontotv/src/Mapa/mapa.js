import React, { useState } from 'react'
import { FranchiseCard, Header, WhatsApp } from '../components'
import styled from 'styled-components'
import BrazilMap from './Map'
import Footer from '../HomePage/footer'
import "react-svg-map/lib/index.css"
import Bg from '../img/imghome/conteudomap/bg.jpg'
import { franchisees } from './franchisees'
import Imgunidades from './imgunidades.png'


const MapDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url(${Bg});
  background-size: cover;
  align-items: center;
  justify-content: center;
  
`

const Slider = styled.div`
  width: 30vw;
  overflow: auto;
  height: 80%;
`

const ImgUni = styled.img`
  width: 15vw;
  position: absolute;
`

// const TitleDiv = styled.div`
//   position: absolute;
//   margin-bottom: 45vw;
//   color: white;
// `

const Container = styled.div`
@media (max-width: 490px){
  overflow-x: hidden;
  }
`

const MapArea = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

function Franqueados (props) {
  const [selectedState, setSelectedState] = useState ('')

  function handleLocationClick (e) {
    setSelectedState(e.target.id)
  }

  return (
    <Container>
      <Header/>
        
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