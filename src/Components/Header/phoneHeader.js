import React from "react"
import styled from "styled-components"

import LogoSF from "../../images/log_bez_tla.svg"
import PhonePhoto from "../../images/phone.svg"
import MailPhoto from "../../images/mail.svg"

import Trzeb from "../../Components/P/trzebnicka"
import Wroclaw from "../../Components/P/wroclaw"

const Img = styled.img `
  height: 100vw;

@media screen and (min-width: 600px){
  height: 70vw;
}
`

const WrapperRow = styled.div ` 
    display: flex;
    flex-direction: row;
    /* height: 50vh; */
`
const WrapperCol = styled.div ` 
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LogoLink = styled.a `  
    text-decoration: none;
    font-size: 1.2em;
    color: #e67817;
    font-family: 'Raleway', sans-serif;
    text-shadow: -2px 5px 5px rgb(0 0 0 / 25%);
    margin: 10px;

    ${({theme}) => theme.media.phone} {
      font-size: 1.6em;
    }
`
const Phone = styled(LogoLink) ` 
      font-size: 2.3em;
      margin: 0 1vw;
`
const Wrapp = styled.div ` 
  display: flex;
  flex-flow: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  
  
  ${({theme}) => theme.media.desktop} {
        display: none;
    }

@media screen and (orientation: landscape){
  transform: scale(0.5)
}
`

const WrappFlex = styled.div ` 
  display: flex;
  flex-flow: row;
@media screen and (min-width: 600px){
  transform: scale(0.8);
}
`
const PhoneHeader = () => (
      <Wrapp>
        <WrappFlex>
          <Wroclaw 
            size="6vw"
            paddingFirstChild="0"/>
        </WrappFlex>
        <WrapperRow>
          <Img src={LogoSF} alt="logo" />
          <Trzeb/>
        </WrapperRow>

        <WrapperCol>
          <WrapperRow>
            <img src={PhonePhoto} alt ="PhonePhoto" />
            <Phone href="tel:+48 531 884 716 ">531 884 716</Phone>
          </WrapperRow>
          <WrapperRow>
            <img src={MailPhoto} alt ="MailPhoto" />
            <LogoLink href="mailto:trzebnicka54@gmail.com">trzebnicka54@gmail.com </LogoLink>
          </WrapperRow>
        </WrapperCol>
      </Wrapp>   
  )

export default PhoneHeader