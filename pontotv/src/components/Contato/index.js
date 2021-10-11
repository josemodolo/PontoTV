import React from 'react'
import styled from 'styled-components';
import ContImg from '../../img/imghome/contato/contato.jpg'

const FormDiv = styled.div`
background:url(${ContImg});
display: flex;
height: 46vh;
background-size: 100%;
background-repeat: no-repeat;
`

function Contato (){
  return(
    <FormDiv id="formSection"></FormDiv>
  )
}

export default Contato;