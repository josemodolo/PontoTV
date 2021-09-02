import React from 'react'
import styled from 'styled-components'
import WpLogo from '../../img/WhatsApp.png'

const WpDiv = styled.div`
width: 10vw;
height: 10vh;
`

const WhatsLogo = styled.img`
  height: 100%;
`

function WhatsApp () {
  return (
    <WpDiv>
      <a href= "https://api.whatsapp.com/send?phone=5541995018102">
        <WhatsLogo src= {WpLogo}/>
      </a>
    </WpDiv>
  )
}

export default WhatsApp;