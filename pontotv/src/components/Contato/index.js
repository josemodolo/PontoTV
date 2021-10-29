import React from 'react'
import styled from 'styled-components';
import ContImg from '../../img/imghome/contato/contato.jpg'
import Mailer from '../Form/form';

const FormDiv = styled.div`
background:url(${ContImg});
display: flex;
flex-direction: row-reverse;
height: 300px;
background-size: 100%;
background-repeat: no-repeat;
background-color: yellow;
`

function Contato (){
  return(
    <FormDiv id="formSection">
      <Mailer />
    </FormDiv>
  )
}

export default Contato;