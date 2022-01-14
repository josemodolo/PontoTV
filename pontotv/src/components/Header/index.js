import React, { useState } from 'react'
import styled from 'styled-components'
import logoptv from '../../img/01.png'
import { useHistory } from 'react-router-dom'
import Headerback from '../../img/header.png'
import Icon01 from '../../img/iconimg/icon01.png'
import Icon02 from '../../img/iconimg/icon02.png'
import Icon03 from '../../img/iconimg/icon03.png'
import Icon04 from '../../img/iconimg/icon04.png'
import './style.css'


const HeaderMenu = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  background-image: url(${Headerback});
  background-size:     cover;                      
    background-repeat:   no-repeat;
    background-position: center center;  
  padding: 0 5;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #0072c0;
`

const ImgPtv = styled.img`
  height: 4rem;
  margin-left: 17vw;
  margin-top: 0.5vw;
    @media (max-width: 490px){
      margin-left: 1vw;
      width: 20vw;
      height: 5vh;
    }
`

const DivIcon = styled.div`
  display: flex;
  width: 15vw;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  @media (max-width: 490px){
    display: none;
  }
`

const IconImg = styled.img`
  width: 2vw;
  margin-top: 1vw;
  `

const NavList = styled.div`
  ${({ isOpen }) => `
  width: 44%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-left: 1vw;
  right: 0px;
  transition: right 0.5s ease-in-out;
  @media (max-width: 490px){
    position: absolute;
    top: 8vh;
    right: ${isOpen ?"0px" : "-240px"}; 
    width: 50vw;
    height: 50vh;
    background-color: #0072c0;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: right 0.5s ease-in-out;
    z-index: 10;
  }
  `}
`

const StyledButton = styled.button`
font-weight: bold;
  padding: 10px;
  background-color: transparent;
  border: 5px solid transparent;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  font-size: 1.4vw;
  &:hover{
  border: 5px solid #f9ae42;
  border-radius: 10px;
  }
  @media (max-width: 490px){
    font-size: 3vw;
  }
`


function Header(){
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()


  return(
    <HeaderMenu id="/">

      <ImgPtv src= {logoptv}/>
      <div class="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      
        <NavList isOpen={isOpen}>
        <a href='/'><StyledButton onClick = {()=> history.push('/')}>HOME</StyledButton></a>
        <a href='/unidades'><StyledButton onClick = {()=> history.push('/unidades')}>UNIDADES</StyledButton></a>
        <a href='/sejaumfranqueado'><StyledButton onClick = {()=> history.push('/sejaumfranqueado')}>SEJA UM FRANQUEADO</StyledButton></a>
        <a href="#formSection"><StyledButton class="contact">CONTATO</StyledButton></a>
      </NavList>
      
      <DivIcon>
        <a href="https://www.facebook.com/pontotv/"><IconImg src= {Icon01}/></a>
        <a href="https://www.instagram.com/pontotvpublicidade/"><IconImg src= {Icon02}/></a>
        <a href="https://www.linkedin.com/company/51617579/admin/"><IconImg src= {Icon03}/></a>
        <a href="https://www.youtube.com/channel/UC2eJE7n3w57f2uoNierKAYQ/videos"><IconImg src= {Icon04}/></a>
      </DivIcon>
      
    </HeaderMenu>
  )
}

export default Header