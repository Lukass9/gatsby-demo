import React, { useState } from "react";
import {Link} from "gatsby" 
import Layout from "../layout/Layout"
import styled from "styled-components"
import Modal from "../Components/Modal/Modal1"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import H1 from "../Components/H1/H1"

// const H1 = styled.h1 ` 
//     width: 100%;
//     background-color: #f8f9fa;
//     padding: 20px;

//     text-align: center;
//     font-size: 2.5rem;
//     font-weight: 500;
//     color: #e67817;
// `

const PhotoWrapp = styled.div ` 
    display: flex;
    flex-flow: column;
    align-items: center;
`

const DescribeDevice = styled.div `
  margin-bottom: 20px;
  
  ${({theme}) => theme.media.tablet}{
      padding: 0 15%;
    }
`

const H2 = styled.h2 ` 
    font-size: 1.5rem;
    font-weight: 500;
    color: #e67817;
`
const H2Right = styled(H2) ` 
  text-align: end;
`
const GatsbyImg = styled(Img) ` 
  border-radius: 50%;
  float: left;
  shape-outside: ellipse(150px 100px at 50% 50%);
  transition: transform 0.5s;
  
  ${({theme}) => theme.media.tablet}{
    ${DescribeDevice}:hover &{
      transform: scale(1.2)  translateX(-25px);
    }
  }

 
`
const GatsbyImgRight = styled(GatsbyImg) ` 
  float: right;


  ${({theme}) => theme.media.tablet}{
    ${DescribeDevice}:hover &{
      transform: scale(1.2)  translateX(25px);
    }
  }


`
// const ImgSwan = styled(GatsbyImg) ` 
//   display: block;
//   margin:0;
//   shape-outside: polygon(269px 57px, 71.17% 16.06%, 51.58% 10.42%, 49.02% 40.84%, 23.73% 30.6%, 23.21% 41.04%, 28.14% 57.06%, 25.39% 78.86%, 104px 212px, 55.08% 81.62%, 75.69% 74.15%, 73.98% 60.98%, 73.11% 51.86%, 271px 90px);
//   z-index: 1;
// `

const P = styled.p ` 
  padding: 0px 20px;
  text-align: justify;
`

const Wrapp = styled.div ` 

  filter: ${({isOpen}) => isOpen? "brightness(45%) blur(3px)" : "blur(0px)" };
`

const SwanResoluts =  [
  "Swan",
  "dogłębnie odżywiona i odbudowana skóra",
  "likwidacja cellulitu",
  "sprężyste i jędrne ciało",
  "wymodelowana sylwetka",
  "zwiększona wydajność organizmu",
  "zwiększona odporność na infekcje"
]

const SwanBenefits = [
  "Swan",
  "jędrna, idealnie wygładzona skóra",
  "idealnie wyrzeźbiona sylwetka",
  "intensywne spalanie tkanki tłuszczowej",
  "redukcja cellulitu"
  ]

const VacuResoluts =  [
  "Vacu",
  "dogłębnie odżywiona i odbudowana skóra",
  "likwidacja cellulitu",
  "sprężyste i jędrne ciało",
  "wymodelowana sylwetka",
  "zwiększona wydajność organizmu",
  "zwiększona odporność na infekcje"
]

const VacuBenefits = [
  "Vacu",
  "jędrna, idealnie wygładzona skóra",
  "idealnie wyrzeźbiona sylwetka",
  "intensywne spalanie tkanki tłuszczowej",
  "redukcja cellulitu"
  ]

const RollResoluts =  [
  "Roll",
  "dogłębnie odżywiona i odbudowana skóra",
  "likwidacja cellulitu",
  "sprężyste i jędrne ciało",
  "wymodelowana sylwetka",
  "zwiększona wydajność organizmu",
  "zwiększona odporność na infekcje"
  ]

const RollBenefits = [
  "Roll",
  "jędrna, idealnie wygładzona skóra",
  "idealnie wyrzeźbiona sylwetka",
  "intensywne spalanie tkanki tłuszczowej",
  "redukcja cellulitu"
  ]

const ElektroResoluts =  [
  "Elektro",
  "dogłębnie odżywiona i odbudowana skóra",
  "likwidacja cellulitu",
  "sprężyste i jędrne ciało",
  "wymodelowana sylwetka",
  "zwiększona wydajność organizmu",
  "zwiększona odporność na infekcje"
  ]

const ElektroBenefits = [
  "Elektro",
  "jędrna, idealnie wygładzona skóra",
  "idealnie wyrzeźbiona sylwetka",
  "intensywne spalanie tkanki tłuszczowej",
  "redukcja cellulitu"
  ]

const LimfoResoluts =  [
  "Limfo",
  "dogłębnie odżywiona i odbudowana skóra",
  "likwidacja cellulitu",
  "sprężyste i jędrne ciało",
  "wymodelowana sylwetka",
  "zwiększona wydajność organizmu",
  "zwiększona odporność na infekcje"
  ]

const LimfoBenefits = [
  "Limfo",
  "jędrna, idealnie wygładzona skóra",
  "idealnie wyrzeźbiona sylwetka",
  "intensywne spalanie tkanki tłuszczowej",
  "redukcja cellulitu"
  ]

const SaunaResoluts =  [
  "Sauna",
  "dogłębnie odżywiona i odbudowana skóra",
  "likwidacja cellulitu",
  "sprężyste i jędrne ciało",
  "wymodelowana sylwetka",
  "zwiększona wydajność organizmu",
  "zwiększona odporność na infekcje"
  ]

const SaunaBenefits = [
  "Sauna",
  "jędrna, idealnie wygładzona skóra",
  "idealnie wyrzeźbiona sylwetka",
  "intensywne spalanie tkanki tłuszczowej",
  "redukcja cellulitu"
  ]


function OpenModal({ModalImg,data, exitModal ,isOpen, device }){

  let resolut = null;
  let benefit = null;

  if(device === "Swan") {
    resolut = SwanResoluts;
    benefit = SwanBenefits;
  }
  else if(device === "Vacu") {
    resolut = VacuResoluts;
    benefit = VacuBenefits;
  }
  else if(device === "Roll") {
    resolut = RollResoluts;
    benefit = RollBenefits;
  }
  else if(device === "Elektro") {
    resolut = ElektroResoluts;
    benefit = ElektroBenefits;
  }
  else if(device === "Limfo") {
    resolut = LimfoResoluts;
    benefit = LimfoBenefits;
  }
  else if(device === "Sauna") {
    resolut = SaunaResoluts;
    benefit = SaunaBenefits;
  }


  if(isOpen){
    return <Modal ModalImg = {ModalImg} 
      data = {data} 
      resoluts = {resolut} 
      benefits = {benefit} 
      exitModal = {exitModal}
      device= {device}
      />
  }
  
  return null;
}

function ModalImg ( {data, device} ) {
  if(device === "Swan") return <Img fluid ={data.Swan.childImageSharp.fluid} alt="Swan" />
  else if(device === "Vacu") return <Img fluid ={data.Vacu.childImageSharp.fluid} alt="Vacu" />
  else if(device === "Roll") return <Img fluid ={data.Roll.childImageSharp.fluid} alt="Roll" />
  else if(device === "Elektro") return <Img fluid ={data.Elektro.childImageSharp.fluid} alt="Elektro" />
  else if(device === "Limfo") return <Img fluid ={data.Limfo.childImageSharp.fluid} alt="Limfo" />
  else if(device === "Sauna") return <Img fluid ={data.Sauna.childImageSharp.fluid} alt="Sauna" />
}


///////////////////////////////RENDER///////////////////////////////////////

const StacjeFitness = ( {data} ) => {

  console.log(data);

  const [isOpen, setIsOpen] = useState(false);
  const [device, setDevice] = useState("Swan");

  // console.log(device);

  const exitModal = () => {
    setIsOpen(!isOpen)
  }

  const setImgDevice = (device) => {
    setDevice(device)
  }

function setModal(device) {
  setDevice(device);
  setIsOpen(!isOpen);
}


 return(
  <>
    <OpenModal
      ModalImg = {ModalImg} 
      data = {data} 
      isOpen = {isOpen}
      exitModal = {exitModal}
      device = {device}
    />
    <Wrapp isOpen = {isOpen}>
      <Layout>
          <H1>STREFA FITNESS</H1>
          <PhotoWrapp>
            <DescribeDevice onClick = {(device)=> setModal("Swan")} >
              <GatsbyImg fixed ={data.Swan.childImageSharp.fixed} alt="Swan"/>
              <H2>Swan Shaper</H2>
              <P>Swan Shaper wykorzystuje działanie lamp podczerwonych, eliptyka skrętnego, światła kolagenowego oraz jonizacji. W efekcie poprawiamy odżywienie skóry, redukujemy cellulit i tkankę tłuszczową oraz ujędrniamy i modelujemy sylwetkę.Zabiegów na Swan Shaper nie rekomendujemy m.in. osobom z cukrzycą, epilepsją, chorobami serca, osobom o wadzę powyżej 90 kilogramów, a także kobietom w trakcie miesiączki i w ciąży.</P>
            </DescribeDevice>

            <DescribeDevice onClick = {(device)=> setModal("Vacu")}>
              <GatsbyImgRight fixed ={data.Vacu.childImageSharp.fixed} alt="Vacu"/>
              <H2Right>Vacu Shaper</H2Right>
              <P>POGROMCA CELLULITU to specjalistyczne urządzenie łączy rezultaty wysiłku fizycznego i działania podciśnienia. Ćwicząc na Vacu Shaper spalamy cztery razy szybciej tkankę tłuszczową.</P>
            </DescribeDevice>

            <DescribeDevice onClick = {(device)=> setModal("Roll")}>
              <GatsbyImg fixed ={data.Roll.childImageSharp.fixed} alt="Roll"/>  
              <H2>Roll Shaper</H2>
              <P>Rollmasaż jest gwarancją intensywnego a zarazem relaksacyjnego masażu, który doskonale ujędrnia ciało, poprawiając krążenie, usuwa z organizmu toksyny, a przede wszystkim skutecznie redukuje cellulit.</P>
            </DescribeDevice>
          </PhotoWrapp>

          <H1>STREFA WELLNES</H1>
          <PhotoWrapp>
            <DescribeDevice onClick = {(device)=> setModal("Elektro")}>
              <GatsbyImg fixed ={data.Elektro.childImageSharp.fixed} alt="Elektro"/>
              <H2>Elektrostymulacja</H2>
              <P>Elektrostymulacja mięśni to zabieg elektroleczniczy, zwany również elektrogimnastyką. Jest skuteczny w walce z cellulitem, poprawia elastyczność skóry, przyspiesza spalanie tkanki tłuszczowej.</P>
            </DescribeDevice>
            
            <DescribeDevice onClick = {(device)=> setModal("Limfo")}>
              <GatsbyImgRight fixed ={data.Limfo.childImageSharp.fixed}  alt="Limfo"/>
              <H2Right>Limfodrenaż</H2Right>
              <P>Zabiegi wpływające bardzo głęboko na problematyczne partie ciała. Zapobiega chorobom zapalnym czy chłonnym a także zwalcza cellulit, żylaki, obrzęki pourazowe i nadwagę. Poprawia krążenie krwi i limfy.</P>
            </DescribeDevice>
            
            <DescribeDevice onClick = {(device)=> setModal("Sauna")}>
              <GatsbyImg fixed ={data.Sauna.childImageSharp.fixed} alt="Sauna"/>
              <H2>Sauna</H2>
              <P>W przypadku sauny Infrared, za ogrzanie ciała odpowiadają promienniki podczerwieni, które wytwarzają fale podczerwone wnikające nawet do 4,5 cm pod skórę rozgrzewając tym samym nasze ciało.</P>
            </DescribeDevice>

          </PhotoWrapp>
      </Layout>
    </Wrapp>
  </>
)
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

export default StacjeFitness;