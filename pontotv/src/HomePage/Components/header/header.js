import React from 'react'
import styled from 'styled-components'
import logoptv from '../../../img/01.png'
import { useHistory } from 'react-router-dom'
import Headerback from '../../../img/header.png'
import Icon01 from '../../../img/iconimg/icon01.png'
import Icon02 from '../../../img/iconimg/icon02.png'
import Icon03 from '../../../img/iconimg/icon03.png'
import Icon04 from '../../../img/iconimg/icon04.png'


const HeaderMenu = styled.header`  
height: 10vh;  
display: flex;
background-color: #2b3445;
background:url(${Headerback});    
`

const ImgDiv = styled.div`
width: 50vh;
display: flex;
flex-direction: row-reverse;
background-color: #2b3445;
background:url(${Headerback});
  @media (max-width: 767px){
    flex-direction: row;
  }  
`

const ImgPtv = styled.img `
  height: 9vh;
  margin-right: 10px;
    @media (max-width: 767px){
      margin-left: 50px;
    }
`

const DivBttn = styled.div `
  width: 40%;
  height: 100%;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-around;
  background-color: #2b3445;
  background:url(${Headerback});
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
  background-color: transparent;
  border: 5px solid transparent;
  border-radius: 2px;
  color: white;
  cursor: pointer;  
  &:hover{
    border: 5px solid #e8952b;
    border-radius: 10px;
  }
  font-size: 19px;  
  
`

const DivIcon = styled.div`
  width: 30vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  
`

const IconImg = styled.img`
  width: 20px;
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
        <Bttn>SEJA UM FRANQUEADO</Bttn>
        <Bttn onClick = {()=> history.push('/Contato')}>CONTATO</Bttn>        
      </DivBttn>
      <DivIcon>
        <a href="https://www.facebook.com/pontotv/"><IconImg src= {Icon01}/></a>
        <a href="https://www.instagram.com/pontotvpublicidade/"><IconImg src= {Icon02}/></a>
        <a href="https://www.linkedin.com/company/51617579/admin/"><IconImg src= {Icon03}/></a>
        <a href="https://www.youtube.com/channel/UC2eJE7n3w57f2uoNierKAYQ/videos"><IconImg src= {Icon04}/></a>
      </DivIcon>
    </HeaderMenu>
  )
}

export default Header;