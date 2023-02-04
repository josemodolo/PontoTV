import styled from "styled-components";
import ImgVenBg from './DownloadImg/baixarvenda1.png'
import ImgVenArrow from './DownloadImg/baixarvenda2.gif'
import ImgVenLink from './DownloadImg/baixarvenda3.png'
import FranquiaBg from '../DownloadFile/DownloadImg/mobile/vendas1.png'
import FranquiaArrow from '../DownloadFile/DownloadImg/mobile/franquia2.png'
import FranquiaBtn from '../DownloadFile/DownloadImg/mobile/franquia3.png'
import ArrowsBlink from "../arrows/arrowimg/ArrowR";
import ArrowsBlink2 from "../arrows/arrowimg/ArrowL";
import ButtonDownload from "./ButtonDown";


const DivDown = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 490px) {
    display: none;
  }
`

const ImgBg = styled.img`
  width: 100%;
  height: 100%;
`



const ImgLink = styled.img`  
  width: 100%;
`

const Hyperlink = styled.a`
 
`

//MOBILE
const DivDownMob = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column-reverse;
  @media (min-width: 490px) {
    display: none;
  }
`

const ImgBgMob = styled.img`
  width: 100%;
  height: 100%;
`

const ImgArrowMob = styled.img`
  position: absolute;
  width: 100%;
  height: 0 auto;
`

const ImgButtonMob = styled.img`
  width: 100%;
  height: 0 auto;
  position: absolute;
`

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

function DownloadFile (){
  return(
    <div>
      <DivDownMob>
        <ImgBgMob src={FranquiaBg} />
        <Container>
          <ArrowsBlink/>              
            <a href= "/midiaKitVenda.pdf" download="midiaKitVenda.pdf"><ButtonDownload/></a>
          <ArrowsBlink2/>
        </Container>  
      </DivDownMob>
      <DivDown>
        <ImgBg src={ImgVenBg}/>
        <Container>
          <ArrowsBlink/>              
            <a href= "/midiaKitVenda.pdf" download="midiaKitVenda.pdf"><ButtonDownload/></a>
          <ArrowsBlink2/>
        </Container>      
      </DivDown>
    </div>
  )
}

export default DownloadFile