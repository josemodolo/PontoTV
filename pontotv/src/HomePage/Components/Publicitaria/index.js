import React from 'react'
import styled from 'styled-components'
import ImgPub from '../../../img/imghome/tvpublicitaria/tvpublicitaria.jpg'

const DivPub = styled.div`
  background:url(${ImgPub}); 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 89vh;
  background-size: 100%;
  background-repeat: no-repeat;
`

const TextArea = styled.div`
width: 50vw;
height: 60vh;
margin-left: 650px;
`


const TextTitle = styled.h1`
 z-index: +1;
 color: #0071c0;
 font-weight: 900; 
`

const TextImg = styled.p`
 z-index: +1;
 color: #4d4d4d;
 font-weight: 500;
 `

const OrderList = styled.p`
z-index: +1;
color: #4d4d4d;
font-weight: 500;
`

function Publicitaria () {
  return(  
    <DivPub>
      <TextArea>
        <h4>#</h4>
        <TextTitle></TextTitle>
        <TextImg></TextImg>
        <OrderList></OrderList>
      </TextArea>      
    </DivPub>  
       
  )
}

export default Publicitaria