import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "Stacje_fitness.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#fff`}
    >
      <H1> STACJE FITNESS </H1>
    </BackgroundImage>
  )
}

const H1 = styled.h1 ` 
  font-family: Aharoni;
  color: white;
  font-size: 9vw;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
`

const FitnessBG = styled(BackgroundSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 95vw;
  height: 25vh;
  border-radius: 15vw;
  margin-bottom: 5%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-position: center 60%;
  background-repeat: no-repeat;
  background-size: 100%;

  ${({theme})=>theme.media.tablet}{
      width: 30vw;
      height: 25vh;
    }
  /* background-attachment: local; */
`

export default FitnessBG