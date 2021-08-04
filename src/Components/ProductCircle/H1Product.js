import styled from "styled-components"

const H1Product = styled.h1` 
  position: absolute;
  opacity: 1;
  left: 60vw;
  top: 0%;  
  color: #e67817;
  font-size: 15px;
  /* text-shadow: 0px 1vw 13px rgba(230, 120, 23, 0.4); */

  transition: transform .8s .1s;

  z-index: -1;

  ${({theme}) => theme.media.tablet}{
    left: 28vw;
    top: 10%;
    font-size: 38px;
  }
`
export default H1Product