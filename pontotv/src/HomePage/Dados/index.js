import React from 'react'
import styled from 'styled-components'
import DadosImg from '../../img/imghome/dados/dados.jpg'

const DadosArea = styled.div`
  background:url(${DadosImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 450px;
`

function Dados () {
  return(
    <DadosArea />
  )
}

export default Dados