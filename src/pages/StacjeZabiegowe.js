import * as React from "react"
import {Link} from "gatsby" 
import Layout from "../layout/Layout"
import styled from "styled-components"

import { graphql } from "gatsby"
import Img from "gatsby-image"


const Wrapp = styled.div ` 
    display: flex;
    flex-flow: column;
    text-align: center;
    padding: 2% 9%;
    background-color: white;
    color: black;

`

const PhotoWrapp = styled.div ` 
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;


  ${({theme}) => theme.media.tablet}{
    flex-flow: row;
  }

` 
const Photo = styled.div ` 
  position: relative;
  width: 100%;
  overflow: hidden;
	border-radius: 170px;
  transition: border-radius 0.7s ease-in-out;
  margin: 10px;

  :hover{
    border-radius: 80px;

   
  }


  ${({theme}) => theme.media.tablet}{
    width: 39%;

  }

`
const GatsbyImg = styled(Img) ` 
	opacity: 0.7;
	transition: transform 0.7s ease-in-out,
              opacity 1s ease;

  ${Photo}:hover &{
    opacity: 1;
  	transform: scale(1.2);
  }
`


const P = styled.p ` 
  position: absolute;
  top: 45%;
  width: 100%;
	margin-top: 10px;
	padding: 20px 0;

  font-size: 24px;
  background-color: #ff670fcc; 
  color: white;
	text-align: center;

  transition: opacity 0.5s ease-in-out;
  opacity:0;

  ${Photo}:hover &{
    opacity:1;
  }
`

export const query = graphql`
query {
  fitness: file(relativePath: { eq: "Stacje_fitness.jpg" }) {
    childImageSharp {
      fluid(quality: 70) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  cosm: file(relativePath: { eq: "Stacje_kosmetologia_estetyczna.jpg" }) {
    childImageSharp {
      fluid(quality: 70){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const StacjeZabiegowe = ( {data} ) =>(
        <Layout>
            <Wrapp>
                <p>W <b>STUDIO figura Wrocław Trzebnicka</b> Panie mogą skorzystać z zabiegów fitness & wellness jak również z zabiegów kosmetologii estetycznej.</p>
                <h3>Wybierz zdjęcie aby poznać nasze zabiegi:</h3>     

                <PhotoWrapp>  
                  <Photo as={Link} to="/StacjeFitness">
                    <GatsbyImg fluid ={data.fitness.childImageSharp.fluid} alt="fitness2"/>
                    <P>STACJE FITNESS & WALLNESS</P>
                  </Photo>
                    
                  <Photo as={Link} to="/StacjeCosm">
                    <GatsbyImg fluid ={data.cosm.childImageSharp.fluid} alt="cosm"/>
                    <P>KOSMETOLOGIA ESTETYCZNA</P>
                  </Photo>
                    
                </PhotoWrapp>
             
            </Wrapp>

        </Layout>
    )

export default StacjeZabiegowe

