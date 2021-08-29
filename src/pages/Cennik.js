import React, { useRef, useEffect, useState } from "react"
import Layout from "../layout/Layout"
import styled from "styled-components"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import CennikBg from "../Components/BackgroundImg/header/CennikBg"
import H1 from "../Components/H1/H1"
import FitnessSlider from "../Components/Slick-slider/FitnessSlider"
import CosmSlider from "../Components/Slick-slider/CosmSlider"
import PackageSlider from "../Components/Slick-slider/packageSlider"
import ToogleCosmSup from "../Components/ProductCircle/ToogleCosmSup"

import WrappCircle2 from "../Components/ProductCircle/WrappCircle"
import {Suplements} from "../Components/ProductCircle/data"
import {Cosmetics} from "../Components/ProductCircle/data"
import CircleAnimation from "../Components/ProductCircle/ProductCircleAnimation"
import ToggleAnimation from "../Components/ProductCircle/ToggleAnimation"


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

// function SwitchContent(switchButton) {
//     if (switchButton) {    
//       return <H1> True </H1>  
//     } else return <H1> False </H1>
//   }

const Cennik = ({ data }) => {


const suplementsImage = [
  (data.mlodyJeczmien.childImageSharp.fluid),
  (data.goClean.childImageSharp.fluid),
  (data.setOczyszczajacy.childImageSharp.fluid),
  (data.bioSlim.childImageSharp.fluid),
  (data.bioSlimTab.childImageSharp.fluid),
  (data.setOdchudzajacy.childImageSharp.fluid),
  (data.kolagen.childImageSharp.fluid),
  (data.setKolagenowy.childImageSharp.fluid)
]

const cosmeticsImage = [
  (data.GoCellulitBuster.childImageSharp.fluid),
  (data.GoNaturalCandleProLiczi.childImageSharp.fluid),
  (data.GoNaturalCandleProWanilia.childImageSharp.fluid),
  (data.GoScrubGingerbread.childImageSharp.fluid),
  (data.GoScrubProTea.childImageSharp.fluid),
  (data.GoShapePro.childImageSharp.fluid),
  (data.GoUpBreastPro.childImageSharp.fluid),
  (data.KremKolagenoweDayNight.childImageSharp.fluid),
  (data.PomadkaPushUp.childImageSharp.fluid),
  (data.PomadkaOchronna.childImageSharp.fluid),
  (data.SetAntycellulitowy.childImageSharp.fluid),
  (data.SetKolagenowyKremILiquid.childImageSharp.fluid),
  (data.KremDoRak.childImageSharp.fluid)
]

  const [switchButton, setSwitchButton] = useState(false);
  const wrapper_toggle = useRef(null);
  

  useEffect(()=> {
    const [elements_toggle] = wrapper_toggle.current.children;
    
    CircleAnimation(); 
    ToggleAnimation(elements_toggle, switchButton);
  } )
  
  return (
    <Layout >
      <CennikBg />
      <H1 id="scroll_fitwell">Stacje fitness & wellness</H1>
      <WrappSlider>
        <Wrap>
          <FitnessSlider/>
        </Wrap>
      </WrappSlider>

      <H1 id="scroll_cosm">Kosmetologia</H1>
      <WrappSlider>
        <Wrap>
          <CosmSlider />
        </Wrap>
      </WrappSlider>

      <H1 id="scroll_pack">Pakiety</H1>
      <WrappSlider>
        <Wrap>
          <PackageSlider />
        </Wrap>
      </WrappSlider>

      {/* <H1 id="scroll_sup">Kosmetyki i suplementy</H1> */}
      <ToogleCosmSup
        wrapper={wrapper_toggle}
        id="scroll_sup" 
        switchButton = {switchButton} 
        onClick = { ()=> {
          // ToggleAnimation();
          setSwitchButton(!switchButton);
        }} 
      />

      {/* <button onClick = { ()=> {
        setSwitchButton(!switchButton)
      }} > zmień </button> */}

      {switchButton ? 
          Cosmetics.map((Cosmetics, i)=>(
            <WrappCircle2 key={i} Suplement={Cosmetics} img={<Img fluid={cosmeticsImage[i]} />} />))  
          :
          Suplements.map((Suplement, i)=>(
            <WrappCircle2 key={i} Suplement={Suplement} img={<Img fluid={suplementsImage[i]} />} />)) 
          
          }

   
      {/* {Suplements.map((Suplement, i)=>(
         <WrappCircle2 Suplement={Suplement} img={<Img fluid={suplementsImage[i]} />} />
      ))} */}
 

    </Layout>
  )
}

export const query = graphql`
query {

  mlodyJeczmien: file(relativePath: { eq: "suplements/mlody-jeczmien-pro.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  goClean: file(relativePath: { eq: "suplements/go-clean-pro.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  
  setOczyszczajacy: file(relativePath: { eq: "suplements/set-oczyszczajacy.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  bioSlim: file(relativePath: { eq: "suplements/go-slim-liquid-pro.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  bioSlimTab: file(relativePath: { eq: "suplements/go-slim-pro.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  setOdchudzajacy: file(relativePath: { eq: "suplements/set-odchudzajacy.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  kolagen: file(relativePath: { eq: "suplements/go-collagen-liquid-pro.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  setKolagenowy: file(relativePath: { eq: "suplements/set-kolagenowy-kremy-i-liquid.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  GoCellulitBuster: file(relativePath: { eq: "cosmetics/go-cellulite-buster-pro.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  GoNaturalCandleProLiczi: file(relativePath: { eq: "cosmetics/go-natural-candle-pro-liczi.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  GoNaturalCandleProWanilia: file(relativePath: { eq: "cosmetics/go-natural-candle-pro-wanilia.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  GoScrubGingerbread: file(relativePath: { eq: "cosmetics/go-scrub-pro-gingerbread.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  GoScrubProTea: file(relativePath: { eq: "cosmetics/go-scrub-pro-tea.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  GoShapePro: file(relativePath: { eq: "cosmetics/go-shape-pro.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  GoUpBreastPro: file(relativePath: { eq: "cosmetics/go-up-breast-pro-100-ml.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  KremKolagenoweDayNight: file(relativePath: { eq: "cosmetics/kremy-kolagenowe-go-collagen-natural-day-night-pro.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  PomadkaPushUp: file(relativePath: { eq: "cosmetics/pomadka-mentolove-z-efektem-push-up.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  PomadkaOchronna: file(relativePath: { eq: "cosmetics/pomadka-ochronna.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  SetAntycellulitowy: file(relativePath: { eq: "cosmetics/set-antycellulitowy-go-body-wrapping-pro-go-shape-pro-go-cellulite-buster-pro.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  SetKolagenowyKremILiquid: file(relativePath: { eq: "cosmetics/set-kolagenowy-kremy-i-liquid.png" }) {
    childImageSharp {
      fixed(height:200, width:300, quality: 70) {
        ...GatsbyImageSharpFixed
      }
      fluid(quality: 80, maxWidth: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  KremDoRak: file(relativePath: { eq: "cosmetics/silky-hands-krem-do-rak.png" }) {
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

