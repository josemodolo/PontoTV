import React, {useState, useEffect} from "react"
import styled, { keyframes } from "styled-components"
import ArrowRight from '../../../arrows/arrowimg/arrow-right.png'
import './style.css'

const ArrowR = styled.img`    
    width: 3.5vw;
    height: auto;
    @media (max-width: 490px){
        width: 6vw;
    }
`

const Container = styled.div`
    height: auto;
    padding-right: 9vw;
    @media (max-width: 490px){
        padding-right: 4vw;
        padding-top: 1vw;
    }    
`



export default function ArrowsBlink () {

    // const [showArrow1, setShowArrow1] = useState (false)
    // const [showArrow2, setShowArrow2] = useState (false)
    // const [showArrow3, setShowArrow3] = useState (false)

    // useEffect(()=>{
    //     const timeout = setInterval(() =>
    //     setShowArrow1(!showArrow1),showArrow1?3000:1000)

    //     return() => clearInterval(timeout)},[showArrow1])

    // useEffect(()=>{
    //     const timeout = setInterval(()=>
    //     setShowArrow2(!showArrow2),2000)

    //     return()=> clearInterval(timeout)},[showArrow2])

    // useEffect(()=>{
    //     const timeout = setInterval(()=>
    //     setShowArrow3(!showArrow3),1000)

    //     return()=> clearInterval(timeout)},[showArrow3])    

    

    return(
        <>
            <Container>
                <ArrowR className="Arrow3" src={ArrowRight}></ArrowR>
                <ArrowR className="Arrow2"src={ArrowRight}></ArrowR>
                <ArrowR className="Arrow1"src={ArrowRight}></ArrowR>
            </Container>
        </>
    )
}