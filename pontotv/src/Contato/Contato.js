import React from 'react'
import Header from '../HomePage/Components/header/header'
import styled from 'styled-components'

const CentralDiv = styled.div`
  border: 2px solid black;
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Inputs = styled.input`
  width: 25vw;
  border-radius: 9px;
  height: 3vh;
`
const InputDiv = styled.div`
  border: 1px solid black;
  
`

function Contato () {
  
  return(
    <div>
      <Header/>
      <CentralDiv>
          <h2>FORMULARIO</h2>
        <form action="pontotvpublicidade@gmail.com" method="post" enctype="text/plain"> 
            <h3>Nome</h3><br/>
            <input type="text" name="name"/><br/>
            <h3>E-Mail</h3><br/>
            <input type="text" name="mail"/><br/>
            <h3>Comentario</h3><br/>
            <input type="text" name="comment" size="50"/>
            <input type="submit" value="Send"/>
            <input type="reset" value="Reset"/>
        </form>
      </CentralDiv>
    </div>
  )
}

export default Contato;