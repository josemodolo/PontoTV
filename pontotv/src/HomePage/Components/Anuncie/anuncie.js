import react from "react";
import styled from "styled-components";
import ImgAnuncie from '../../../img/imghome/anuncie/anuncie.jpg'

const DivAnuncie = styled.div`
  background:url(${ImgAnuncie});
  display: flex;
  align-items: center;
  justify-content: center;
  height: 63vh;
  background-size: 100%;
  background-repeat: no-repeat;
`

function Anuncie (){
  return(
    <DivAnuncie>      
    </DivAnuncie>
  )
}

export default Anuncie;