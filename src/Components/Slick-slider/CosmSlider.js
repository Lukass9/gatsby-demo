import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BeautyShaper from "../../images/devices/Kosmetologia/beauty_shaper.jpg"
import CaviShaoer from "../../images/devices/Kosmetologia/cavi_shape1.jpg"
import Hifu from "../../images/devices/Kosmetologia/hifu.jpg"
import Lipolaser from "../../images/devices/Kosmetologia/lipolaser.jpg"


import Price from "../Slick-slider/CenyCosm"


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
const TrGray = styled.tr` 
  background-color: rgba(0,0,0,.05);
`
const Th = styled.th` 
  border-top: 1px solid #dee2e6;
  padding: 20px;
`
const ThPrice = styled(Th)` 
    display: none;
    @media (min-width: 600px) {
        display: block;
    }
`
const Td = styled.td` 
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
const H1 = styled.h1` 
  color: #e67817;
`

const S = styled.s`
  color: red;
`

function RenderTable(props) {
  const Price = props.price;
  if (Price[props.activeSlide1][0] === "Hifu")
    return (

      <Table>
        <thead>
          <tr>
            <th colSpan="4"> <H1>{Price[props.activeSlide1][0]} </H1> </th>
          </tr>
          <TrGray>
            <Th>Miejsce zabiegowe</Th> <Th>Cena za zabieg</Th> 
          </TrGray>
        </thead>
        <tbody>


          <tr>
            <Th>Okolice oczu</Th> <Td> {Price[props.activeSlide1][1]} zł</Td> 
          </tr>
          <TrGray>
            <Th>Okolice oczu + czoło</Th> <Td>{Price[props.activeSlide1][2]} zł</Td> 
          </TrGray>
          <tr>
            <Th>policzek + linia żuchwy</Th> <Td>{Price[props.activeSlide1][3]} zł</Td> 
          </tr>
          <TrGray>
            <Th>podbródek</Th> <Td>{Price[props.activeSlide1][4]} zł</Td> 
          </TrGray>
          <tr>
            <Th>Podbródek + szyja</Th> <Td>{Price[props.activeSlide1][5]} zł</Td> 
          </tr>
          <TrGray>
            <Th>Cała twarz</Th> <Td>{Price[props.activeSlide1][6]} zł</Td> 
          </TrGray>
          <tr>
            <Th>Szyja</Th> <Td>{Price[props.activeSlide1][7]} zł</Td> 
          </tr>
          <TrGray>
            <Th>Dekolot</Th> <Td>{Price[props.activeSlide1][8]} zł</Td> 
          </TrGray>
          <tr>
            <Th>Brzuch</Th> <Td>{Price[props.activeSlide1][9]} zł</Td> 
          </tr>
          <TrGray>
            <Th>Cała talia</Th> <Td>{Price[props.activeSlide1][10]} zł</Td> 
          </TrGray>
          <tr>
            <Th>Wewnętrzna część ud</Th> <Td>{Price[props.activeSlide1][11]} zł</Td> 
          </tr>
          <TrGray>
            <Th>Uda nad kolanami</Th> <Td>{Price[props.activeSlide1][12]} zł</Td> 
          </TrGray>
          <tr>
            <Th>Pelikany</Th> <Td>{Price[props.activeSlide1][13]} zł</Td> 
          </tr>


        </tbody>
      </Table>



    )

  return (
    <Table>
      <thead>
        <tr>
          <th colSpan="4"> <H1>{Price[props.activeSlide1][0]} </H1> </th>
        </tr>
        <TrGray>
          <Th>Wejścia</Th> <Th>Cena za zabieg</Th> <ThPrice>Cena</ThPrice> <Th>Cena pakietu </Th>
        </TrGray>
      </thead>
      <tbody>
        <tr>
          <Th>1</Th> <Td> {Price[props.activeSlide1][1]} zł</Td> <TdPrice>{Price[props.activeSlide1][2]} zł</TdPrice> <Td>{Price[props.activeSlide1][3]} zł</Td>
        </tr>
        <TrGray>
          <Th>8</Th> <Td>{Price[props.activeSlide1][4]} zł</Td> <TdPrice> <S>{Price[props.activeSlide1][5]} zł</S></TdPrice><Td>{Price[props.activeSlide1][6]} zł</Td>
        </TrGray>
        <tr>
          <Th>12</Th> <Td>{Price[props.activeSlide1][7]} zł</Td> <TdPrice> <S>{Price[props.activeSlide1][8]} zł</S></TdPrice><Td>{Price[props.activeSlide1][9]} zł</Td>
        </tr>
      </tbody>
    </Table>

  )

}

// const SlickSlider = ({ data }) => {
class CosmSlider extends Component {
  state = {
    activeSlide: 0,
  };
  render() {
    const settings = {

      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      focusOnSelect: true,
      speed: 600,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
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

          <SwanImg src={BeautyShaper} />
          <SwanImg src={CaviShaoer} />
          <SwanImg src={Hifu} />
          <SwanImg src={Lipolaser} />

        </Slider2>

        <RenderTable activeSlide1={this.state.activeSlide}
          price={Price} />

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


export default CosmSlider;