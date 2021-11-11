import ParcImg from '../../img/imghome/parceiros/parceiros.jpg'
import styled from "styled-components";

const Partners = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Img = styled.img`
  height: 100%;
  width: 100%;
`

function Parceiros () {
  return(
    <Partners>
      <Img src = {ParcImg}/>
    </Partners>
  )
}

export default Parceiros