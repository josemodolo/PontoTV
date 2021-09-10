import React from "react";
import Descriptionimg from '../../../img/descricao.jpg'
import styled from "styled-components";

const ImgDes = styled.img`
  width: 99vw;
`

function Description () {
  return(
    <>
      <ImgDes src={Descriptionimg}/>
    </>
  )
}

export default Description;