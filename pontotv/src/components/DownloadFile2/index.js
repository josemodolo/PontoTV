import styled from "styled-components";
import ImgVenBg from '../DownloadFile/DownloadImg/baixarfranquia1.png'
import ImgVenArrow from '../DownloadFile/DownloadImg/baixarvenda2.png'
import ImgVenLink from '../DownloadFile/DownloadImg/baixarvenda3.png'
import FranquiaBg from '../DownloadFile/DownloadImg/mobile/franquia1.png'
import FranquiaArrow from '../DownloadFile/DownloadImg/mobile/franquia2.png'
import FranquiaBtn from '../DownloadFile/DownloadImg/mobile/franquia3.png'

const DivDown = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row-reverse;
  @media only screen and (max-width: 490px) {
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
  flex-direction: column-reverse;
  @media only screen and (min-width: 490px) {
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



function DownloadFile2 (){
  return(
    <div>
      <DivDownMob>
        <ImgBgMob src={FranquiaBg}/>
        <ImgArrowMob src={FranquiaArrow}/>
        <a href="/midiaKitFranquia.pdf" download><ImgButtonMob src={FranquiaBtn}/></a>

      </DivDownMob>
    <DivDown>
      <ImgBg src={ImgVenBg}/>
      <ImgArrow src={ImgVenArrow}/>
      <a href="/midiaKitFranquia.pdf" download><ImgLink src ={ImgVenLink}/></a>
    </DivDown>
    </div>
    
  )
  
}

export default DownloadFile2