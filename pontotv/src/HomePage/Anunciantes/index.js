import React from 'react'
import AnunImg from '../../img/imghome/anunciantes/anunciantes.jpg'
import styled from 'styled-components'

const DivCentral = styled.div`
  width: 100%;
  height: 100%;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

function Anunciantes () {
  return(
    <DivCentral>
      <Img src = {AnunImg} />
    </DivCentral>
  )
}

export default Anunciantes