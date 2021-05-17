import React, {useEffect} from "react"
import styled from "styled-components"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Wrapp = styled.section` 
  position: relative;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  justify-content: center;
  padding-top: 10%;
  padding-bottom: 20%;

  ${({ theme }) => theme.media.desktop}{
    margin: 2% 0;
    padding: 0;
  }
`
const H1HeaderSticky = styled.h1`  
  position: absolute;
  top: -2.6%;

  width: 100%;
  text-align: center;
  font-family: Aharoni;
  font-size: 12vw;
  color: #E67817;
  text-shadow: 0px 4px 4px #00000040;
  /* top: -2.2%; */
  z-index: 5;

  ${({ theme }) => theme.media.desktop}{
    position: relative;
    margin: 0px;
    font-size: 5vw;
  }
`
const WrappGatsbyImgGrid = styled.div` 
  ${({ theme }) => theme.media.desktop}{
    display: grid;
    /* position: relative; */
    /* grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);  */

    /* grid-template-columns: repeat(21, 1fr);
    grid-template-rows: repeat(14, 1fr);  */

    grid-template-columns: 0.1fr 1.5fr 1.1fr 1fr 1.1fr 0.9fr 1fr 1.6fr 0.1fr;
    grid-template-rows: 0.9fr 1.1fr 0.9fr 1.1fr 0.7fr 0.6fr;
    grid-column-gap: 1%;
    grid-row-gap: 1%; 
  }
`
const GatsbyImg = styled(Img)` 
  margin-top: 0;
  width: 100vw;
  ${({ theme }) => theme.media.desktop}{
    width: auto;
    /* margin: 20px; */
    /* padding: 200px; */
    grid-area: 1 / 2 / 4 / 6;
    &+div     { grid-area: 1 / 6 / 6 / 9; }
    &+div+div { grid-area: 4 / 3 / 7 / 6; } 
    /* grid-area: 1 / 1 / 4 / 4;
    &+div{ grid-area: 1 / 4 / 5 / 7; } 
    &+div+div{ grid-area: 4 / 2 / 6 / 4; }  */
  }
`


const TriangleWrapp1 = styled.div` 
  position: absolute;
  top:21.35%;

  ${({ theme }) => theme.media.desktop}{
    width: 55%;
    top: 2.8%;
    left: -2.5%;
    transform: perspective(60vw) rotateY(60deg);
  }
`

const TriangleWrapp2 = styled.div` 
  position: absolute;
  top: 65.1%;

  ${({ theme }) => theme.media.desktop}{
    width: 30%;
    top: 48%;
    right: 8%;
    transform: rotate(38deg) scale(1.5);
  }
`

const TraingleP = styled.p`
  position: absolute;
  display: flex;
  /* overflow: hidden; */
  align-items: center;
  top: -10%;
  left: -5%;
  transform: rotate(11.2deg);
  /* background-color: grey; */
  width: 100vw;
  height: 100%;
  /* font-size: 12px; */
  font-size: 3.2vw;

  ${({ theme }) => theme.media.tablet}{
    left: 0%;
  }

  ${({ theme }) => theme.media.desktop}{
    font-size: 1.5vw;
    top: -20%;
    left: 0%;
    transform: rotate(0deg) 
    /* matrix3d(0.5,-0.06,0,0.0009,0.00,.9,0.00,0.00,0,0,1,0,-20,-185,0,1.3) */
    ;
  }
`

const Triangle = styled.div` 
  /* position: absolute; */
  border-left: 0vw solid transparent;
  border-right: 100vw  solid transparent;
  border-bottom: 20vw solid white;
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.media.desktop}{
    border-bottom: 20vw solid transparent;
  }

`
const TrangleRevers = styled.div` 
  border-left: 100vw solid transparent;
  border-right: 0vw  solid transparent;
  border-top: 20vw solid white;
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.media.desktop}{
  border-top: 20vw solid transparent;
  }
`
const B = styled.b` 
  font-weight: 400;
  color: black;
`

const EndPwhite = styled.p` 
  position: absolute;
  font-size: 5.4vw;
  bottom: 0.7%;
  right: 2%;
  width: 50vw;
  color: white;
  text-align: end;

  ${({ theme }) => theme.media.desktop}{
    font-size: 2vw;
    color: black;
    width: 18vw;
    text-align: start;
    right: 71vw;
    bottom: 12vw;
    text-shadow:2px 2px 3px #ffffff;
  }
`

  const WithUs = ({ data }) => {
  useEffect(()=> {
    const firstText = document.querySelector('.firstText');
    const secondText = document.querySelector('.secondText');
    const thirdText = document.querySelector('.thirdText');
    // firstText.forEach(element =>{
    //   gsap.fromTo(element.children, 
    //     {x: "-=1600", scale: 5, opacity: 0 },
    //     {x: 0, scale: 1, opacity: 1, stagger: .5, duration: 2, ease: "power3.inOut", scrollTrigger:{
    //       trigger: element,
    //       start: "-20% bottom",
    //       markers: true,
    //     } })
    // })
    gsap.fromTo(firstText.children, 
      {x: "-=2500", scale: 5, opacity: 0 },
      {x: 0, scale: 1, opacity: 1, stagger: .5, duration: 2, ease: "power3.inOut", scrollTrigger:{
        trigger: ".firstText",
        start: "-20% bottom",
        // markers: true,
      } })

    gsap.fromTo(secondText.children, 
      {x: "-=220", scale: .3, opacity: 0 },
      {x: 0, scale: 1, opacity: 1, stagger: .5, duration: 2, ease: "power3.inOut", scrollTrigger:{
        trigger: ".secondText",
        start: "50% bottom",
        // markers: true,
      } })
    
    gsap.fromTo(thirdText, 
      {y: -20, scale: 3, opacity: 0 },
      {y: 0, scale: 1, opacity: 1, duration: 1.8, ease: "power1.inOut", scrollTrigger:{
        trigger: ".thirdText",
        start: "80% bottom",
        // markers: true,
      } })

  })

  return(
    <Wrapp>
      <H1HeaderSticky>Z nami:</H1HeaderSticky>
      <WrappGatsbyImgGrid>
        <GatsbyImg fluid={data.Limfo.childImageSharp.fluid} alt="Limfo" />
        <GatsbyImg fluid={data.Swan.childImageSharp.fluid} alt="Swan" />
        <GatsbyImg fluid={data.Infra.childImageSharp.fluid} alt="Infra" />
      </WrappGatsbyImgGrid>

      <TriangleWrapp1>
        <Triangle />
        <TrangleRevers />
        <TraingleP>
          <ul className = "firstText">
            <li>pozbędziesz się celulitu</li>
            <li>zlikwidujesz uczucie ciężkich nóg</li>
            <li>zredukujesz obwody</li>
            <li>pozbędziesz się obrzęków</li>
          </ul>
        </TraingleP>
      </TriangleWrapp1>


      <TriangleWrapp2>
              <Triangle />
              <TrangleRevers />
              <TraingleP>
                  <ul className = "secondText">
                      <li>zrzucisz zbędne kilogramy</li>
                      <li>wymodelujesz swoje ciało</li>
                      <li>wzmocnisz mięśnie</li>
                  </ul>
              </TraingleP>
          </TriangleWrapp2>
      <EndPwhite className = "thirdText"> pozbędziesz się tkanki tłuszczowej oraz celulitu z <B>trudno dostępnych miejsc</B> </EndPwhite>

    </Wrapp>
  )
}

export default WithUs;