import ParcImg from '../../img/imghome/parceiros/parceiros.jpg'
import styled from "styled-components";

const Partners = styled.div`
  background:url(${ParcImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
  min-height: 570px;
`

function Parceiros () {
  return(
    <Partners />
  )
}

export default Parceiros