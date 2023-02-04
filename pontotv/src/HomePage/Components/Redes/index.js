import React from "react";
import styled from "styled-components";
import ImgRede from '../../../img/imghome/imgredes/redes.png'
import ImgRedeMob from '../../../img/imgMobileHome/redesmob.png'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    @media (max-width: 490px){
    display: none;
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


export default function RedesSociaisBanner(){
    return(
        <>
            <Container>
                <Img src={ImgRede}/>
                <ImgMob src={ImgRedeMob}/>
            </Container>
        </>
    )
}