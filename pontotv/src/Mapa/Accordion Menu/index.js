import React, { useState } from 'react'
import styled from 'styled-components'
import {franchisees} from '../franchisees'
import { FranchiseCard } from '../../components'

const AccordionDiv = styled.div`
  width: 80vw;
  height: 150vw;
  position: absolute;
  overflow: auto;
`

const Title = styled.button`
  text-align: start;
  width: 100%;
  background-color: #0071c0;
  display: block;
  padding: 2vw;
  font-size: 5vw;
  color: white;
  cursor: pointer;
  border: 2px solid #365369;
  &:hover{
    background-color: #f9ae42;    
  }
  &:disabled{
    background-color: #365369;
    cursor: not-allowed;
  }
`

function AccordionItem({title, representantes}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Title disabled={representantes.length === 0} onClick={() => setIsOpen(!isOpen)}>{title}</Title>
      {isOpen && (
        <div>
          {representantes.map(representante => (
            <FranchiseCard data={representante}/>
          ))}
        </div>
      )}
    </div>
  )
}


function AccordionMenu (){
  return(
    <AccordionDiv>
      {franchisees.map(({estado, representantes})=>(
        <AccordionItem title={estado} representantes={representantes}/>
      ))}
    </AccordionDiv>
  )
}

export default AccordionMenu