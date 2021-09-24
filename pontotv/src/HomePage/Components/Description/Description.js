import React from "react";
import Descriptionimg from '../../../img/imghome/historia/historia.jpg'
import styled from "styled-components";


const DivHistory = styled.div`
  display: flex;
  background:url(${Descriptionimg});
  align-items: center;
  justify-content: center;
  height: 36vh;
  background-size: 100%;
  background-repeat: no-repeat;
`


const ImgText = styled.h2`
 z-index: +1;
 font-family: ;
`

function Description () {
  return(
    <DivHistory>      
      <ImgText>HELLO WORLD!!</ImgText>
    </DivHistory>
  )
}

export default Description;