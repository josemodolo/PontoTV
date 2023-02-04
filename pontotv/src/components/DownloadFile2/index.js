import styled from "styled-components";
import ImgVenBg from '../DownloadFile/DownloadImg/baixarfranquia1.png'
import ImgVenArrow from '../DownloadFile/DownloadImg/baixarvenda2.gif'
import ImgVenLink from '../DownloadFile/DownloadImg/baixarvenda3.png'
import FranquiaBg from '../DownloadFile/DownloadImg/mobile/franquia1.png'
import FranquiaArrow from '../DownloadFile/DownloadImg/mobile/franquia2.png'
import FranquiaBtn from '../DownloadFile/DownloadImg/mobile/franquia3.png'
import ArrowsBlink2 from "../../components/arrows/arrowimg/ArrowL/index";
import ArrowsBlink from "../../components/arrows/arrowimg/ArrowR/index";
import ButtonDownload from "../DownloadFile/ButtonDown/index";

const DivDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: row-reverse;
  @media (max-width: 490px) {
    display: none;
  }
`

const ImgBg = styled.img`
  width: 100%;
  height: 100%;
`

const ImgArrow = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
`

const ImgLink = styled.img`
  display: flex;
  position: absolute;
  width: 100%;
  height: auto;
`

//MOBILE
const DivDownMob = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
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



function DownloadFile2 (){
  return(
    <div>
      <DivDownMob>
        <ImgBgMob src={FranquiaBg}/>
        <Container>
          <ArrowsBlink/>           
            <a href="/midiaKitFranquia.pdf" download="midiaKitFranquia.pdf"><ButtonDownload src ={ImgVenLink}/></a>
          <ArrowsBlink2/>
      </Container> 
      </DivDownMob>
    <DivDown>
    <ImgBg src={ImgVenBg}/>     
      <Container>
        <ArrowsBlink/>           
        <a href="/midiaKitFranquia.pdf" download="midiaKitFranquia.pdf"><ButtonDownload src ={ImgVenLink}/></a>
        <ArrowsBlink2/>
      </Container>      
    </DivDown>
    </div>
    
  )
  
}

export default DownloadFile2