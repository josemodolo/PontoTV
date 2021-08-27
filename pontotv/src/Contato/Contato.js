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

function Contato () {
  
  return(
    <div>
      <Header/>
      <CentralDiv>
      <form>
        <label>
          Nome:
          <input type="text" name="name" />
        </label><br/>
        <label>
          EMAIL:
          <input type="email" name="name" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      </CentralDiv>
    </div>
  )
}

export default Contato;