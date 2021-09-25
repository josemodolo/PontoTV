import React from 'react'
import styled from 'styled-components'
import WpLogo from '../../img/WhatsApp.png'

const WhatsLogo = styled.img`
  height: 8%;
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 1;
`

function WhatsApp () {
  return (
    <a href= "https://api.whatsapp.com/send?phone=5541995018102">
      <WhatsLogo src= {WpLogo}/>
    </a>
  )
}

export default WhatsApp