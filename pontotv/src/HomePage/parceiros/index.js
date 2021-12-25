import ParcImg from '../../img/imghome/parceiros/parceiros.jpg'
import styled from "styled-components";
import ParMob from '../../img/imgMobileHome/parceiros.png'

const Partners = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Img = styled.img`
  height: 100%;
  width: 100%;
  @media (max-width: 490px){
    display: none;
  }
`

const ImgMob = styled.img`
  width: 100%;
  height: 100%;
  @media (min-width: 490px){
    width: 100%;
    height: 100%;
  }
  @media (min-width: 490px){
   display: none ;
  }
`

function Parceiros () {
  return(
    <div>
      <Partners>
      <Img src = {ParcImg}/>
    </Partners><Partners>
      <ImgMob src = {ParMob}/>
    </Partners>
    </div>
    
  )
}

export default Parceiros