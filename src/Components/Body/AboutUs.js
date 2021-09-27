import React, { useEffect } from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import BackgroundButton from "../BackgroundImg/button/BackgroundButton"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FlexWrapp = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, .5fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px; 
/* 
     :nth-child(1){ grid-area: 1 / 3 / 2 / 6; }
     :nth-child(2){ grid-area: 2 / 3 / 3 / 4; }
     :nth-child(3){ grid-area: 2 / 4 / 3 / 5; } 
     :nth-child(4){ grid-area: 2 / 5 / 3 / 6; } 
     :nth-child(5){ grid-area: 3 / 3 / 4 / 4; } 
     :nth-child(6){ grid-area: 3 / 4 / 4 / 5; } 
     :nth-child(7){ grid-area: 3 / 5 / 4 / 6; }  */
  }
`
const H1Header = styled.h1` 
  /* position: absolute; */
  width: 100%;
  text-align: center;
  font-family: Aharoni;
  font-size: 12vw;
  color: #E67817;
  text-shadow: 0px 4px 4px #00000040;
  /* top: -2.2%; */
  z-index: 5;

@media screen and (min-width: 650px) {
    grid-area: 1 / 3 / 2 / 6;
    font-size: 5vw;

     /* :nth-child(1){ grid-area: 1 / 3 / 2 / 6; } */
     /* &:nth-child(0){ grid-area: 2 / 3 / 3 / 4; }
     &:nth-child(1){ grid-area: 2 / 4 / 3 / 5; } 
     &:nth-child(2){ grid-area: 2 / 5 / 3 / 6; } 
     &:nth-child(3){ grid-area: 3 / 3 / 4 / 4; } 
     &:nth-child(4){ grid-area: 3 / 4 / 4 / 5; } 
     &:nth-child(5){ grid-area: 3 / 5 / 4 / 6; }  */

    &+a{ grid-area: 2 / 3 / 3 / 4; } 
    &+a+a{ grid-area: 2 / 4 / 3 / 5; } 
    &+a+a+a{ grid-area: 2 / 5 / 3 / 6; } 
    &+a+a+a+a{ grid-area: 3 / 3 / 4 / 4; } 
    &+a+a+a+a+a{ grid-area: 3 / 4 / 4 / 5; } 
    &+a+a+a+a+a+a{ grid-area: 3 / 5 / 4 / 6; } 
    /* &+section{ grid-area: 2 / 3 / 3 / 4; } 
    &+section+section{ grid-area: 2 / 4 / 3 / 5; } 
    &+section+section+section{ grid-area: 2 / 5 / 3 / 6; } 
    &+section+section+section+section{ grid-area: 3 / 3 / 4 / 4; } 
    &+section+section+section+section+section{ grid-area: 3 / 4 / 4 / 5; } 
    &+section+section+section+section+section+section{ grid-area: 3 / 5 / 4 / 6; }  */
  }
`
const ButtonLink = styled(Link) ` 
  text-decoration: none;
`
const ButtonAnchorLink = styled(AnchorLink) ` 
  text-decoration: none;
`

const AboutUs = () => {

 useEffect(()=>{
    
    //  gsap.fromTo(".buttonAboutUs", {scale: 1.5, opacity: 0, }, 
    //  {scale: 1, opacity: 1, duration: 1, stagger: .3, scrollTrigger:{
    //    trigger: ".buttonAboutUs",
    //    start: 'top 60%',
    //    toggleActions: "restart pause resume pause"
    //   // markers: true,
    //  }})

     gsap.fromTo(".buttonAboutUs", 
     {y: -20, opacity: 0, }, 
     {y: 0, opacity: 1, duration: 1, stagger: .3, ease: "power3.InOut", scrollTrigger:{
       trigger: ".buttonAboutUs",
       start: 'top 60%',
      //  toggleActions: "play complete reverse reset"
      // markers: true,
     }})
   
 })
  
  return(
    <FlexWrapp className ="WrappAboutUs">
        <H1Header>Poznaj nas</H1Header>

        {/* <BackgroundButton as={Link} to="StacjeFitness" className ="buttonAboutUs" Bg="fitness"/> */}
        <ButtonLink to="/StacjeFitness"> <BackgroundButton className ="buttonAboutUs" Bg="fitness"/> </ButtonLink>
        <ButtonAnchorLink to="/StacjeFitness#scroll_wellnes"> <BackgroundButton className ="buttonAboutUs" Bg="wellnes"/> </ButtonAnchorLink>
        <ButtonLink to="/StacjeCosm"> <BackgroundButton className ="buttonAboutUs" Bg="cosm"/> </ButtonLink>
        <ButtonAnchorLink to="/Cennik#scroll_sup"> <BackgroundButton className ="buttonAboutUs" Bg="suplementy"/> </ButtonAnchorLink>
        <ButtonLink to="/Cennik"> <BackgroundButton className ="buttonAboutUs" Bg="cennik"/> </ButtonLink>
        <ButtonLink to="/Kontakt"> <BackgroundButton className ="buttonAboutUs" Bg="kontakt"/> </ButtonLink>
    </FlexWrapp>
)
}
export default AboutUs
