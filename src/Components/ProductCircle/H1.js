import styled from "styled-components"

const H1 = styled.h1 ` 
  color: #e67817;
  font-size: 5vw;
  width: 95%;
  transform: translateX(-40vw);
  /* transition: transform .6s .6s; */
  z-index: -1;

  ${({theme})=>theme.media.tablet}{
    transform: translateX(-30vw);
    font-size: 2vw;
    width: 100%
  }
`

export default H1;