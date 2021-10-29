import React from 'react'
import AnunImg from '../../img/imghome/anunciantes/anunciantes.jpg'
import styled from 'styled-components'


const DivCentral = styled.div`
background:url(${AnunImg});
display: flex;
//height: 200vh;
//background-size: 100%;
background-repeat: no-repeat;
//@media (max-width: 1440px){
    //height: 75vh;
  //}
`


function Anunciantes () {
  return(
    <DivCentral></DivCentral>
  )
}

export default Anunciantes