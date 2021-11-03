import react from "react";
import styled from "styled-components";
import ConstructionBg from './construction.jpg'
import { Header } from "../components";
import Footer from "../HomePage/footer";

const ConsDiv = styled.div`
  width: 100%;
  height: 100%;
`

const ConsImg = styled.img`
  width: 100%;
  height: 100%;
`

function Construction (){
  return(
    <ConsDiv>
      <Header />
      <ConsImg src={ConstructionBg}/>
      <Footer />
    </ConsDiv>
  )
}

export default Construction