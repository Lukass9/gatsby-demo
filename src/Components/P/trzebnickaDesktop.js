import React from "react"
import styled from "styled-components";

const P = styled.p `
    color: ${({theme})=> theme.colors.orangeF};
    text-shadow: -2px 5px 5px rgb(0 0 0 / 25%);
    font-family: 'Aharoni', sans-serif ;
    margin: 0;
    padding: 0.1vw 0;
    padding-left: 2%;
    letter-spacing: 0.25em;
    font-size: 3em;

    transform: scale(0) rotate(90deg) ;
	animation: pop-up 0.25s forwards;

    &:nth-child(1) {
    padding-left: 8%;
	animation-delay: 0.55s;
  }
    &:nth-child(2) {
	animation-delay: 0.6s;
  }
    &:nth-child(3) {
	animation-delay: 0.65s;
  }
    &:nth-child(4) {
	animation-delay: 0.7s;
  }
    &:nth-child(5) {
	animation-delay: 0.75s;
  }
    &:nth-child(6) {
	animation-delay: 0.8s;
  }
    &:nth-child(7) {
	animation-delay: 0.85s;
  }
    &:nth-child(8) {
	animation-delay: 0.9s;
  }
    &:nth-child(9) {
	animation-delay: 0.95s;
  }
    &:nth-child(10) {
	animation-delay: 1s;
  }
  @keyframes pop-up {
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

const TrzebDesk = () => (
    <>
        <P>t</P>
        <P>r</P>
        <P>z</P>
        <P>e</P>
        <P>b</P>
        <P>n</P>
        <P>i</P>
        <P>c</P>
        <P>k</P>
        <P>a</P>
    </>
)

export default TrzebDesk;