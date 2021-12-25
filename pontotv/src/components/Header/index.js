import React from 'react'
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
  padding: 0 5;
  background: url(${Headerback});
  position: sticky;
  top: 0;
  z-index: 1;
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


function Header(){
  const history = useHistory()

  return(
    <HeaderMenu>
      <ImgPtv src= {logoptv}/>
      <div class="mobile-menu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="nav-list">
        <button onClick = {()=> history.push('/')}>HOME</button>
        <button onClick = {()=> history.push('/unidades')}>UNIDADES</button>
        <button onClick = {()=> history.push('/sejaumfranqueado')}>SEJA UM FRANQUEADO</button>
        <a href="#formSection"><button class="contact">CONTATO</button></a>
      </div>
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