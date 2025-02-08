import React from 'react'
import styled from 'styled-components'
import Favicon from './favicon.ico'
import Unidico from './unidico02.png'
import Unidicoman from './unidicoman.png'
import Whatsicon from './whatsicon.png'
import Instaicon from './instaicon.png'
import Faceico from './faceico.png'
import Unidicowom from './unidicowom.png'

const DescriptionDiv = styled.div`
  margin-top: 3vw;
  @media (max-width: 490px){
    margin-bottom: 10vw ;
  }
  
`

const IconImg = styled.img `  
  width: 2vw;
  height: 2vw;
  @media (max-width: 490px){
    width: 4vw;
    height: 4vw;
  }
`

/*second div*/
const Nome = styled.div`
  display: flex;
  align-items: center;
  color: #ffb131;
  font-size: 2.1vw;
  font-family:"GilroyHeavy";
  @media (max-width: 490px){
    font-size: 5vw;
  }
`

const Franqueado = styled.div`
  display: flex;
  font-size: 1.7vw;
  font-weight: bolder;
  margin-top: 0.6vh;
  @media (max-width: 490px){
    font-size: 4vw;
  }
`

const Franqueada = styled.div`
  display: flex;
  font-size: 1.7vw;
  font-weight: bolder;
  margin-top: 0.2vw;
  @media (max-width: 490px){
    font-size: 4vw;
  }
`

const Telefone = styled.div`
  font-size: 1.7vw;
  font-weight: bolder;
  margin-top: 0.6vh;
  @media (max-width: 490px){
    font-size: 4vw;
  }
`

const Facebook = styled.div`
  display: flex;
  alignt-items: center;
  font-size: 1.7vw;
  font-weight: bolder;
  margin-top: 0.6vh;
  @media (max-width: 490px){
    font-size: 4vw;
  }
`

const Instagram = styled.div`
  display: flex;
  font-size: 1.7vw;
  font-weight: bolder;
  margin-top: 0.6vh;
  @media (max-width: 490px){
    font-size: 4vw;
  }
`

const Card = styled.div`
  display: flex;
  align-items: center; 
  color: white;  
`

const StyledLocal= styled.span`
  font-size: 1.1vw;
  text-align: start;
  margin-left: 1.3vw;
  @media (max-width: 490px){
    font-size: 2.6vw;
    margin-left: 3vw;
  }  
`

const FranchiseCard = ({ 
  data: { 
    nome,
    local, 
    franqueado, 
    franqueada, 
    telefone, 
    facebook, 
    instagram 
  }
}) => {
  return (
    <Card>
      <DescriptionDiv>    
        {nome &&(<Nome><IconImg src={Favicon}/>&nbsp;&nbsp;&nbsp;{nome}</Nome>)}
        {local &&(<div style={{display: 'flex'}}><IconImg src={Unidico}/><StyledLocal>{local}</StyledLocal></div>)}
        {franqueado &&(<Franqueado><IconImg src={Unidicoman}/> &nbsp;&nbsp;{franqueado}</Franqueado>)}
        {franqueada &&(<Franqueada><IconImg src={Unidicowom}/>&nbsp;&nbsp;{franqueada}</Franqueada>)}
        {telefone &&(<Telefone><IconImg src={Whatsicon}/> &nbsp;{telefone}</Telefone>)}
        {facebook &&(<Facebook><IconImg src={Faceico}/> &nbsp;&nbsp;{facebook}</Facebook>)}
        {instagram &&(<Instagram><IconImg src={Instaicon}/> &nbsp;&nbsp;{instagram}</Instagram>)}
      </DescriptionDiv>
    </Card>
  )
}

export default FranchiseCard