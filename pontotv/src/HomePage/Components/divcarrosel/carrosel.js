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
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }

  render () {
    const { items } = this.state;
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