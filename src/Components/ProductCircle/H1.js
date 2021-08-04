import styled from "styled-components"

const H1 = styled.h1 ` 
  color: #e67817;
  font-size: 5vw;
  transform: translateX(-30vw);
  transition: transform .6s .6s;
  z-index: -1;

  ${({theme})=>theme.media.tablet}{
      font-size: 2vw;
  }
`

export default H1;