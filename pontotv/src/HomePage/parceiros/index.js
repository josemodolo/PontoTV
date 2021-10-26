import ParcImg from '../../img/imghome/parceiros/parceiros.jpg'
import styled from "styled-components";

const ParcDiv = styled.div`
background:url(${ParcImg});
display: flex;
height: 84vh;
background-size: 100%;
background-repeat: no-repeat;
@media (max-width: 1440px){
    height: 76vh;
  }
`


function Parceiros () {
  return(    
    <ParcDiv></ParcDiv>
  )
}

export default Parceiros