import React from 'react'
import styled from 'styled-components'
import DadosImg from '../../img/imghome/dados/dados.jpg'

const DadosArea = styled.div`
  width: 100%;
  height: 100%;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

function Dados () {
  return(
    <DadosArea>
      <Img src = {DadosImg}/>
    </DadosArea>
  )
}

export default Dados