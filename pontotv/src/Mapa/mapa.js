import React, { useState } from 'react'
import { FranchiseCard, Header, WhatsApp } from '../components'
import styled from 'styled-components'
import BrazilMap from './Map'
import Footer from '../HomePage/footer'
import "react-svg-map/lib/index.css"
import Bg from '../img/imghome/conteudomap/bg.jpg'
import { franchisees } from './franchisees'

const MapDiv = styled.div`
  width: 100vw;
  height: calc(100vh - 148px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${Bg});
  background-size: cover;
`

const Slider = styled.div`
  width: 400px;
  overflow: auto;
  height: 80%;
`

function Franqueados (props) {
  const [selectedState, setSelectedState] = useState ('')

  function handleLocationClick (e) {
    setSelectedState(e.target.id)
  }

  return (
    <div>
      <Header/>
        <MapDiv>
          <BrazilMap
            onLocationClick={handleLocationClick}
          />
          <Slider>
            {franchisees[selectedState]?.map((franquia) => {
              return (
                <FranchiseCard
                  name={franquia.name}
                  email={franquia.email}
                  phone={franquia.phone}
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