import React from "react"
import Layout from "../layout/Layout"
import styled from "styled-components"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import KontaktBg from "../Components/BackgroundImg/header/KontaktBg"
import GoogleMap from "../Components/Maps/Map"

const Wrapp = styled.div ` 
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const WrappContact = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 5vw;
`
const WrappSentence = styled.div ` 
  display: none;
  font-size: 100px;
  color: #e67817;
  font-family: 'Italianno', cursive;
  transform: rotate(12deg);
  align-items: center;
  margin: 0 2vw;
  width: 30%;

  ${({theme})=>theme.media.desktop}{
    display: flex;
  }
`
const H1 = styled.h1 ` 
  margin: 20px;
  color: #e67817;
`
const P = styled.p ` 
  margin: 5px;
`

const WrappColumn  = styled.div ` 
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 2vw;

`


const Iframe = styled.iframe` 
  border: 0px;
  width: 100%;
  height: 45vh;
`
const Contact = () => {

  return (
    <Layout>
        <KontaktBg/>
        <Wrapp>
          <WrappContact> 
            <WrappContact>
              <H1>Adres:</H1>
              <P>Studio Figura Wrocław Trzebnicka</P>
              <P>ul. Trzebnicka 54</P>
              <P>50-231 Wrocław</P>
            </WrappContact>
           
            <WrappContact>
              <H1>Godziny otwarcia:</H1>
              <Wrapp>
                <WrappColumn>
                  <P>Poniedziałek - Piątek</P>
                  <P>Sobota</P>
                </WrappColumn>
                <WrappColumn>
                  <P>8:00 - 21:00 </P>
                  <P>9:00 - 14:00 </P>
                </WrappColumn>
              </Wrapp>
            </WrappContact>

            <WrappContact>
              <H1>Kontakt:</H1>
              <Wrapp>
                <WrappColumn>
                  <P>email:</P>
                  <P>telefon:</P>
                </WrappColumn>
                <WrappColumn>
                  <P>trzebnicka54@gmail.com </P>
                  <P>531 884 716</P>
                </WrappColumn>
              </Wrapp>
            </WrappContact>
          </WrappContact>

          <WrappSentence>
            <P>Z nami możesz zacząć wspaniałą przygodę </P>
          </WrappSentence>
        </Wrapp>

        <WrappContact>
          <H1> Jak do nas trafić? </H1>
        </WrappContact>

        <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10015.906541790206!2d17.03612!3d51.127339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa94ef3beb6b3c7d3!2sStudio%20Figura%20Trzebnicka!5e0!3m2!1spl!2spl!4v1627271785544!5m2!1spl!2spl" allowfullscreen="" loading="lazy"></Iframe>
    </Layout>
  )
}

export default Contact