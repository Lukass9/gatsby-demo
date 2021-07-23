import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/Layout"
import styled from "styled-components"

import PromocjeBg from "../Components/BackgroundImg/header/PromocjaBg"


const WrapperIMG = styled.div ` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const WrappDiv = styled.div ` 
    margin: 20px;
    width: 80vw;

  ${({theme})=> theme.media.tablet}{
    width: 30vw;
  }
`
const Img = styled.img ` 
    width: 100%;
    height: 100%;
`

export const query = graphql` 
query MyQuery {
    allDatoCmsPromocje {
      edges {
        node {
          zdjecie {
            alt
            url
          }
        }
      }
    }
  }
`;

const Promocje = ( {data} ) => (
   
    <Layout>
      <PromocjeBg/>
        <WrapperIMG>
            {data.allDatoCmsPromocje.edges.map(promotionImage => (
                <WrappDiv key={promotionImage.node.zdjecie.alt}>
                    <Img src={promotionImage.node.zdjecie.url} alt={promotionImage.node.zdjecie.alt}/>
                </WrappDiv> 
            ))}
        </WrapperIMG>
    </Layout> 
)


export default Promocje


