import * as React from "react"
import Layout from "../layout/Layout"
import styled from "styled-components"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import CennikBg from "../Components/BackgroundImg/header/CennikBg"
import H1 from "../Components/H1/H1"
import FitnessSlider from "../Components/Slick-slider/FitnessSlider"
import CosmSlider from "../Components/Slick-slider/CosmSlider"
import PackageSlider from "../Components/Slick-slider/packageSlider"

import WrappCircle2 from "../Components/ProductCircle/WrappCircle"
import {YoungBarley} from "../Components/ProductCircle/data"


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

    {/* <WrappCircle>
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
    </WrappCircle> */}

    <WrappCircle2 YoungBarley = {YoungBarley} img = {<Img fluid={data.Jeczmien.childImageSharp.fluid} />}/>
    <WrappCircle2 YoungBarley = {YoungBarley} img = {<Img fluid={data.BioSlim.childImageSharp.fluid} />}/>
 
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

  BioSlim: file(relativePath: { eq: "cosmetics/go-bio-slim.png" }) {
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

