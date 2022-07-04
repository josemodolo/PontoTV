import React from 'react'
import styled from 'styled-components';
import ContImg from '../../img/imghome/contato/contato.jpg'
import Mailer from '../Form/form';
import FormMob from '../../img/imgMobileHome/contato.png'

const FormDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 490px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

function Contato () {
  const isMobile = window.innerWidth <= 490

  return(
    <div>
      <FormDiv>
        <Img src = {isMobile ? FormMob : ContImg}/>
        <Mailer />
      </FormDiv>
    </div>    
  )
}

export default Contato;