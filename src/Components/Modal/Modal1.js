import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby"

import { graphql } from "gatsby"
import Img from "gatsby-image"

const WindowWrappFixed = styled.div ` 
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100%;

    justify-content: center;
    align-items: center;
    z-index: 10000;
    background-color: transparent;

    :focus{
        background-color:white;
    }

`

const WindowModal = styled.div ` 
    position: absolute;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    
    width: 90vw;
    height: 80vh;
    background-color: white;
    border-radius: 10px;
    z-index: 10000;

    @media (min-width: 768px) {
        height: 95vh;
        width: 50vw;
    }
`

const H1 = styled.h1 ` 
    font-size: 28px;
    font-weight: 500;
    padding-bottom: 10px;
    padding-left: 10px;
    color: #e67817;
    border-bottom: 1px solid lightgrey;
    text-align: left;
`
const Result = styled.div ` 
    position: absolute;

    /* padding: 20px; */
    padding: 20.2px;
    /* width: 130px; */
    width: 40%;
    border-radius: 0 8px 8px 0;
    background-color: #e67817;

    z-index: 20;

    transition: transform 0.25s ease;

    ::before{
        content: "";
        display: block;
        position: absolute;
        background-color: #e67817;
        /* width: 272px; */
        width: 152%;
        height: 59px;
        top: 0px;
        left: 0px;
        /* transform: translateX(-270px); */
        transform: translateX(-99%);
        transition: transform 0.25s ease;
        z-index: 1;
    }

    &:hover{
        /* transform: translateX(270px); */
        transform: translateX(150%);
        border-radius: 0 10px 0 0;

        & + div{
            /* transform: translateX(-200px); */
            transform: translateX(-100%);

            & + ul{
            opacity: 1;
            transform: translateX(0px);
            }
        }
    }

    @media (min-width: 768px){
        width: 130px;
        ::before{
            width: 272px;
            transform: translateX(-270px);
        }
        &:hover{
            transform: translateX(270px)
        }
    }
    
`

const ResolutDescription = styled.ul ` 
    transition: transform 0.25s ease,
                opacity 0.25s ease;
	padding: 40px;
	position: absolute;
	background-color: #00000051;
	color: #ffffff;
    top: 43px;
	left: 0px;
	/* width: 400px; */
    width: 100%;
	border-radius: 0 0 10px 0;
    z-index: 1;

    opacity: 0;
    /* transform: translateX(-270px); */
    transform: translateX(-60%);

    @media (min-width: 768px){
        width: 400px; 
        transform: translateX(-270px);
    }
`


const Benefit = styled.div ` 
    position: absolute;
    top: 62px;
    /* padding: 20px; */
    padding: 20.2px;
    /* width: 130px; */
    width: 40%;
    border-radius: 0 8px 8px 0;
    background-color: #F39C12;
    z-index: 20;
    transition: transform 0.25s ease;

    ::before{
        content: "";
        display: block;
        position: absolute;
        background-color: #F39C12;
        /* width: 272px; */
        width: 152%;
        height: 59px;
        top: 0px;
        left: 0px;
        /* transform: translateX(-270px); */
        transform: translateX(-99%);
        transition: transform 0.25s ease;
        z-index: 1;
    }

    :hover{
        /* transform: translateX(270px); */
        transform: translateX(150%);
        border-radius: 0 10px 0 0;
        /* ::before{
            transform: scaleX(3); 
        } */
        & + ul{
            & + ul{
            opacity: 1;
            transform: translateX(0px);
            }
        }
    }

    @media (min-width: 768px){
        width: 130px;
        ::before{
            width: 272px;
            transform: translateX(-270px);
        }
        &:hover{
            transform: translateX(270px)
        }
    }
`;

const BenefitDescription = styled(ResolutDescription)` 
    top: 105px;
` 

const Background = styled.div ` 
    position: relative;

`
const GatsbyImg = styled.div `
    padding-top: 20%;

    @media (min-width: 768px) {
        padding-top: 0px;
    }

`

const EndWrapper = styled.div ` 
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    height: 100%;
`

const ButtonWrapper = styled.div ` 
    display: flex;
    height: 75px;
    justify-content: flex-end;
    border-top: 1px solid lightgrey;
`
const Button = styled.button ` 
    display: flex;
    align-self:flex-end;
    justify-content: center;
    align-items: center;

    height: 25px;
    background-color: white;
    border: none;
    margin: 10px;
    padding: 20px;
    font-size: 16px;
    color: grey;
    
    outline: none;

    :hover{
        color: orange;
    }
`

const Modal = ( {ModalImg, data, resoluts, benefits, exitModal, device} ) => {

    const listResolut = resoluts.map((resolut) =>
        <li>{resolut}</li>
    )
    const listBenefits = benefits.map((benefit) =>
        <li>{benefit}</li>
    )

    return(
    <>
        <WindowWrappFixed onClick = {exitModal}>
        {/* <WindowModal onBlur ={exitModal}> */}
        <WindowModal onClick = {(e)=> {e.stopPropagation() }}>
            <H1>Swan Shaper</H1>
            <Background>
                <Result>Rezultaty</Result>
                <Benefit>Korzyści</Benefit>
                    <ResolutDescription>
                        {listResolut}
                    </ResolutDescription>

                    <BenefitDescription>
                        {listBenefits}
                    </BenefitDescription>
                <GatsbyImg>
                    <ModalImg data = {data} device = {device} />
                </GatsbyImg>     
            </Background>
            <EndWrapper>
                <ButtonWrapper> 
                    <Button onClick= {exitModal}>Zamknij</Button>
                </ButtonWrapper> 
            </EndWrapper>
        </WindowModal>
        </WindowWrappFixed>
    </>
    )
}

export default Modal;
