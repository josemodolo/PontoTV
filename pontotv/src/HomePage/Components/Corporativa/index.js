import React from "react";
import ImgCorp from '../../../img/imghome/tvcorporativa/tvcorporativa.jpg'
import styled from "styled-components";

const DivCorp = styled.div`
  background:url(${ImgCorp}); 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 89vh;
  background-size: 100%;
  background-repeat: no-repeat;
`

function Corporativa () {
  return (
    <DivCorp></DivCorp>
  )
}

export default Corporativa