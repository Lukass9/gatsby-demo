import React from "react"
import styled, {createGlobalStyle, ThemeProvider} from "styled-components"
import { theme } from "../utils/theme"

const GlobalStyle = createGlobalStyle ` 
  body{
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    color: white;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

const WrapperStyled = styled.div `
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.dark};
  position: relative;
`;

const OnePageLayout = ({children}) => (
    <ThemeProvider theme = {theme}>
      <>
          <GlobalStyle/>
          <WrapperStyled>
              {children}
          </WrapperStyled>
      </>
    </ThemeProvider>
)

export default OnePageLayout
