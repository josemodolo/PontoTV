import React from 'react'
import AnunImg from '../../img/imghome/anunciantes/anunciantes.png'
import styled from 'styled-components'
import AnunMob from '../../img/imgMobileHome/anunciantes.png'

const DivCentral = styled.div`
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

function Anunciantes () {
  return(
    <div>
      <DivCentral>
      <Img src = {AnunImg}/>
    </DivCentral>
    <DivCentral>
      <ImgMob src = {AnunMob} />
    </DivCentral>
    </div>
    
    
  )
}

export default Anunciantes