import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Sonic from '../../../img/sonic.png'
import Mario from '../../../img/mario.png'
import Dk from '../../../img/dk.png'
import Ptvc from '../../../img/ptvc.jpg'

const DivCarousel = styled.div`
  width: 100vw;
  
`

const ImgCarousel = styled.img`
  width: 100%;
`

class App extends Component {
  

  render () {
    
    return (
      <DivCarousel>
        <Carousel>           
          <ImgCarousel src= {Ptvc}/>
          <ImgCarousel src= {Ptvc}/>   
          <ImgCarousel src= {Ptvc}/>   
          <ImgCarousel src= {Ptvc}/>        
        </Carousel>
      </DivCarousel>      
    )
  }
}

export default App;