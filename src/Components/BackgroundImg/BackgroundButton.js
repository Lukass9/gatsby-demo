import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, Bg }) => {
  const data = useStaticQuery(
    graphql`
      query {
        cennik: file(relativePath: { eq: "cennik.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        fitness: file(relativePath: { eq: "Stacje_fitness.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        kontakt: file(relativePath: { eq: "contact.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        cosm: file(relativePath: { eq: "Stacje_kosmetologia_estetyczna.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        suplementy: file(relativePath: { eq: "suplementy.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        wellnes: file(relativePath: { eq: "indexRollShaper.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
      }
    `
  )

    let imageData;
    let title;
    let position;
    let size;
    if(Bg=="cennik"){
        imageData = data.cennik.childImageSharp.fluid
        title = "CENNIK";
        position = " center 70% ";
        size = " 100% "; 
    }
    else if(Bg=="fitness"){
        imageData = data.fitness.childImageSharp.fluid
        title="STACJE FITNESS";
        position = " center 60% ";
        size = " 100% ";
    }
    else if(Bg=="kontakt"){
        imageData = data.kontakt.childImageSharp.fluid
        title="KONTAKT";
        position = " center 85% ";
        size = " 100% ";
    }
    else if(Bg=="cosm"){
        imageData = data.cosm.childImageSharp.fluid
        title="KOSMETOLOGIA ESTETYCZNA";
        position = " center 50% ";
        size = " 100% ";
    }
    else if(Bg=="suplementy"){
        imageData = data.suplementy.childImageSharp.fluid
        title="SUPLEMENTY";
        position = " center 85% ";
        size = " 100% ";
    }
    else if(Bg=="wellnes"){
        imageData = data.wellnes.childImageSharp.fluid
        title="STACJE WELLNESS";
        position = " center 20% ";
        size = " 100% ";
    }


const BackgroundImageEdit = styled(BackgroundImage)` 
    background-position: ${position};
    background-repeat: no-repeat;
    background-size: ${size};
`

const H1 = styled.h1 ` 
  font-family: Aharoni;
  color: white;
  font-size: 9vw;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  text-align: center;

  ${({theme})=>theme.media.tablet}{
        font-size: 3vw;
    }
`
    
  return (
    <BackgroundImageEdit
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#fff`}
    >
      <H1> {title} </H1>
    </BackgroundImageEdit>
  )
}

const CennikButtonBG = styled(BackgroundSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 95vw;
  height: 25vh;
  border-radius: 15vw;
  margin-bottom: 5%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-repeat: no-repeat;

  ${({theme})=>theme.media.tablet}{
      width: 30vw;
      height: 25vh;
      border-radius: 4vw;
    }
  /* background-attachment: local; */
`

export default CennikButtonBG