import React, { Component, useState } from "react";

import styled from "styled-components"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BeautyShaper from "../../images/devices/Kosmetologia/beauty_shaper2.jpg"
import CaviShaoer from "../../images/devices/Kosmetologia/cavi_shape1.jpg"
import Hifu from "../../images/devices/Kosmetologia/hifu.jpg"
import Lipolaser from "../../images/devices/Kosmetologia/lipolaser.jpg"


import Price from "../Slick-slider/CenyCosm"
import { HifuData } from "../Slick-slider/data"
import { CaviShaperData } from "../Slick-slider/data"

import Slider from "react-slick";

const Slider2 = styled(Slider)`
  width: 100%;

  .slick-prev:before,
  .slick-next:before
  {
    color: #e67817;
  }

  .slick-slide.slick-center img {
    transform: scale(1.1) translateY(15px);
  }

  .slick-slide img
  {
    margin: 20px 0;
    transform: scale( 0.8);
    transition: transform .6s;
    display: block;
  }
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

const Select = styled.select` 
  border-radius: 5px;
  border-color: ${({theme})=>theme.colors.orangeF};
  padding: 5px;
  margin-bottom: 5px;
  text-align: center;
  background-color: white;
`


function RenderTable( {activeSlide1 ,price ,HifuData, CaviShaperData, caviSahaperVaule, onChange} ) {

  const Price = price;
  if (Price[activeSlide1][0] === "Hifu")
    return (
      <Table>
        <thead>
          <tr>
            <th colSpan="4"> <H1>{Price[activeSlide1][0]} </H1> </th>
          </tr>
          <TrGray>
            <Th>Miejsce zabiegowe</Th> <Th>Cena za zabieg</Th> 
          </TrGray>
        </thead>
        <tbody>

          {HifuData.treatmentPlace.map((el,i)=>{ 
            if(i % 2 == 0){
              return(
                  <tr>
                    <Th> {el} </Th> <Td> {HifuData.price[i]} zł</Td> 
                  </tr>
              )
            }
            else{
              return(
                <TrGray>
                  <Th> {el} </Th> <Td> {HifuData.price[i]} zł</Td> 
                </TrGray>
              )
            }
          })}
        </tbody>
      </Table>
    )

  else if (Price[activeSlide1][0] === "Cavi Shaper") {

    return (
      <Table>
        <thead>
          <tr>
            <th colSpan="4"> <H1>{Price[activeSlide1][0]} </H1> </th>
          </tr>
          <tr>
            <th colSpan="4">
              <Select className="deviceItem" onChange = {onChange}>
                {CaviShaperData.deviceItem.map((device, i) => {
                  return (<option value={i}> {device} </option>)
                })}
              </Select>
            </th>
          </tr>
          <TrGray>
            <Th>Wejścia</Th> <Th>Cena za zabieg</Th> <ThPrice>Cena</ThPrice> <Th>Cena pakietu </Th>
          </TrGray>
        </thead>
        <tbody>

          {
            // if(CaviShaperData.deviceItem[0] )
            CaviShaperData.deviceEntryForBody.map((el, i) => {

              let entry = el;
              if(caviSahaperVaule >= 2) entry = CaviShaperData.deviceEntryForFace[i];

              const priceForSingleEntry = CaviShaperData.price[caviSahaperVaule][i] / entry;
              const price = entry * CaviShaperData.price[caviSahaperVaule][0];

              
              function crossedOutPrice() {
                if (price == (priceForSingleEntry * entry)) {
                  return price;
                } else return (<S> {price} </S>)
              }

              if (i % 2 == 0) {
                return (
                  <tr>
                    <Th> {entry} </Th> <Td> {priceForSingleEntry} zł</Td> <TdPrice>{crossedOutPrice()} zł</TdPrice> <Td>{priceForSingleEntry * entry} zł</Td>
                  </tr>
                )
              }
              else {
                return (
                  <TrGray>
                    <Th> {entry} </Th> <Td> {priceForSingleEntry} zł</Td> <TdPrice>{crossedOutPrice()} zł</TdPrice> <Td>{priceForSingleEntry * entry} zł</Td>
                  </TrGray>
                )
              }
            })}
        </tbody>
      </Table>
    )
  }
  else
  return (
    <Table>
      <thead>
        <tr>
          <th colSpan="4"> <H1>{Price[activeSlide1][0]} </H1> </th>
        </tr>
        <TrGray>
          <Th>Wejścia</Th> <Th>Cena za zabieg</Th> <ThPrice>Cena</ThPrice> <Th>Cena pakietu </Th>
        </TrGray>
      </thead>
      <tbody>
        <tr>
          <Th>1</Th> <Td> {Price[activeSlide1][1]} zł</Td> <TdPrice>{Price[activeSlide1][2]} zł</TdPrice> <Td>{Price[activeSlide1][3]} zł</Td>
        </tr>
        <TrGray>
          <Th>8</Th> <Td>{Price[activeSlide1][4]} zł</Td> <TdPrice> <S>{Price[activeSlide1][5]} zł</S></TdPrice><Td>{Price[activeSlide1][6]} zł</Td>
        </TrGray>
        <tr>
          <Th>12</Th> <Td>{Price[activeSlide1][7]} zł</Td> <TdPrice> <S>{Price[activeSlide1][8]} zł</S></TdPrice><Td>{Price[activeSlide1][9]} zł</Td>
        </tr>
      </tbody>
    </Table>

  )
}

// const SlickSlider = ({ data }) => {
class CosmSlider extends Component {
  state = {
    activeSlide: 0,
    caviSahaperVaule: 0,
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

        <RenderTable 
          activeSlide1={this.state.activeSlide}
          price={Price} 
          HifuData={HifuData} 
          CaviShaperData={CaviShaperData} 
          caviSahaperVaule = {this.state.caviSahaperVaule}
          onChange = {(e)=> this.setState({caviSahaperVaule : e.target.value})}
          // onChange = {(e)=> console.log(e.target.value)}
        />

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