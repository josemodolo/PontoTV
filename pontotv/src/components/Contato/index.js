import React from 'react'
import styled from 'styled-components';
import ContImg from '../../img/imghome/contato/contato.jpg'
import Mailer from '../Form/form';

const FormDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

function Contato (){
  return(
    <FormDiv id="formSection">
      <Img src = {ContImg}/>
      <Mailer />
    </FormDiv>
  )
}

export default Contato;