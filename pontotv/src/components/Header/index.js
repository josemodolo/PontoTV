import React, { useEffect, useState, useRef  } from 'react'
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
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  background-image: url(${Headerback});
  background-size:     cover;                      
    background-repeat:   no-repeat;
    background-position: center center;  
  padding: 0 5;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #0072c0;
`

const ImgPtv = styled.img`
  height: 4vw;
  margin-left: 12vw;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
    @media (max-width: 490px){
      margin-left: 5vw;
      height: 8vh;
      margin-top: 1vw;
    }
`

const DivIcon = styled.div`
  display: flex;
  width: 15vw;
  
  justify-content: space-evenly;
  @media (max-width: 490px){
    display: none;
  }
`

const IconImg = styled.img`
  width: 1.8vw;
  margin-top: 1vw;
  `

const NavList = styled.div`
  ${({ isOpen }) => `
  width: 44%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-left: 0.1vw;
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
  padding: 2px;
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
  h1{
    font-size: 1.4vw;
    margin-top: 1px;
    padding-left: 3px;
    padding-right: 3px;
    @media (max-width: 490px){
    font-size: 3.5vw;
  }
  }
`


function Header(){
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()

const ScrollToBottom = () =>{
  setIsOpen(false)
  window.location.href="#form-section"
}

useEffect(() => {
  if(window.location.href.includes("form-section")) {
    console.log('teste')
    window.location.href="#form-section"
  }
}, [window.location])


  return(
    <HeaderMenu>

      <ImgPtv src= {logoptv}/>
      <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      
      <NavList isOpen={isOpen}>
        <a href='/'><StyledButton onClick = {()=> history.push('/')}><h1>HOME</h1></StyledButton></a>
        <a href='/unidades'><StyledButton onClick = {()=> history.push('/unidades')}><h1>UNIDADES</h1></StyledButton></a>
        <a href='/sejaumfranqueado'><StyledButton onClick = {()=> history.push('/sejaumfranqueado')}><h1>SEJA UM FRANQUEADO</h1></StyledButton></a>
        <StyledButton onClick = {ScrollToBottom}><h1>CONTATO</h1></StyledButton>
      </NavList>
      
      <DivIcon>
        <a href="https://www.instagram.com/pontotvpublicidade/"><IconImg src= {Icon02}/></a>
        <a href="https://www.facebook.com/pontotv/"><IconImg src= {Icon01}/></a>
        <a href="https://www.linkedin.com/company/51617579/admin/"><IconImg src= {Icon03}/></a>
        <a href="https://www.youtube.com/channel/UC2eJE7n3w57f2uoNierKAYQ/videos"><IconImg src= {Icon04}/></a>
      </DivIcon>
      
    </HeaderMenu>
  )
}

export default Header