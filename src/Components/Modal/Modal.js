import * as React from "react"
import styled from "styled-components";
import { Link } from "gatsby"

import { graphql } from "gatsby"
import Img from "gatsby-image"

const WindowWrappFixed = styled.div ` 
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
    z-index: 100000;
    background-color: transparent;
`

const WindowModal = styled.div ` 
    position: absolute;
    display: grid;
    grid-template-columns:1fr 12fr 1fr;
    grid-template-rows: repeat(12, 1fr);
    row-gap: 2px;
    
    width: 90vw;
    height: 80vh;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 10px;
    z-index: 100000;

    @media (min-width: 768px) {
        height: 95vh;
        width: 75vw;
    }
`

const Button = styled.button ` 
    grid-column: 3;
    grid-row: 12;

    display: flex;
    justify-content: center;
    align-items: center;
    /* width: auto; */
    height: 25px;
    background-color: orange;
    color: white;
    border-radius: 10px;
    margin: 10px;

    outline: none;

`
const H1 = styled.h1 ` 
    grid-column: 1/4;
    font-size: 28px;
    font-weight: 500;
    padding-bottom: 10px;
    padding-left: 10px;
    color: #e67817;
    border-bottom: 1px solid lightgrey;
    text-align: left;
`
const Result = styled.div ` 
    grid-column: 1;
    grid-row: 2;
    justify-self: start;

    padding: 20px;
    border-radius: 0 5px 5px 0;
    background-color: #e67817;

`

const Benefit = styled.div ` 
    grid-column: 1;
    grid-row: 3;
    justify-self: start;

    padding: 20px;
    border-radius: 0 5px 5px 0;
    background-color: #F39C12;
    
`


// const Benefit = styled(Result) ` 
//     grid-row: 3;

//     background-color: #F39C12;
    
// `
const Background = styled.div ` 

    /* background-image: ${props => props.gatsbyImg} ; */
    grid-column:1/4;
    grid-row: 4/11;
    max-width: 900px;

    @media (min-width: 768px) {
        grid-column:2;
        grid-row: 2/11;
    }
`

const Modal = ( {data} ) => {
    const gatsbyImg = <Img fluid = {data.Swan.childImageSharp.fluid} alt="Swan"/> 

    return(
    <>
        <WindowWrappFixed> 
        <WindowModal>
            <H1>Swan Shaper</H1>
            <Background img = {gatsbyImg}>
                <Img fluid = {data.Swan.childImageSharp.fluid} alt="Swan"/> 
            </Background>
            <Result>Rezultaty</Result>
            <Benefit>Korzyści</Benefit>
            <Button>Zamknij</Button>
        </WindowModal>
        </WindowWrappFixed>
    </>
    )
}

export default Modal;
