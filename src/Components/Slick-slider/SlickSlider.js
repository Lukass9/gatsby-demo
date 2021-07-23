import React, { Component } from "react";
import styled from "styled-components"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Swan from "../../images/devices/fitness/Swan.jpg"
import Vacu from "../../images/devices/fitness/Vacu.jpg"
import Roll from "../../images/devices/fitness/RollShaper.jpg"

import Slider from "react-slick";


const Slider2 = styled(Slider)`
  width: 95%;
`

const SwanImg = styled.img` 
  width: 100%;
`
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 3,
  focusOnSelect: true,
  speed: 600
}

const Table = styled.table ` 
  width: 100%;
`



const Th = styled.th ` 
  border: 1px solid black;
`

const Td = styled.td `
  border: 1px solid black;
`

const SlickSlider = ({ data }) => {
  return (
    <>
      <Slider2 {...settings} >

        {/* <Img fixed ={data.Swan.childImageSharp.fixed} alt="Swan"/> */}
        <SwanImg src={Swan} />
        <SwanImg src={Vacu} />
        <SwanImg src={Roll} />
        <SwanImg src={Swan} />
        <SwanImg src={Vacu} />
        <SwanImg src={Roll} />
        {/* <SwanImg src={Vacu}/> */}
        {/* <SwanImg src={Roll}/> */}
      </Slider2>

      
      <Table>
        <thead>
          <tr>
            <Th colspan="2"> Roll Shaper</Th>
          </tr>

          <tr>
            <Th>Przedmiot</Th> <Th>Nazwisko</Th> <Th>Ocena</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Th>Historia</Th> <Td>Nowak</Td> <Td>4+</Td>
          </tr>
          <tr>
            <Th>Historia</Th> <Td>Mazur</Td> <Td>3-</Td>
          </tr>
          <tr>
            <Th>Fizyka</Th> <Td>Nowak</Td> <Td>2</Td>
          </tr>
          <tr>
            <Th>Fizyka</Th> <Td>Mazur</Td> <Td>4</Td>
          </tr>
        </tbody>
      </Table>

    </>
  );
}

// export const query = graphql`
// query {
//   Swan: file(relativePath: { eq: "devices/fitness/Swan.jpg" }) {
//     childImageSharp {
//       fixed(height:200, width:300, quality: 70) {
//         ...GatsbyImageSharpFixed
//       }
//       fluid(quality: 80, maxWidth: 850) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }

//   Vacu: file(relativePath: { eq: "devices/fitness/Vacu.jpg" }) {
//     childImageSharp {
//       fixed(height:200, width:300, quality: 70){
//         ...GatsbyImageSharpFixed
//       }
//       fluid(quality: 80, maxWidth: 850 ) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }


//   Roll: file(relativePath: { eq: "devices/fitness/RollShaper.jpg" }) {
//     childImageSharp {
//         fixed(height:200, width:300, quality: 70){
//         ...GatsbyImageSharpFixed
//         }
//         fluid(quality: 80, maxWidth: 850 ) {
//           ...GatsbyImageSharpFluid
//         }
//     }
//   }

//   Elektro: file(relativePath: { eq: "devices/wellness/Elektrostzmulacja.jpg" }) {
//     childImageSharp {
//         fixed(height:200, width:300, quality: 70){
//         ...GatsbyImageSharpFixed
//         }
//         fluid(quality: 80, maxWidth: 850 ) {
//           ...GatsbyImageSharpFluid
//         }
//     }
//   }

//   Limfo: file(relativePath: { eq: "devices/wellness/Limfodrenaż.jpg" }) {
//     childImageSharp {
//         fixed(height:200, width:300, quality: 70){
//         ...GatsbyImageSharpFixed
//         }
//         fluid(quality: 80, maxWidth: 850 ) {
//           ...GatsbyImageSharpFluid
//         }
//     }
//   }

//   Sauna: file(relativePath: { eq: "devices/wellness/sauna.jpg" }) {
//     childImageSharp {
//         fixed(height:200, width:300, quality: 70){
//         ...GatsbyImageSharpFixed
//         }
//         fluid(quality: 80, maxWidth: 850 ) {
//           ...GatsbyImageSharpFluid
//         }
//     }
//   }
// }
// `


export default SlickSlider;