import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/Layout"
import styled from "styled-components"

import Markdown from 'react-markdown'

// import PromocjeBg from "../Components/BackgroundImg/header/PromocjaBg"

export const query = graphql` 
query Wskazowski {
  allDatoCmsArticle {
    edges {
      node {
        content
        title
        picture {
          url
          alt
        }
      }
    }
  }
}

`;

const Wrapper = styled.div ` 
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
`
const WrapperConntent = styled.div ` 
    width: 100%;
    margin-bottom: 30px;
    /* box-shadow: 4px 41px 13px -32px rgba(0,0,0,0.52); */
    box-shadow: 0px 30px 10px -20px rgba(0,0,0,0.52);

  ${({theme})=> theme.media.desktop}{
    width: 70%;
    margin-bottom: 8vw;
  }
`

const WrappImg = styled.div ` 
    /* margin: 20px; */
    width: 100%;
    height: 100%;

    background-size: contain;

  ${({theme})=> theme.media.desktop}{
    width: 50%;
    height: 50%;
  }
`

const Title = styled.h1 ` 
    width: 100%;
    margin: 0;

    color: ${({theme}) => theme.colors.orangeF};
`
const Img = styled.img ` 
    width: 100%;
    height: 100%;
`
const WrappArticle = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  ${({theme})=> theme.media.desktop}{
    flex-direction: row;
    width: 100%;
  }
`

const Content = styled.p ` 
    width: 100%;

`

const WrappColumn = styled.div ` 
  display: flex;
  flex-direction: column;
  width: 90%;

${({theme})=> theme.media.desktop}{
    width: 100%;
    margin-left: 50px;
  }

`
const WrappButton = styled.div ` 
  display: flex; 
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 20px;

  align-self: flex-end;

`

const Button = styled.button ` 
  width: 30vw;
  height: 10vw;
  background-color: transparent;
  border-color: #F59F00;
  border-radius: 8px;
  border-width: 1px;
  color: #F59F00;
  margin-right: 10px;
  box-shadow: 5px 10px 8px -10px rgba(0,0,0,0.75);

  ${({theme})=> theme.media.desktop}{
    width: 8vw;
    height: 3vw;
  }
`

const Promocje = ( {data} ) => {

   return (
    <Layout>
      {/* <PromocjeBg/> */}
        <Wrapper>
            {data.allDatoCmsArticle.edges.map(Article => (
                <WrapperConntent key={Article.node.picture.alt}>

                    <WrappArticle>
                        <WrappImg>
                            <Img src={Article.node.picture.url} alt={Article.node.picture.alt}/>
                        </WrappImg> 

                        <WrappColumn>
                            <Title> {Article.node.title} </Title>
                            <Content> 
                              <Markdown
                                escapeHtml={true}
                                children={Article.node.content.substr(0, 300) + " ..."} 
                              />
                              
                            </Content>

                            <WrappButton>
                              <Button> Czytaj więcej </Button>
                            </WrappButton>

                        </WrappColumn>
 
                    </WrappArticle>


                </WrapperConntent>
            ))}
        </Wrapper>
    </Layout> 
   )
}

export default Promocje


