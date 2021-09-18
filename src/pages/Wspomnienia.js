import React, {useState} from "react"
import Layout from "../layout/Layout"
import styled from "styled-components"

import WspomnieniaBg from "../Components/BackgroundImg/header/WspomnieniaBg"
import H1 from "../Components/H1/H1"
import Card from "../Card/Card"
import GroupCards from "../Card/GroupCards"
import Button from "../Components/Button/Button1"

import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Wrapper = styled.div ` 
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({theme})=>theme.media.desktop}{
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}
`

const WrappButton = styled.div `
  display: flex;
  width:90%;
  justify-content: flex-end;
  margin-bottom: 5vh;
`
const Wspomnienia = ({data}) => {

  const [photos, setPhotos] = useState(-1);
  const [title, setTitle] = useState('Galeria zdjęć')
  // const kontakt = {...data.contact.childImageSharp.fluid, aspectRatio: 0.98};
  // const wspomnienia =  {...data.wspomnienia.childImageSharp.fluid, aspectRatio: 0.98}
  // const kontakt = {...data.contact.childImageSharp.fluid};
  // const wspomnienia =  {...data.wspomnienia.childImageSharp.fluid};

  return (
    <Layout >
        <WspomnieniaBg/>
        <H1> {title} </H1>
        <Wrapper>
          
          {photos == -1 ? data.allDatoCmsGalery.edges.map((gallery, i) => (
            <GroupCards onClick ={()=> {
              setPhotos(i);
              setTitle(gallery.node.title);
            }}
                        key ={gallery.node.title} 
                        mainImg ={gallery.node.presentPicture.url}
                        imgs ={data.allDatoCmsGalery.edges[i].node.galery}
                        title = {gallery.node.title} />
            )) :
              data.allDatoCmsGalery.edges[photos].node.galery.map(picture => (
                <Card key={picture.alt} img ={ <img style = {{height: "100%", width: "100%", objectFit: "cover"}} src = {picture.url} /> } />
                
              ))  
          }

        

          {/* {data.allDatoCmsGalery.edges.map(gallery => (
            <Card key ={gallery.node.title} 
                  img ={<img style = {{height: "100%", width: "100%", objectFit: "cover"}} 
                  src ={gallery.node.presentPicture.url}/>} 
                  title = {gallery.node.title} />
          ))} */}

        {/* {data.allDatoCmsGalery.edges[0].node.galery.map(picture => (
            <Card key={picture.alt} img ={ <img style = {{height: "100%", width: "100%", objectFit: "cover"}} src = {picture.url} /> } />
          ))} */}

          {/* <Card img = {<Img style = {{height: "100%" }} fluid={kontakt} />} rotate= {"rotate(0deg)"}/>
          <Card img = {<Img style = {{height: "100%" }} fluid={wspomnienia}/>} rotate= {"rotate(0deg)"}/> */}
        </Wrapper>

        <WrappButton>
          {photos != -1 &&
          <Button onClick={()=>{setPhotos(-1); 
                                setTitle('Galeria zdjęć');}  
              } >Powrót</Button>}
        </WrappButton>
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

