import React from 'react'
import styled from 'styled-components'
import Favicon from './favicon.ico'
import Unidico from './unidico02.png'
import Unidicoman from './unidicoman.png'
import Whatsicon from './whatsicon.png'
import Instaicon from './instaicon.png'
import Faceico from './faceico.png'

const StateDiv = styled.div`
  background-color: #0071c0;
  border-radius: 5px;
  width: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const DescriptionDiv = styled.div`
  /* border: 1px solid red; */
  margin-top: 3vw;
`

const IconImg = styled.img `
  width: 1.3vw;
`

const Representantes = styled.span`
  font-size: 1.4vw;
  color: #ffb131;
  margin-right: 12vw;
  margin-top: 0.6vh;
`

const Estado = styled.span`
  font-size: 1.9vw;
`

/*second div*/
const Nome = styled.span`
  color: #ffb131;
  font-size: 1.8vw;
`

const Local = styled.p`
  
`

const Franqueado = styled.p`
  font-size: 1.4vw;
  margin-top: 0.6vh;
`

const Telefone = styled.p`
  font-size: 1.4vw;
  margin-top: 0.6vh;
`

const Facebook = styled.p`
  font-size: 1.4vw;
  margin-top: 0.6vh;
`

const Instagram = styled.p`
  font-size: 1.4vw;
  margin-top: 0.6vh;
`


const FranchiseCard = ({ representantes, estado, nome, local, franqueado, telefone, facebook, instagram }) => {
  return (
    <div style={{ padding: '8px', margin: '16px 0', color: 'white' }}>
      <StateDiv>
        <Representantes>{representantes}</Representantes>
        <Estado>{estado}</Estado>
      </StateDiv>
      <DescriptionDiv>    
        <IconImg src={Favicon}/> <Nome> &nbsp;{nome}</Nome>
        <p><IconImg src={Unidico}/> &nbsp;{local}</p>
        <Franqueado><IconImg src={Unidicoman}/> &nbsp;{franqueado}</Franqueado>
        <Telefone><IconImg src={Whatsicon}/> &nbsp;{telefone}</Telefone>
        <Facebook><IconImg src={Faceico}/> &nbsp;{facebook}</Facebook>
        <Instagram><IconImg src={Instaicon}/> &nbsp;{instagram}</Instagram>
      </DescriptionDiv>  
      
    </div>
  )
}

export default FranchiseCard