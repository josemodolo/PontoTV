import React from 'react'
import styled from 'styled-components'

const HeaderMenu = styled.header`
  border: 2px solid black;
  height: 10vh;
  background-color: black;
`

function Header(){
  return(
    <HeaderMenu></HeaderMenu>
  )
}

export default Header;