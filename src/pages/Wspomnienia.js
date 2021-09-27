import React, {useState} from "react"
import Layout from "../layout/Layout"
import styled from "styled-components"

import WspomnieniaBg from "../Components/BackgroundImg/header/WspomnieniaBg"
import H1 from "../Components/H1/H1"
import Card from "../Card/Card"
import GroupCards from "../Card/GroupCards"
import Button from "../Components/Button/Button1"
import Modal from "../Components/Modal/Gallery"

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

@media only screen and (orientation: landscape) {
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap
}
`

const WrappButton = styled.div `
  display: flex;
  width:90%;
  justify-content: flex-end;
  margin: 5vh 0;
`

const FilterWrapp = styled.div ` 
    filter: ${({modal}) => modal? "brightness(45%) blur(3px)" : "blur(0px)" };
`

const MdaolImg = styled.img ` 
  height: 80vh;

@media only screen and (orientation: portrait) {
  height: auto;
  width: 80vw;
}
`

function setRandomRotateCard(i) {
  const max = 10;
  const min = 2;
  let randomNumber = Math.round(Math.random() * (max-min+1) + min)
  // if(Math.round( Math.random() ) > 0 ){
    if( i%2 ){
    randomNumber = randomNumber * (-1); 
  }
  // return randomNumber
  return "rotate(" + randomNumber +"deg)"
}

const Wspomnienia = ({data}) => {

  const [gallery, setGallery] = useState(-1);
  const [photo, setPhoto] = useState(0);
  const [title, setTitle] = useState('Galeria zdjęć')
  const [modal, isOpenModal] = useState(false);
  // const kontakt = {...data.contact.childImageSharp.fluid, aspectRatio: 0.98};
  // const wspomnienia =  {...data.wspomnienia.childImageSharp.fluid, aspectRatio: 0.98}
  // const kontakt = {...data.contact.childImageSharp.fluid};
  // const wspomnienia =  {...data.wspomnienia.childImageSharp.fluid};

  return (
    <>
      {modal && <Modal img= {<MdaolImg src = {data.allDatoCmsGalery.edges[gallery].node.galery[photo].fluid.src} /> }
      onClick = { ()=> isOpenModal(!isOpenModal) }/>}
      {/* {modal && <Modal />} */}
      <FilterWrapp modal ={modal} >
        <Layout >
          <WspomnieniaBg/>
          <H1> {title} </H1>
          <Wrapper>
            
            {gallery == -1 ? data.allDatoCmsGalery.edges.map((gallery, i) => (
              <GroupCards onClick ={()=> {
                setGallery(i);
                setTitle(gallery.node.title);
              }}
                          key ={gallery.node.title} 
                          mainImg ={gallery.node.presentPicture.url}
                          imgs ={data.allDatoCmsGalery.edges[i].node.galery}
                          title = {gallery.node.title} />
              )) :
                data.allDatoCmsGalery.edges[gallery].node.galery.map((picture, i) => (
                  <Card onClick = { ()=>{ 
                    isOpenModal(true);
                    setPhoto(i);
                  }}
                  rotate = { setRandomRotateCard(i) } 
                  key={picture.basename}
                  // key={i} 
                  img ={ <img style = {{height: "100%", width: "100%", objectFit: "cover"}} src = {picture.fluid.src} /> } />
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
            {gallery != -1 &&
            <Button onClick={()=>{setGallery(-1); 
                                  setTitle('Galeria zdjęć');}  
                } >Powrót</Button>}
          </WrappButton>
      </Layout>
    </FilterWrapp>
  </>
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
            fluid{
              src
            }
          }
          galery {
            basename
            alt
            url
            fluid{
              src
            }
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

