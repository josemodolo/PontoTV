import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Carimg1 from '../../../img/01.jpg'
import Carimg2 from '../../../img/carrosel02.jpg'
import Carimg3 from '../../../img/carrosel03.jpg'
import Carimg4 from '../../../img/carrosel04.jpg'
import Carimg5 from '../../../img/carrosel05.jpg'
import './carrosel.css'


const DivCarousel = styled.div`
  width: 100%;
  
`
const ImgCarousel = styled.img`
  width: 100vw;
  height: 50vh;
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


class App extends Component {
  
  
  render () {
    console.log(Carousel)
    return (
      <DivCarousel>
        <Whiteborderdiv>
          <Whiteborder></Whiteborder>
        </Whiteborderdiv>
        <Carousel enableAutoPlay
                  autoPlaySpeed={6000}
                  transitionMs={2000}                  
                  pagination={false}>           
          <ImgCarousel src= {Carimg1}/>
          <ImgCarousel src= {Carimg2}/>
          <ImgCarousel src= {Carimg3}/>
          <ImgCarousel src= {Carimg4}/>
          <ImgCarousel src= {Carimg5}/> 
                          
        </Carousel>
        <Whiteborderdiv>
          <Whiteborder></Whiteborder>
        </Whiteborderdiv>       
      </DivCarousel>      
    )
  }
}

export default App;