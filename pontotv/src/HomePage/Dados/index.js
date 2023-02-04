import React from 'react'
import styled from 'styled-components'
import DadosImg from '../../img/imghome/dados/dados.png'
import NumMob from '../../img/imgMobileHome/numeros.png'

const DadosArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 490px){
    display: none;
  }
`

const ImgMob = styled.img`
  width: 100%;
  height: 100%;
  @media (min-width: 490px){
    width: 100%;
    height: 100%;
  }
  @media (min-width: 490px){
   display: none ;
  }
`

function Dados () {
  return(
    <div>
      <DadosArea>
      <Img src = {DadosImg}/>
    </DadosArea><DadosArea>
      <ImgMob src = {NumMob}/>
    </DadosArea>
    </div>
  )
}

export default Dados