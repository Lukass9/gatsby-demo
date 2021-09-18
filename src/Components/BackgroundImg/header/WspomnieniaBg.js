import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "wspomnienia.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
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
      <H2>WSPOMNIENIA</H2>
    </BackgroundImage>
  )
}

const H2 = styled.h2 ` 
    font-size: 7vw;
    /* font-size: 7vw; */
    /* font-size: 50px; */
    letter-spacing: 0.6em;
	  color: #E67817;
    text-shadow: -2px 5px 5px rgba(0, 0, 0, 0.25);

    /* ${({theme}) => theme.media.desktop} {
      font-size: 7vw;
    } */
`

const WspomnieniaBg = styled(BackgroundSection)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background-position:center 130%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

${({theme}) => theme.media.desktop} {
      height: 30vh;
    }
`

export default WspomnieniaBg