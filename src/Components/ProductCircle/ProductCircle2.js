import styled from "styled-components"

const Circle = styled.button` 
  position: relative;
  width: 35vw;
  height: 35vw;
  margin: 3vw 10vw;
  border-radius: 100%;
  background-color:#eee;
  outline: none;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: margin 1.2s;

  ${({ theme }) => theme.media.tablet}{
      width: 13vw;
      height: 13vw;
      margin: 1vw 10vw;
  }

  :hover{
    margin-bottom: 50%;
  
    ${({theme})=>theme.media.tablet}{
      margin-bottom: 6%;
    }
    & + h1 + div {
      transform:  rotate(60deg) translateY(60%);
    }

    & + h1 + div + div {
        width: 60vw;
        height: 80vw;

        transition:   width .6s .3s, 
                      height .6s .9s;
        
        ${({theme})=>theme.media.tablet}{
          width: 40vw;
          height: 17vw;
        }

        & > h1{
          transform: translateX(0);
        }

        & > p{
          transform: translateX(0);
        }
    }

  }
  
  :focus{
    border: 1px inset orange;
    margin-bottom: 50%;

    ${({theme})=>theme.media.tablet}{
      margin-bottom: 6%;
    }
    & + h1 + div {
      transform:  rotate(60deg) translateY(60%);
    }

    & + h1 + div + div {
          width: 60vw;
          height: 80vw;

        ${({theme})=>theme.media.tablet}{
          width: 40vw;
          height: 17vw;
        }

        & > h1{
          transform: translateX(0);
        }

        & > p{
          transform: translateX(0);
        }
    }
  }

`
export default Circle;