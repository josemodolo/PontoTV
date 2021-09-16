import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Carimg1 from '../../../img/carrosel01.jpg'
import Carimg2 from '../../../img/carrosel02.jpg'
import Carimg3 from '../../../img/carrosel03.jpg'
import Carimg4 from '../../../img/carrosel04.jpg'
import Carimg5 from '../../../img/carrosel05.jpg'


const DivCarousel = styled.div`
  width: 100vw;
  
`
const ImgCarousel = styled.img`
  width: 100%;
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
    
    return (
      <DivCarousel>
        <Whiteborderdiv>
          <Whiteborder></Whiteborder>
        </Whiteborderdiv>
        <Carousel>           
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