import React, { useEffect } from "react"
import Layout from "../layout/Layout"
import styled from "styled-components"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "../Components/Header/indexTitle"
import Concept from "../Components/Body/Concept";
import WithUs from "../Components/Body/WithUs"
import AboutUs from "../Components/Body/AboutUs"
import Contact from "../Components/Body/Contact"

import GoogleMap from "../Components/Maps/Map"


gsap.registerPlugin(ScrollTrigger);


const WrappForSticky = styled.section` 
  position: relative;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  justify-content: center;
  padding: 0;
  overflow: hidden;
`

const GatsbyImgForSticky = styled(Img)` 
  position: absolute;
  left: -40%;
  width: 250vw;

  ${({ theme }) => theme.media.desktop}{
    left:-5%;
    width: 120vw;
  }
`

const Text = styled.p` 
  position: absolute;
  top: 0%;
  /* top: -20%; */
  /* left: 90vw; */
  font-size: 40vw;
  color: white;
  /* width: 10%;  */
  font-family: Aharoni;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0;
  white-space: nowrap;
  z-index: 100;

  ${({theme})=>theme.media.desktop}{
    font-size: 20vw;
    /* width: 200%;  */
  }
`

const MapWrapp = styled.div` 
  width: 100%;
  height: 40vh;
`

const IndexPage = ({ data }) => {
  useEffect(() => {
    const element = document.querySelector('.scroll');
    const element2 = document.querySelector('.scroll2')

    let StartEl1, EndEl1,
        X_StartEl2, X_endEl2;

    const media = window.matchMedia("(min-width: 1024px)");
    if (media.matches) {
      StartEl1 = 'top 20%'
      EndEl1 =  '900% top'
      X_StartEl2 = '-=50%'
      X_endEl2 = '0%'
    } else {
      StartEl1 = 'top 70%'
      EndEl1 =  '1000% top'
      X_StartEl2 = '0%'
      X_endEl2 = '-=5%'
    }
    
    gsap.fromTo(element,
      { x: '60%', top:'-10%'},
      {
        x: '-150%', top: "115%", duration: 8, scrollTrigger: {
          trigger: element,
          start: StartEl1,
          end: EndEl1,
          scrub: true,
          // markers: true,
        }
      })

      gsap.fromTo(element2,
        { x: X_StartEl2 },
        // { x: '=0%'},
        {
          x: X_endEl2, duration: 8, scrollTrigger: {
          // x: '-=5%', duration: 8, scrollTrigger: {
            trigger: element2,
            start: 'top bottom',  // top- wartosc elementu 
            // end: '800% top',  // bottom- wartosc okna window
            scrub: true,
            // markers: true,
          }
        })
    
  })

  return (
    <Layout>
      <Title />
      <Concept />
      <WithUs data={data} />

      <WrappForSticky>
        <Text className="scroll" data-animation='1'> #MIEJSCE KOBIET </Text>
        <GatsbyImgForSticky className="scroll2" fluid={data.Roll.childImageSharp.fluid} alt="roll" />
      </WrappForSticky>

      <AboutUs />
      <Contact />

      <MapWrapp>
        <GoogleMap />
      </MapWrapp>

    </Layout>
  )
}

export const query = graphql` 
query {
  Roll: file(relativePath: {eq: "indexRollShaper.jpg"}) {
    childImageSharp {
      fluid(fit: COVER, maxWidth: 1680){
        ...GatsbyImageSharpFluid
      }
    }
  }
  Limfo: file(relativePath: {eq: "Limfo_gazeta.jpg"}) {
    childImageSharp {
      fluid(fit: COVER, maxWidth: 1680){
        ...GatsbyImageSharpFluid
      }
    }
  }
  Swan: file(relativePath: {eq: "Swan.jpg"}) {
    childImageSharp {
      fluid(fit: COVER, maxWidth: 1680){
        ...GatsbyImageSharpFluid
      }
    }
  }
  Infra: file(relativePath: {eq: "Infra.jpg"}) {
    childImageSharp {
      fluid(fit: COVER, maxWidth: 1680){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default IndexPage