import React from "react"
import styled, { keyframes } from "styled-components"

import LogoSF from "../../images/log_bez_tla.svg"
import PhonePhoto from "../../images/phone.svg"
import MailPhoto from "../../images/mail.svg"

import TrzebDesk from "../../Components/P/trzebnickaDesktop"
import Wroclaw from "../P/wroclaw"


const ImgWithoutGatsby = styled.img ` 
    height: 15vw;
    margin: 0;
    padding: 0;
`
const Wrapper = styled.div ` 
    position: relative;
    display: none;
    width: 100%;
    overflow: hidden;

    ${({theme}) => theme.media.desktop} {
        display: flex;
    }
`

const WrapperLogo = styled.div ` 
    margin-top: 0.5vw;
    display: flex;
    flex-flow: row;

`

const WrapperText = styled.div ` 
    justify-content: flex-end;
    padding-bottom: 2%;
    height: 100%;
    display: flex;
    flex-flow: column;
    
`

const WrapperContact = styled.div ` 
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-end;
    padding-top: 1%;
    padding-right: 1%;
    height: 100%;
    width: 100%;
    font-weight: 400;
`
const LogoLink = styled.a `  

    display: flex;
    text-decoration: none;
    letter-spacing: 0.1em;
    font-size: 2.2em;
    color: #e67817;
    font-family: 'Raleway', sans-serif;
    text-shadow: -2px 5px 5px rgb(0 0 0 / 25%);
    margin: 10px;

`

const LogoLinkEmail = styled(LogoLink) ` 
    font-size: 1.2em;
    font-weight: 600;

`

const WrapperRow = styled.div ` 
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    z-index: 2;
`

const flipVerticalFwd = keyframes`
   0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`



const Ellipse = styled.button `
    position: absolute;
    border: none;
    outline: none;
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;

/* :focus{
    animation: ${flipVerticalFwd} 0.8s both;
  } */
`
const Ellipse1 = styled(Ellipse) `
    width: 14vw;
	height: 14vw;
	background: #C4C4C4;
	border-radius: 50%;
	left: 92vw;
	top: -4.5vw;
`
const Ellipse2 = styled(Ellipse) `
    width: 11vw;
	height: 11vw;
	background: rgba(196, 196, 196, 0.9);
	border-radius: 50%;
	left: 84vw;
	top: 6.5vw;
`
const Ellipse3 = styled(Ellipse) `
    width: 10vw;
	height: 10vw;
	background:rgba(196, 196, 196, 0.8);
	border-radius: 50%;
	left: 76vw;
	top: -6vw;
`
const Ellipse4 = styled(Ellipse) `
    width: 8vw;
	height: 8vw;
	background: rgba(196, 196, 196, 0.7);
	border-radius: 50%;
	left: 73vw;
	top: 4.4vw;
`
const Ellipse5 = styled(Ellipse) `
    width: 5vw;
	height: 5vw;
	background: rgba(196, 196, 196, 0.6);
	border-radius: 50%;
	left: 62.5vw;
	top: 9.4vw;
`
const Ellipse6 = styled(Ellipse) `
    width: 5vw;
	height: 5vw;
	background: rgba(196, 196, 196, 0.5);
	border-radius: 50%;
	left: 65vw;
	top: 1.4vw;
    
    z-index: 50;
`
const Ellipse7 = styled(Ellipse) `
    width: 3vw;
	height: 3vw;
	background: rgba(196, 196, 196, 0.4);
	border-radius: 50%;
	left: 57vw;
	top: 5.4vw;
    
    z-index: 50;
`
const Ellipse8 = styled(Ellipse) `
    width: 5vw;
	height: 5vw;
	background: rgba(196, 196, 196, 0.3);
	border-radius: 50%;
	left: 48vw;
	top: 1.4vw;
    
    z-index: 50;
`
const Ellipse9 = styled(Ellipse) `
    width: 2vw;
	height: 2vw;
	background: rgba(196, 196, 196, 0.2);
	border-radius: 50%;
	left: 45vw;
	top: 8vw;

    z-index: 50;
`

const DesktopHeader = ( ) => {
    
    return(
    <Wrapper>
        <Ellipse1/>
        <Ellipse2/>
        <Ellipse3/>
        <Ellipse4/>
        <Ellipse5/>
        <Ellipse6/>
        <Ellipse7/>
        <Ellipse8/>
        <Ellipse9/>
        <WrapperLogo>
            <ImgWithoutGatsby src={LogoSF} alt="logo" /> 
            {/* <Img fixed ={data.twojaStara.childImageSharp.fixed} alt="losgo"/> */}
            <WrapperText>
                <WrapperLogo>
                  <Wroclaw 
                    size = "2.5em"
                    paddingFirstChild = "8%"/>
                </WrapperLogo>
                <WrapperLogo>
                   <TrzebDesk/>
                </WrapperLogo>
            </WrapperText>
        </WrapperLogo>

        <WrapperContact>         
            <WrapperRow>
                <img src={PhonePhoto} alt ="PhonePhoto" />
                <LogoLink href="tel:+48 531 884 716 ">531 884 716</LogoLink>
            </WrapperRow>

            <WrapperRow>
                <img src={MailPhoto} alt ="MailPhoto" />
                <LogoLinkEmail href="mailto:trzebnicka54@gmail.com">trzebnicka54@gmail.com </LogoLinkEmail>
            </WrapperRow>
        </WrapperContact>
    </Wrapper>
    )
};

export default DesktopHeader





