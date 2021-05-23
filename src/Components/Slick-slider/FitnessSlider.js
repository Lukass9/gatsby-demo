import React, { Component } from "react";
import styled from "styled-components"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Swan from "../../images/devices/fitness/Swan.jpg"
import Vacu from "../../images/devices/fitness/Vacu.jpg"
import Roll from "../../images/devices/fitness/RollShaper.jpg"
import Limfo from "../../images/devices/wellness/Limfodrenaż.jpg"
import Elektro from "../../images/devices/wellness/Elektrostzmulacja.jpg"
import Sauna from "../../images/devices/wellness/sauna1.jpg"

import Price from "../Slick-slider/Cenyfitness"
import Slider from "react-slick";

const Slider2 = styled(Slider)`
  width: 100%;
`

const SwanImg = styled.img` 
  width: 100%;
  border-radius: 200px / 200px;
`

const Table = styled.table` 
  margin-top: 20px;
  width: 100%;
  border-spacing: 0px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
`
const TrGray = styled.tr ` 
  background-color: rgba(0,0,0,.05);
`
const Th = styled.th ` 
  border-top: 1px solid #dee2e6;
  padding: 20px;
`
const ThPrice = styled(Th) ` 
    display: none;
    @media (min-width: 600px) {
        display: block;
    }
`
const Td = styled.td ` 
  border-top: 1px solid #dee2e6;
  padding: 20px;
  text-align: center;
`
const TdPrice = styled(Td)` 
    display: none;
    @media (min-width: 600px) {
        display: block;
    }
`
const H1 = styled.h1 ` 
  color: #e67817;
` 

const S = styled.s `
  color: red;
`

// const SlickSlider = ({ data }) => {
class FitnessSlider extends Component{
  state = {
    activeSlide: 0,
  };
  render(){
    const settings = {

      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      focusOnSelect: true,
      speed: 600,
      beforeChange: (current, next)=> this.setState({activeSlide: next}),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }

    return (
      <>
        <Slider2 {...settings} >

          {/* <Img fixed ={data.Swan.childImageSharp.fixed} alt="Swan"/> */}
          <SwanImg src={Roll} />         
          <SwanImg src={Swan} />
          <SwanImg src={Vacu} />
          <SwanImg src={Elektro} />
          <SwanImg src={Limfo} />
          <SwanImg src={Sauna} />
          {/* <SwanImg src={Vacu}/> */}
          {/* <SwanImg src={Roll}/> */}

        </Slider2>

        <Table>
          <thead>
            <tr>
              <th colSpan = "4"> <H1>{Price[this.state.activeSlide][0]} </H1> </th>
            </tr>
            <TrGray>
              <Th>Wejścia</Th> <Th>Cena za zabieg</Th> <ThPrice>Cena</ThPrice> <Th>Cena pakietu </Th>
            </TrGray>
          </thead>
          <tbody>
            <tr>
              <Th>1</Th> <Td> {Price[this.state.activeSlide][1]} zł</Td> <TdPrice>{Price[this.state.activeSlide][2]} zł</TdPrice> <Td>{Price[this.state.activeSlide][3]} zł</Td>
            </tr>
            <TrGray>
              <Th>8</Th> <Td>{Price[this.state.activeSlide][4]} zł</Td> <TdPrice> <S>{Price[this.state.activeSlide][5]} zł</S></TdPrice><Td>{Price[this.state.activeSlide][6]} zł</Td>
            </TrGray>
            <tr>
              <Th>12</Th> <Td>{Price[this.state.activeSlide][7]} zł</Td> <TdPrice> <S>{Price[this.state.activeSlide][8]} zł</S></TdPrice><Td>{Price[this.state.activeSlide][9]} zł</Td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export const query = graphql`
query {
  Swan: file(relativePath: { eq: "devices/fitness/Swan.jpg" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  Vacu: file(relativePath: { eq: "devices/fitness/Vacu.jpg" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70){
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850 ) {
        ...GatsbyImageSharpFluid
      }
    }
  }


  Roll: file(relativePath: { eq: "devices/fitness/RollShaper.jpg" }) {
    childImageSharp {
        fixed(height:200, width:300, quality: 70){
        ...GatsbyImageSharpFixed
        }
        fluid(quality: 80, maxWidth: 850 ) {
          ...GatsbyImageSharpFluid
        }
    }
  }

  Elektro: file(relativePath: { eq: "devices/wellness/Elektrostzmulacja.jpg" }) {
    childImageSharp {
        fixed(height:200, width:300, quality: 70){
        ...GatsbyImageSharpFixed
        }
        fluid(quality: 80, maxWidth: 850 ) {
          ...GatsbyImageSharpFluid
        }
    }
  }

  Limfo: file(relativePath: { eq: "devices/wellness/Limfodrenaż.jpg" }) {
    childImageSharp {
        fixed(height:200, width:300, quality: 70){
        ...GatsbyImageSharpFixed
        }
        fluid(quality: 80, maxWidth: 850 ) {
          ...GatsbyImageSharpFluid
        }
    }
  }

  Sauna: file(relativePath: { eq: "devices/wellness/sauna.jpg" }) {
    childImageSharp {
        fixed(height:200, width:300, quality: 70){
        ...GatsbyImageSharpFixed
        }
        fluid(quality: 80, maxWidth: 850 ) {
          ...GatsbyImageSharpFluid
        }
    }
  }
}
`


export default FitnessSlider;