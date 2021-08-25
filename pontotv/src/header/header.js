import React from 'react'
import styled from 'styled-components'
import logoptv from '../img/03.png'


/* header */
const HeaderMenu = styled.header`
  border: 2px solid black;
  height: 10vh;  
  display: flex;
  background-color: black;
`
/* header */



/* logo header */
const ImgDiv = styled.div`
width: 50vh;
display: flex;
flex-direction: row-reverse;
background-color: black;
`

const ImgPtv = styled.img `
  height: 9vh;
`
/* logo header */


/* div button*/
const DivBttn = styled.div `
  width: 40%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-around;
  background-color: black;
`

const Bttn = styled.button`
  padding: 10px;
  background-color: black;
  border: 5px solid black;
  border-radius: 2px;
  color: white;
  cursor: pointer;  
  &:hover{
    background-color: blue;
    border: 5px solid #e3ab10;
  }
  font-size: 19px;
`



function Header(){
  return(
    <HeaderMenu>
      <ImgDiv>
        <ImgPtv src= {logoptv} />
      </ImgDiv>
      <DivBttn>
        <Bttn>HOME</Bttn>
        <Bttn>FRANQUEADOS</Bttn>
        <Bttn>CONTATO</Bttn>
      </DivBttn>       
    </HeaderMenu>
  )
}

export default Header;