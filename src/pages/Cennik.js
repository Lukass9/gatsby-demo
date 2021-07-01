import * as React from "react"
import { Link } from "gatsby"
import Layout from "../layout/Layout"
import styled, { keyframes } from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import CennikBg from "../Components/BackgroundImg/header/CennikBg"
import H1 from "../Components/H1/H1"
import FitnessSlider from "../Components/Slick-slider/FitnessSlider"
import CosmSlider from "../Components/Slick-slider/CosmSlider"
import PackageSlider from "../Components/Slick-slider/PackageSlider"

import Circle from "../Components/ProductCircle/ProductCircle"
import Circle2 from "../Components/ProductCircle/ProductCircle2"
import ProductPrice from "../Components/ProductCircle/ProductPrice"
import ProductSlide from "../Components/ProductCircle/ProductSlide"

import PriceTag from "../images/entypo_price-tag.svg"

// import GatsbySlider from "../Components/Slick-slider/GatsbySlider"
// import "~slick-carousel/slick/slick.css"; 


const ExampleValue = styled.div` 
    width:100%;
    height: 1200px;
`

const WrappSlider = styled.div` 
  display: flex;
  /* background-color: grey; */
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Wrap = styled.div` 
  width: 80%;

  ${({theme})=> theme.media.tablet}{
    width: 70%;
  }
`

const WrappCircle = styled.div` 
  position: relative;
  z-index: 1;
`

const H1Product = styled.h1` 
  position: absolute;
  opacity: 0;
  left: 8vw;
  top: 8%;  
  color: #e67817;
  font-size: 20px;

  transition: transform .4s .4s,
              opacity .5s .3s;

  z-index: -1;

  ${({theme}) => theme.media.tablet}{
    font-size: 32px;
  }
`

const PProduct = styled.p ` 
  position: absolute;
  opacity:0;
  left: 8vw;
  top: 15vw;

  font-size: 14px;

  text-align: justify;
  width: 55vw;

  z-index: -1;

  ${({theme})=> theme.media.tablet}{
    font-size: 16px;
    top: 9vw;
    width: 35vw;
  }
`

const Pprice = styled.p ` 
  position: absolute;
  top: 2.2vw;
  left: 24.3vw;
  font-size: 1vw;
  opacity: 1;

  
  transform: scale(1) rotate(25deg);
  color: #e67817;
  transition: transform 1.6s,
              opacity 1.6s;

`

const CircleShape = styled.div ` 
  border-radius: 100%;
  width: 35vw;
  height: 35vw;
  float:left;
  shape-outside: circle(53% at -5px 39px);

  ${({theme})=> theme.media.tablet}{
    shape-outside: circle(19% at -5px 39px);
  }
`

const EndShape = styled.div ` 
        display: inline;

  background-color: black;
  width: 30%;
  height: 300px;
  float: left;
  shape-outside: polygon(0 20px, 0 0);
`
const cena = "169 zł";
const opis = "Młody jęczmień to bogaty w witaminy i minerały suplement w formie płynnej, składający się z bioaktywnego ekstraktu z dodatkiem soku z jabłek oraz ksylitolu. Jest produktem całkowicie naturalnym mającym na celu  przyspieszenie przemiany materii oraz detoksykację organizmu, co w znaczący sposób wpływa na spalanie  zbędnej tkanki tłusczowej. Najlepiej stosować w połączeniu z Go Clean.";

const Cennik = ({ data }) => (

  <Layout>
    <CennikBg />
    <H1 id = "scroll_fitwell">Stacje fitness & wellness</H1>
    <WrappSlider>
      <Wrap>
        <FitnessSlider />
      </Wrap>
    </WrappSlider>

    <H1 id = "scroll_cosm">Kosmetologia</H1>
    <WrappSlider>
      <Wrap>
        <CosmSlider />
      </Wrap>
    </WrappSlider>

    <H1 id = "scroll_pack">Pakiety</H1>
    <WrappSlider>
      <Wrap>
        <PackageSlider />
      </Wrap>
    </WrappSlider>

    <H1 id = "scroll_sup">Kosmetyki i suplementy</H1>
    <WrappCircle>
      <Circle>
        <Img fluid={data.Jeczmien.childImageSharp.fluid} ale="Jeczmien" />
      </Circle>
      <H1Product> Młody Jęczmień </H1Product>
      <PProduct>Młody jęczmień to bogaty w witaminy i minerały suplement w formie płynnej, składający się z bioaktywnego 
								ekstraktu z dodatkiem soku z jabłek oraz ksylitolu. Jest produktem całkowicie naturalnym mającym na celu 
								przyspieszenie przemiany materii oraz detoksykację organizmu, co w znaczący sposób wpływa na spalanie 
								zbędnej tkanki tłusczowej. Najlepiej stosować w połączeniu z Go Clean.
      </PProduct>

      <Pprice>122 zł</Pprice>
    </WrappCircle>

    <WrappCircle>
      <Circle2>
        <Img fluid={data.Jeczmien.childImageSharp.fluid} ale="Jeczmien" />
      </Circle2>
      <H1Product> Młody Jęczmień </H1Product>

      <ProductPrice>
        <img src = {PriceTag}/>
        <p> {cena} </p>
      </ProductPrice>

      <ProductSlide>
        <CircleShape/>
        <h1> Młody Jęczmień </h1>
        <p> {opis} </p>
      </ProductSlide>
    </WrappCircle>

    <WrappCircle>
      <Circle2>
        <Img fluid={data.Jeczmien.childImageSharp.fluid} alt="Jeczmien" />
      </Circle2>
      <H1Product> Młody Jęczmień </H1Product>

      <ProductPrice>
        <img src = {PriceTag}/>
        <p> {cena} </p>
      </ProductPrice>

      <ProductSlide>
        <CircleShape/>
        <h1> Młody Jęczmień </h1>
        <p> {opis} </p>
      </ProductSlide>
    </WrappCircle>

    <ExampleValue />
  </Layout>
)


export const query = graphql`
query {
  Jeczmien: file(relativePath: { eq: "cosmetics/mlody-jeczmien-bez-tla.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default Cennik

