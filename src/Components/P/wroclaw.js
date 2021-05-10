import React from "react"
import styled from "styled-components";

const P = styled.p `
    color: ${({theme})=> theme.colors.orangeF};
    text-shadow: -2px 5px 5px rgb(0 0 0 / 25%);
    font-family: 'Aharoni', sans-serif ;
    letter-spacing: 0.06em;
    margin: 0;
    padding: 0.1vw 0;
    font-size: ${({size}) => size };
    padding-left: 2%;

    transform: scale(0);
	animation: pop-upW 0.45s forwards;

    &:nth-child(1){
        padding-left: ${({paddingFirstChild}) => paddingFirstChild};
        animation-delay: 0.05s;
    }
    &:nth-child(2){
        animation-delay: 0.1s;
    }
    &:nth-child(3){
        animation-delay: 0.15s;
    }
    &:nth-child(4){
        animation-delay: 0.2s;
    }
    &:nth-child(5){
        animation-delay: 0.25s;
    }
    &:nth-child(6){
        animation-delay: 0.3s;
    }
    &:nth-child(7){
        animation-delay: 0.35s;
    }

    @keyframes pop-upW {
	0% {
	  transform: scale(0) translateY(-10px);
	  opacity: 0;
	}
	80% {
	  transform: scale(1.2) translateY(-2px);
	  opacity: 0.6;
	}
	100% {
	  transform: scale(1) translateY(0px);
	  opacity: 1;
	}
  }
`

const Wroclaw = ({size, paddingFirstChild}) => (
    <>
        <P size={size} paddingFirstChild={paddingFirstChild} >W</P>
        <P size={size} paddingFirstChild={paddingFirstChild} >R</P>
        <P size={size} paddingFirstChild={paddingFirstChild} >O</P>
        <P size={size} paddingFirstChild={paddingFirstChild} >C</P>
        <P size={size} paddingFirstChild={paddingFirstChild} >L</P>
        <P size={size} paddingFirstChild={paddingFirstChild} >A</P>
        <P size={size} paddingFirstChild={paddingFirstChild} >W</P> 
    </>
)

export default Wroclaw;