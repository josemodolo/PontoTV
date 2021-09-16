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
`
/* header */



/* logo header */
const ImgDiv = styled.div`
width: 50vh;
display: flex;
flex-direction: row-reverse;
background-color: #2b3445;
`

const ImgPtv = styled.img `
  height: 9vh;
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
        <ImgPtv src= {logoptv} />
      </ImgDiv>
      <DivBttn>
        <Bttn onClick = {()=> history.push('/')}>HOME</Bttn>
        <Bttn onClick = {()=> history.push('/Franqueados')}>UNIDADES</Bttn>
        <Bttn onClick = {()=> history.push('/Contato')}>SEJA UM FRANQUEADO</Bttn>        
      </DivBttn>       
    </HeaderMenu>
  )
}

export default Header;