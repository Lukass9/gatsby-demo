import React from "react"
import styled, { keyframes } from "styled-components"

const TitleWrapp = styled.h1` 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;

${({theme})=>theme.media.desktop}{
  position: relative;
  margin-top: 0px;
  margin-bottom: 1%;
  ::before{
    content: "";
    position: absolute;
    /* top: -15%; */
    border-left: 100vw solid transparent;
    border-right: 0vw  solid transparent;
    border-top: 15vw solid #f2f2f2;

    filter: drop-shadow(50px 20px 25px rgba(0,0,0,.3));
    z-index: 0;
  }
}
`

const ShowTitle = keyframes ` 
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`
const ShowSubtitle = keyframes ` 
  0% {
    transform: translateX(-50%);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    filter: blur(0px);
    opacity: 1;
  }
`

const H1Title = styled.h1` 
font-family: Newsreader;
font-size: 6.2vw;
font-weight: 400;
letter-spacing: 0.1em;
text-align: center;
color: #E67817;
width: 70%;
margin-bottom: 0;
text-shadow: -2px 5px 9px #00000040;

animation: ${ShowTitle} 1s .5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

${({theme})=> theme.media.desktop}{
  font-family: Antic Slab;
  font-size: 3.5vw;
  white-space: nowrap;

  width: 100%;
  z-index: 5;
}

`
const H2Title = styled.h2` 
  font-family: Alegreya;
  font-size: 4vw;
  font-weight: 200;
  color: #E67817;

  animation: ${ShowSubtitle} 2s 1.5s ease-out both;

${({theme})=> theme.media.desktop}{
  font-size: 2vw;
  width: 75%;
  text-align: right;
  margin-top: 0px;
  margin-bottom: 0px;
  z-index: 5;
}
`


const IndexTitle = () => (
    <TitleWrapp>
        <H1Title>Profesjonalne studio modelowania sylwetki</H1Title>
        <H2Title>z nami zmienisz swoja figurę</H2Title>
    </TitleWrapp>
)

export default IndexTitle;