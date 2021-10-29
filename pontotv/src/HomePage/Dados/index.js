import React from 'react'
import styled from 'styled-components'
import DadosImg from '../../img/imghome/dados/dados.jpg'

const DadosArea = styled.div`
background:url(${DadosImg});
display: flex;
//height: 75vh;
background-size: 100%;
background-repeat: no-repeat;
`

function Dados () {
  return(
    <DadosArea></DadosArea>
  )
}

export default Dados