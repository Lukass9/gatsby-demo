import * as React from "react"
import styled, { keyframes } from "styled-components"
import PriceTag from "../../images/entypo_price-tag.svg"


const Circle = styled.button` 
  position: relative;
  width: 25vw;
  height: 25vw;
  margin: 3vw 10vw;
  border-radius: 100%;
  background-color:#eee;
  outline: none;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  shape-outside: circle();

  transition: margin 1.2s;

  ${({theme}) => theme.media.tablet}{
      width: 13vw;
      height: 13vw;
      margin: 1vw 10vw;
  }

  ::before{
    content: " ";
    display: block;
    position: absolute;
    left: 50%;
    top: 15%;
    width: 5%;
    height: 50%;
    background-color:#eee;
    border-radius: 0 35% 5% 35%;
    z-index: -1;
    /* background-color: black; */
    transition: height .4s ease-out,
                width .4s ease-out .4s;

    ${({theme})=>theme.media.tablet}{
      border-radius: 0 55% 5% 25%;
    }

  }

  ::after{
    content: "";
    background-image: url(${PriceTag});
    background-repeat: no-repeat;
    background-size: 8vw 8vw;
    display: block;
    position: absolute;
    left: 80%;
    top: -10%;
    width: 8vw;
    height: 8vw;
    z-index: -1;

    transition: transform 1.8s;
  }

  :hover{
    ::before{
        width: 70vw;
        height: 80vw;

        transition: width .4s ease-out,
                    height .4s ease-out .4s;

        
        ${({theme}) => theme.media.tablet}{
          width: 50vw;
          height: 18vw;
        }
    }
    ::after{
      transform:  
                translateX(-80%)
                scale(0);
    }

    margin-bottom: 60vw;

    ${({theme}) => theme.media.tablet}{
      margin-bottom: 6vw;
    }

  }

  :focus{
    border: 1px inset orange;
    ::before{
        width: 70vw;
        height: 80vw;

        ${({theme}) => theme.media.tablet}{
          width: 50vw;
          height: 18vw;
        }
    }
    ::after{
        transform:  
                    translateX(-80%)
                    scale(0);
    }

    ${({theme}) => theme.media.tablet}{
      margin-bottom: 6vw;
    }
  }

  &:hover + h1{
    transition: transform .4s .6s,
              opacity .8s .6s;


    transform: translateX(80%);
    opacity: 1;

    ${({theme}) => theme.media.tablet}{
      transform: translateX(250px);
    }
  }

  &:focus + h1{
    transform: translateX(80%);
    opacity: 1;

    ${({theme}) => theme.media.tablet}{
      transform: translateX(250px);
    }
  }

  &:hover + h1 + p {
    transition: transform .4s .8s,
              opacity .8s .8s;
    
    transform: translateX(40%);
    opacity: 1;

    ${({theme}) => theme.media.tablet}{
      transform: translateX(250px);
    }
  }

  &:focus + h1 + p {  
    transform: translateX(40%);
    opacity: 1;

    ${({theme}) => theme.media.tablet}{
      transform: translateX(250px);
    }
  }

  &:hover + h1 + p + p {
    transform: scale(0);
    opacity:0;
  }
  &:focus + h1 + p + p {
    transform: scale(0);
    opacity:0;
  }
`
export default Circle;