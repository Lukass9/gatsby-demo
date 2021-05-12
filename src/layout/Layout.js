import React from "react"
import styled, {createGlobalStyle, ThemeProvider} from "styled-components"
import { theme } from "../utils/theme"

import PhoneHeader from "../Components/Header/phoneHeader"
import DesktopHeader from "../Components/Header/desktopHeader"
import Menu from "../Components/Menu/Menu";
import Footer from "../Components/Footer/footer"
import StickyMedia from "../Components/StickyMedia/StickyMedia"

const GlobalStyle = createGlobalStyle ` 
  body{
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    /* color: white; */
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

const WrapperStyled = styled.div `
  display: flex;
  justify-content: center;
  flex-flow: column;
  background-color: ${({theme}) => theme.colors.backgroundLight};
`;

const Wrapper = styled.div ` 
  background-color: white;
  overflow: hidden;
`

const Layout = ({children}) => {
  
  return(
    <ThemeProvider theme = {theme}>
      <>
          <GlobalStyle/>
          <WrapperStyled>
            <PhoneHeader/>
            <DesktopHeader/>
            <Menu/>
            <StickyMedia/>
              <Wrapper>
                {children}
              </Wrapper>
              
            <Footer/>
          </WrapperStyled>
      </>
    </ThemeProvider>
)
}
export default Layout
