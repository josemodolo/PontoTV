import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Sonic from '../../../img/sonic.png'
import Mario from '../../../img/mario.png'
import Dk from '../../../img/dk.png'

const DivCarousel = styled.div`
  width: 100vw;
  
`

const ImgCarousel = styled.img`
  width: 200px;
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
          <ImgCarousel src= {Sonic}/>
          <ImgCarousel src= {Mario}/>
          <ImgCarousel src= {Dk}/>        
        </Carousel>
    
      </DivCarousel>      
    )
  }
}

export default App;