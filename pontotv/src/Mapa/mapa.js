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
  width: 25vw;
  overflow: auto;
  height: 80%;
`

const ImgUni = styled.img`
  width: 15vw;
`

// const TitleDiv = styled.div`
//   position: absolute;
//   margin-bottom: 45vw;
//   color: white;
// `


function Franqueados (props) {
  const [selectedState, setSelectedState] = useState ('')

  function handleLocationClick (e) {
    setSelectedState(e.target.id)
  }

  return (
    <div>
      <Header/>
        
        <MapDiv>
        
        <ImgUni src= {Imgunidades}/>
          <BrazilMap
            onLocationClick={handleLocationClick} />
            
         
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
    </div>
  )
}

export default Franqueados