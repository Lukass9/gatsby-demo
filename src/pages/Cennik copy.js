// import * as React from "react"
// import Layout from "../layout/Layout"
// import styled, { keyframes } from "styled-components"

// import { graphql } from "gatsby"
// import Img from "gatsby-image"

// import CennikBg from "../Components/BackgroundImg/header/CennikBg"
// import H1 from "../Components/H1/H1"
// import FitnessSlider from "../Components/Slick-slider/FitnessSlider"
// import CosmSlider from "../Components/Slick-slider/CosmSlider"
// import PriceTag from "../images/entypo_price-tag.svg"
// // import GatsbySlider from "../Components/Slick-slider/GatsbySlider"
// // import "~slick-carousel/slick/slick.css"; 


// const ExampleValue = styled.div` 
//     width:100%;
//     height: 1200px;
//     /* background-image: url(${PriceTag}); */
// `

// const WrappSlider = styled.div` 
//   display: flex;
//   /* background-color: grey; */
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `

// const Wrap = styled.div` 
//   width: 70%;
// `

// const bonce = keyframes`
//    0% {
//     /* transform: scale3d(1, 1, 1); */
//     transform:  scaleX(1)
//                 scaleY(1);
//   }
//   30% {
//     /* transform: scale3d(1.25, 0.75, 1); */
//     transform:  scaleX(1.25)
//                 scaleY(0.75);
//   }
//   40% {
//     /* transform: scale3d(0.75, 1.25, 1); */
//     transform:  scaleX(0.75)
//                 scaleY(1.25);
//   }
//   50% {
//     /* transform: scale3d(1.15, 0.85, 1); */
//     transform:  scaleX(1.15)
//                 scaleY(0.85);
//   }
//   65% {
//     /* transform: scale3d(0.95, 1.05, 1); */
//     transform:  scaleX(0.95)
//                 scaleY(1.05);
//   }
//   75% {
//     /* transform: scale3d(1.05, 0.95, 1); */
//     transform:  scaleX(1.05)
//                 scaleY(0.95);
//   }
//   100% {
//     /* transform: scale3d(1, 1, 1); */
//     transform:  scaleX(1)
//                 scaleY(1);
//   }
// `




// const WrappCircle = styled.div` 
//   position: relative;
//   z-index: 1;
// `
// const Circle = styled.button` 
//   position: relative;
//   width: 13vw;
//   height: 13vw;
//   margin: 3vw 10vw;
//   border-radius: 100%;
//   background-color:#eee;
//   outline: none;
//   border: none;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

//   ::before{
//     content: " ";
//     display: block;
//     position: absolute;
//     left: 50%;
//     top: 15%;
//     width: 5%;
//     height: 50%;
//     background-color:#eee;
//     border-radius: 0 55% 5% 25%;
//     z-index: -1;
//     /* background-color: black; */
//     transition: height .4s ease-out,
//                 width .4s ease-out .4s;
//   }

//   ::after{
//     content: "";
//     background-image: url(${PriceTag});
//     background-repeat: no-repeat;
//     background-size: 8vw 8vw;
//     display: block;
//     position: absolute;
//     left: 80%;
//     top: -10%;
//     width: 8vw;
//     height: 8vw;
//     z-index: -1;

//     transition: transform 1.8s;
//   }

//   :hover{
//     ::before{
//         width: 50vw;
//         height: 18vw;

//         transition: width .4s ease-out,
//                     height .4s ease-out .4s;
//       }

//       ::after{
//         transform:  
//                     translateX(-80%)
//                     scale(0);
//       }
//     }

//   :focus{
//     border: 1px inset orange;
//     /* animation: ${bonce} 0.8s both; */
//     ::before{
//         width: 50vw;
//         height: 18vw;
//     }
//     ::after{
//         transform:  
//                     translateX(-80%)
//                     scale(0);
//     }
//   }

//   &:hover + h1{
//     transition: transform .4s .6s,
//               opacity .8s .6s;


//     transform: translateX(250px);
//     opacity: 1;
//   }

//   &:focus + h1{
//     transform: translateX(250px);
//     opacity: 1;
//   }

//   &:hover + h1 + p {
//     transition: transform .4s .8s,
//               opacity .8s .8s;
    
//     transform: translateX(250px);
//     opacity: 1;
//   }

//   &:focus + h1 + p {  
//     transform: translateX(250px);
//     opacity: 1;
//   }

//   &:hover + h1 + p + p {
//     transform: scale(0);
//     opacity:0;
//   }
//   &:focus + h1 + p + p {
//     transform: scale(0);
//     opacity:0;
//   }
// `

// const H1Product = styled.h1` 
//   position: absolute;
//   opacity: 0;
//   left: 8vw;
//   top: 25%;  
//   color: #e67817;

//   transition: transform .4s .4s,
//               opacity .5s .3s;

//   z-index: -1;
// `

// const PProduct = styled.p ` 
//   position: absolute;
//   opacity:0;
//   left: 8vw;
//   top: 10vw;

//   text-align: justify;
//   width: 35vw;

//   z-index: -1;
// `

// const Pprice = styled.p ` 
//   position: absolute;
//   top: 4.1vw;
//   left: 24.3vw;
//   font-size: 1vw;

//   transition: opacity .4s 1.5s;

//   transform: rotate(25deg);
//   color: #e67817;

// `
// const Cennik = ({ data }) => (

//   <Layout>
//     {/* <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
//             <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />   */}
//     <CennikBg />
//     <H1>Stacje fitness & wellness</H1>
//     <WrappSlider>
//       <Wrap>
//         <FitnessSlider />
//       </Wrap>
//     </WrappSlider>

//     <H1>Kosmetologia</H1>
//     <WrappSlider>
//       <Wrap>
//         <CosmSlider />
//       </Wrap>
//     </WrappSlider>

//     <H1>Pakiety</H1>
   
    

//     <H1>Suplementy</H1>
//     <WrappCircle>
//       <Circle>
//         <Img fluid={data.Jeczmien.childImageSharp.fluid} ale="Jeczmien" />
//       </Circle>
//       <H1Product> Młody Jęczmień </H1Product>
//       <PProduct>Młody jęczmień to bogaty w witaminy i minerały suplement w formie płynnej, składający się z bioaktywnego 
// 								ekstraktu z dodatkiem soku z jabłek oraz ksylitolu. Jest produktem całkowicie naturalnym mającym na celu 
// 								przyspieszenie przemiany materii oraz detoksykację organizmu, co w znaczący sposób wpływa na spalanie 
// 								zbędnej tkanki tłusczowej. Najlepiej stosować w połączeniu z Go Clean.
//       </PProduct>

//       <Pprice>122 zł</Pprice>
//     </WrappCircle>

//     <WrappCircle>
//       <Circle>
//         <Img fluid={data.Jeczmien.childImageSharp.fluid} ale="Jeczmien" />
//       </Circle>
//       <H1Product> Młody Jęczmień </H1Product>
//       <PProduct>Młody jęczmień to bogaty w witaminy i minerały suplement w formie płynnej, składający się z bioaktywnego 
// 								ekstraktu z dodatkiem soku z jabłek oraz ksylitolu. Jest produktem całkowicie naturalnym mającym na celu 
// 								przyspieszenie przemiany materii oraz detoksykację organizmu, co w znaczący sposób wpływa na spalanie 
// 								zbędnej tkanki tłusczowej. Najlepiej stosować w połączeniu z Go Clean.
//       </PProduct>
//       <Pprice>
//             69 zł
//       </Pprice>
//     </WrappCircle>

//     <ExampleValue />
//   </Layout>
// )


// export const query = graphql`
// query {
//   Jeczmien: file(relativePath: { eq: "suplements/mlody-jeczmien-bez-tla.png" }) {
//     childImageSharp {
//       fixed(height:200, width:300, quality: 70) {
//         ...GatsbyImageSharpFixed
//       }
//       fluid(quality: 80, maxWidth: 850) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
// `

// export default Cennik

