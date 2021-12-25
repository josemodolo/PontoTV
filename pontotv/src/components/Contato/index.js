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
  @media only screen and (max-width: 490px) {
    display: none;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 490px){
    display: none;
  }
`

//MOBILE

const FormDivMob = styled.div`
    @media only screen and (min-width: 490px) {
      display: none;
    }
  @media only screen and (max-width: 490px) {
  width: 100%;
  height: 100%;
  display: flex;
  //justify-content: end;
  align-items: center;
  flex-direction: column-reverse;
    
  }
`

const ImgMob = styled.img`
  width: 100%;
  height: 100%;
  @media (min-width: 490px){
    width: 100%;
    height: 100%;
  }
  @media (min-width: 490px){
   display: none ;
  }
`

function Contato (){
  return(
    <div>
      <FormDiv id="formSection">
        <Img src = {ContImg}/>
        <Mailer />
      </FormDiv>
      <FormDivMob id="formSection">
        <ImgMob src={FormMob}/>
        <Mailer />
      </FormDivMob>
    </div>
    
  )
}

export default Contato;