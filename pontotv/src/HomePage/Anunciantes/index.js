import React from 'react'
import AnunImg from '../../img/imghome/anunciantes/anunciantes.jpg'
import styled from 'styled-components'

const DivCentral = styled.div`
  background:url(${AnunImg});
  background-size: 100% 100%;   
  background-repeat: no-repeat;
  min-height: 600px;
  height: auto;
`

function Anunciantes () {
  return(
    <DivCentral />
  )
}

export default Anunciantes