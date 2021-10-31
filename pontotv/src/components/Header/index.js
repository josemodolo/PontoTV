import React from 'react'
import styled from 'styled-components'
import logoptv from '../../img/01.png'
import { useHistory } from 'react-router-dom'
import Headerback from '../../img/header.png'
import Icon01 from '../../img/iconimg/icon01.png'
import Icon02 from '../../img/iconimg/icon02.png'
import Icon03 from '../../img/iconimg/icon03.png'
import Icon04 from '../../img/iconimg/icon04.png'

const HeaderMenu = styled.header`
  width: 100%;
  height: 0 auto;
  display: flex;
  justify-content: space-around;
  background:url(${Headerback});
  padding: 5px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #0072c0;
`

// const ImgDiv = styled.div`
//   //border: 1px solid black;
//   padding: 1vw ;
//   //height: 0 auto;
//   //display: flex;
//   //flex-direction: row-reverse;
//   background:url(${Headerback});  
//   /* @media (max-width: 767px){
//     flex-direction: row;
//   } */
// `

const ImgPtv = styled.img ` 
  width: 10em;
`

const DivBttn = styled.div `
  width: 40%;
  height: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background:url(${Headerback});  
`

const Bttn = styled.button`
  padding: 10px;
  background-color: transparent;
  border: 5px solid transparent;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  outline: none;
  &:hover{
    border: 5px solid #e8952b;
    border-radius: 10px;
  }
  font-size: 1.4vw;
`

const BttnContact = styled.button`
  padding: 10px;
  background-color: transparent;
  border: 5px solid transparent;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  outline: none;
  scroll-behavior: smooth;
  &:hover{
    border: 5px solid #e8952b;
    border-radius: 10px;
  }
  font-size: 1.4vw;
`

const DivIcon = styled.div`
  border: 2px solid white;
  
  //width: 12vw;
  //height: 0 auto;
  //display: flex;
  //justify-content: space-around;
  //margin-top: 13px;
  //margin-left: 150px ;
`

const IconImg = styled.img`
  
  
`

function Header(){
  const history = useHistory()

  return(
    <HeaderMenu>
      {/* <ImgDiv> */}
        <ImgPtv src= {logoptv} className='ImgPtv'/>
      {/* </ImgDiv> */}
      <DivBttn>
        <Bttn onClick = {()=> history.push('/')}>HOME</Bttn>
        <Bttn onClick = {()=> history.push('/Mapa')}>UNIDADES</Bttn>
        <Bttn onClick = {()=> history.push('/Franqueados')}>SEJA UM FRANQUEADO</Bttn>
        <a href="#formSection"><BttnContact>CONTATO</BttnContact></a>
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

export default Header