import React from "react"
import styled from "styled-components"
import ArrowLeft from '../../../arrows/arrowimg/arrow-left.png'
import './style.css'

const ArrowL = styled.img`    
    width: 3.5vw;
    height: auto;
    @media (max-width: 490px){
        width: 6vw;
    }
`

const Container = styled.div`
    height: auto;
    padding-left: 9vw;
    @media (max-width: 490px){
        padding-left: 4vw;
        padding-top: 1vw;
    }
    
`

export default function ArrowsBlink2 () {
    return(
        <>
            <Container>
                <ArrowL className="Arrow1"src={ArrowLeft}></ArrowL>
                <ArrowL className="Arrow2"src={ArrowLeft}></ArrowL>
                <ArrowL className="Arrow3"src={ArrowLeft}></ArrowL>
            </Container>
        </>
    )
}