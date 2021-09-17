import React from 'react'
import styled from 'styled-components'
import logoptv from '../../../img/03.png'
import { useHistory } from 'react-router-dom'





/* header */
const HeaderMenu = styled.header`
  border: 2px solid #2b3445;
  height: 10vh;  
  display: flex;
  background-color: #2b3445;
    /* @media (max-width: 767px){
      width: 100%;
      height: 100%;
    }     */
`
/* header */



/* logo header */
const ImgDiv = styled.div`
width: 50vh;
display: flex;
flex-direction: row-reverse;
background-color: #2b3445;
  @media (max-width: 767px){
    flex-direction: row;
  }
`

const ImgPtv = styled.img `
  height: 9vh;
    @media (max-width: 767px){
      margin-left: 50px;
    }
`
/* logo header */


/* div button*/
const DivBttn = styled.div `
  width: 40%;
  height: 100%;
  border: 1px solid #2b3445;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-around;
  background-color: #2b3445;
    @media (max-width: 767px){
      
      flex-flow: column nowrap;
      background-color: blue;
      z-index: +1;
      align-items: center;
      height: 30vh;
      padding-top: 1rem;
    }
`

const Bttn = styled.button`
  padding: 10px;
  background-color: #2b3445;
  border: 5px solid #2b3445;
  border-radius: 2px;
  color: white;
  cursor: pointer;  
  &:hover{
    background-color: #2b3445;
    border: 5px solid #e3ab10;
  }
  font-size: 19px;  
  
`



function Header(){
  const history = useHistory ()

  return(
    <HeaderMenu>
      <ImgDiv>
        
        <ImgPtv src= {logoptv} className='ImgPtv'/>
      </ImgDiv>
      <DivBttn>
        <Bttn onClick = {()=> history.push('/')}>HOME</Bttn>
        <Bttn onClick = {()=> history.push('/Franqueados')}>UNIDADES</Bttn>
        <Bttn onClick = {()=> history.push('/Contato')}>FORMULARIO</Bttn>        
      </DivBttn>
      
    </HeaderMenu>
  )
}

export default Header;