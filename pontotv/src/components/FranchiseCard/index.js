import React from 'react'
import styled from 'styled-components'
import Favicon from './favicon.ico'
import Unidico from './unidico02.png'
import Unidicoman from './unidicoman.png'
import Whatsicon from './whatsicon.png'
import Instaicon from './instaicon.png'
import Faceico from './faceico.png'
import Unidicowom from './unidicowom.png'

const StateDiv = styled.div`
  background-color: #0071c0;
  border-radius: 5px;
  width: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0.3vw;
`

const DescriptionDiv = styled.div`
  /* border: 1px solid red; */
  margin-top: 3vw;
`

const IconImg = styled.img `
  width: 1.3vw;
  display: inline;
`

const Representantes = styled.span`
  font-size: 1.4vw;
  color: #ffb131;
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
  font-size: 1vw;
  width: 20vw;
  display: flex;
  text-align: center;
`

const Franqueado = styled.p`
  font-size: 1.4vw;
  margin-top: 0.6vh;
`

const Franqueada = styled.p`
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

const Card = styled.div`
  color: white;
`

const IconDiv = styled.div`
  
`

const StyledLocal= styled.span`
  text-align: start;
  margin-left: 8px;
`


const FranchiseCard = ({ representantes, estado, nome, local, franqueado, franqueada, telefone, facebook, instagram }) => {
  return (
    <Card>
      {representantes &&(<StateDiv>
        <Representantes>{representantes}</Representantes>
        <Estado>{estado}</Estado>
      </StateDiv>)}
      <DescriptionDiv>    
        {nome &&(<Nome><IconImg src={Favicon}/>&nbsp;{nome}</Nome>)}
        {local &&(<Local><IconDiv><IconImg src={Unidico}/></IconDiv><StyledLocal>{local}</StyledLocal></Local>)}
        {franqueado &&(<Franqueado><IconImg src={Unidicoman}/> &nbsp;{franqueado}</Franqueado>)}
        {franqueada &&(<Franqueada><IconImg src={Unidicowom}/>&nbsp;{franqueada}</Franqueada>)}
        {telefone &&(<Telefone><IconImg src={Whatsicon}/> &nbsp;{telefone}</Telefone>)}
        {facebook &&(<Facebook><IconImg src={Faceico}/> &nbsp;{facebook}</Facebook>)}
        {instagram &&(<Instagram><IconImg src={Instaicon}/> &nbsp;{instagram}</Instagram>)}
      </DescriptionDiv>
    </Card>
  )
}

export default FranchiseCard