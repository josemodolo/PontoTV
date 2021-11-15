import React, { useRef } from 'react'
import ReactCarousel from 'react-elastic-carousel'
import styled from 'styled-components'
import Carimg1 from '../../../img/carrosel01.jpg'
import Carimg2 from '../../../img/carrosel02.jpg'
import Carimg3 from '../../../img/carrosel03.jpg'
import Carimg4 from '../../../img/carrosel04.jpg'
import Carimg5 from '../../../img/carrosel05.jpg'

const DivCarousel = styled.div`
  width: 100%;
  position: relative;
  & .rec-arrow {
    position: absolute;
   // height: 100%;
    z-index: 1;
    box-shadow: none;
    border-radius: 0;
    background: transparent;
    & :hover:enabled, :focus:enabled, :hover, :focus {
      box-shadow: none;
    }
  }
  & .rec-arrow-left {
    left: 0px;
    & :hover:enabled, :focus:enabled, :hover, :focus {
      background: linear-gradient(90deg, #0072c0d2, #0072c098, #0072c000);
    }
  }
  & .rec-arrow-right {
    right: 0px;
    & :hover:enabled, :focus:enabled, :hover, :focus {
      background: linear-gradient(90deg, #0072c000, #0072c098, #0072c0d2);
    }
  }
  & .rec-slider-container {
    margin: 0;
  }
`
const ImgCarousel = styled.img`
  width: 100%;
  height: 100%vh;
    @media (max-width: 767px){
      width: 100%;
      height: 20vh;
    }
`

const Whiteborder = styled.div`
  width: 95vw;
  background-color: white;
  border-radius: 50px;
  height: 3px;
  border: 1px solid black;
`

const Whiteborderdiv = styled.div`
  display: flex;
  justify-content: center;
`

const Carousel = () => {
  const carouselRef = useRef(null)
  let resetTimeout

  return (
    <DivCarousel>
      <Whiteborderdiv>
        <Whiteborder>
        </Whiteborder>
      </Whiteborderdiv>
      <ReactCarousel
        ref={carouselRef}
        enableAutoPlay
        emulateTouch
        autoPlaySpeed={4000}
        pagination={false}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout)
          if (index + 1 === 5) {
             resetTimeout = setTimeout(() => {
                carouselRef?.current?.goTo(0)
            }, 3000)
          }
     }}
      >
        <ImgCarousel src= {Carimg1}/>
        <ImgCarousel src= {Carimg2}/>
        <ImgCarousel src= {Carimg3}/>
        <ImgCarousel src= {Carimg4}/>
        <ImgCarousel src= {Carimg5}/>
      </ReactCarousel>
      <Whiteborderdiv>
      <Whiteborder></Whiteborder>
      </Whiteborderdiv>
    </DivCarousel>
  )
}

export default Carousel