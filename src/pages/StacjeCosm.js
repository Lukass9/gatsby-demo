import React, { useState } from "react";
import Layout from "../layout/Layout"
import styled from "styled-components"
import Modal from "../Components/Modal/Modal1"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import { CosmDataDevice } from "../Components/DeviceDescriptions/data";
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
  if(device === "Beauty") return <Img fluid ={data.Beauty.childImageSharp.fluid} alt="Beauty" />
  else if(device === "Cavi") return <Img fluid ={data.Cavi.childImageSharp.fluid} alt="Cavi" />
  else if(device === "Hifu") return <Img fluid ={data.Hifu.childImageSharp.fluid} alt="Hifu" />
  else if(device === "Lipolaser") return <Img fluid ={data.Lipolaser.childImageSharp.fluid} alt="Lipolaser" />
}


///////////////////////////////RENDER///////////////////////////////////////

const StacjeCosm = ( {data} ) => {

const CosmImageDevice = [ 
  (data.Beauty.childImageSharp.fixed),
  (data.Cavi.childImageSharp.fixed),
  (data.Hifu.childImageSharp.fixed),
  (data.Lipolaser.childImageSharp.fixed)
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

          <H1>KOSMETOLOGIA ESTETYCZNA</H1>
          <PhotoWrapp>
            
            {CosmDataDevice.map( (el,i) => 
              <DescribeDevice2
                onClick = {()=> setModal(el)}
                img = {CosmImageDevice[i]} 
                data = {el}
                isEven ={i%2}
             />
            )}
            
          </PhotoWrapp>

      </Layout>
    </Wrapp>
  </>
)
}

export const query = graphql`
query {
  Beauty: file(relativePath: { eq: "devices/Kosmetologia/beauty_shaper2.jpg" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  Cavi: file(relativePath: { eq: "devices/Kosmetologia/cavi_shape1.jpg" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70){
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850 ) {
        ...GatsbyImageSharpFluid
      }
    }
  }


  Hifu: file(relativePath: { eq: "devices/Kosmetologia/hifu.jpg" }) {
    childImageSharp {
        fixed(height:200, width:300, quality: 70){
        ...GatsbyImageSharpFixed
        }
        fluid(quality: 80, maxWidth: 850 ) {
          ...GatsbyImageSharpFluid
        }
    }
  }

  Lipolaser: file(relativePath: { eq: "devices/Kosmetologia/lipolaser.jpg" }) {
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

export default StacjeCosm;