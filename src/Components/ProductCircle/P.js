import styled from "styled-components"

const P = styled.p ` 
  padding-left: 8px;
  font-size: 3.2vw;
  transform: translateX(-70vw);
  transition: transform .6s 1s;

  ${({theme})=>theme.media.tablet}{
      font-size: 1vw;
  }
`

export default P;