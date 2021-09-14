import React from "react"
import Layout from "../layout/Layout"
import styled from "styled-components"

import WspomnieniaBg from "../Components/BackgroundImg/header/WspomnieniaBg"
import H1 from "../Components/H1/H1"
import Card from "../Card/Card"

import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Wrapper = styled.div ` 
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Wspomnienia = ({data}) => {
  // const kontakt = {...data.contact.childImageSharp.fluid, aspectRatio: 0.98};
  // const wspomnienia =  {...data.wspomnienia.childImageSharp.fluid, aspectRatio: 0.98}
  // const kontakt = {...data.contact.childImageSharp.fluid};
  // const wspomnienia =  {...data.wspomnienia.childImageSharp.fluid};

  // console.log(wspomnienia);

  return (
    <Layout >
        <WspomnieniaBg/>
        <H1>Galeria zdjęć</H1>
        <Wrapper>
          {data.allDatoCmsGalery.edges.map(gallery => (
            <Card key={gallery.node.title} img ={ <img style = {{height: "100%", width: "100%", objectFit: "cover"}} src = {gallery.node.presentPicture.url} /> } />
          ))}

        {data.allDatoCmsGalery.edges[0].node.galery.map(picture => (
            <Card key={picture.alt} img ={ <img style = {{height: "100%", width: "100%", objectFit: "cover"}} src = {picture.url} /> } />
          ))}
          {/* <Card img = {<Img style = {{height: "100%" }} fluid={kontakt} />} rotate= {"rotate(0deg)"}/>
          <Card img = {<Img style = {{height: "100%" }} fluid={wspomnienia}/>} rotate= {"rotate(0deg)"}/> */}
        </Wrapper>
    </Layout>
  )
}

export const query = graphql ` 
  query Gallery {
    allDatoCmsGalery {
      edges {
        node {
          title
          presentPicture {
            alt
            url
          }
          galery {
            alt
            url
          }
        }
      }
    }
  }
`


// export const query = graphql`
// query {
//   contact: file(relativePath: { eq: "contact.jpg" }) {
//     childImageSharp { 
//       fluid(quality: 80, maxWidth: 850) {
//         ...GatsbyImageSharpFluid
//       }
//       fixed(height:255, quality: 100) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }

//   wspomnienia: file(relativePath: { eq: "wspomnienia.jpg" }) {
//     childImageSharp {
//       fluid(quality: 80, ) {
//         ...GatsbyImageSharpFluid
//       }
//       fixed(height:255, quality: 100) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }

// }
// `

export default Wspomnienia

