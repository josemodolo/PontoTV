import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Carimg1 from '../../../img/imgcar.jpg'
import Carimg2 from '../../../img/imgcar2.jpg'


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
        </Carousel>
        <Whiteborderdiv>
          <Whiteborder></Whiteborder>
        </Whiteborderdiv>       
      </DivCarousel>      
    )
  }
}

export default App;