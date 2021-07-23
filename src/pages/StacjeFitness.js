import React, { useState } from "react";
import Layout from "../layout/Layout"
import styled from "styled-components"
import Modal from "../Components/Modal/Modal1"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import { FitnessDataDevice } from "../Components/DeviceDescriptions/data";
import { WelnessDataDevice } from "../Components/DeviceDescriptions/data";
import DescribeDevice2 from "../Components/DeviceDescriptions/DescribeDevice";

import H1 from "../Components/H1/H1"


const PhotoWrapp = styled.div ` 
    display: flex;
    flex-flow: column;
    align-items: center;
`

const Wrapp = styled.div ` 

  filter: ${({isOpen}) => isOpen? "brightness(45%) blur(3px)" : "blur(0px)" };
`

function OpenModal({ModalImg,data, exitModal ,isOpen, device}){

  let resolut = device.resoluts;
  let benefit = device.benefits;

  if(isOpen){
    return <Modal ModalImg = {ModalImg} 
      data = {data} 
      resoluts = {resolut} 
      benefits = {benefit} 
      exitModal = {exitModal}
      device= {device.shortName}
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

const FitnessImageDevice = [ 
  (data.Swan.childImageSharp.fixed),
  (data.Vacu.childImageSharp.fixed),
  (data.Roll.childImageSharp.fixed)
] 
const WellnessImageDevice = [ 
  (data.Elektro.childImageSharp.fixed),
  (data.Limfo.childImageSharp.fixed),
  (data.Sauna.childImageSharp.fixed)
] 

  const [isOpen, setIsOpen] = useState(false);
  const [device, setDevice] = useState("Swan");

  const exitModal = () => {
    setIsOpen(!isOpen)
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
            
            {FitnessDataDevice.map( (el,i) => 
              <DescribeDevice2
                onClick = {()=> setModal(el)}
                img = {FitnessImageDevice[i]} 
                data = {el}
                isEven ={i%2}
             />
            )}
            
          </PhotoWrapp>

          <H1>STREFA WELLNES</H1>
          <PhotoWrapp>

            {WelnessDataDevice.map( (el,i) => 
                <DescribeDevice2
                  onClick = {()=> setModal(el)}
                  img = {WellnessImageDevice[i]} 
                  data = {el}
                  isEven ={i%2}
              />
              )}

            {/* <DescribeDevice onClick = {()=> setModal("Sauna")}>
              <GatsbyImg fixed ={data.Sauna.childImageSharp.fixed} alt="Sauna"/>
              <H2>Sauna</H2>
              <P>W przypadku sauny Infrared, za ogrzanie ciała odpowiadają promienniki podczerwieni, które wytwarzają fale podczerwone wnikające nawet do 4,5 cm pod skórę rozgrzewając tym samym nasze ciało.</P>
            </DescribeDevice> */}

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

  Sauna: file(relativePath: { eq: "devices/wellness/sauna1.jpg" }) {
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