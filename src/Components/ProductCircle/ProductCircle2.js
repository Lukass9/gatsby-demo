import styled from "styled-components"
import ProductSlide from "./ProductSlide"
import ProductPrice from "./ProductPrice"
import H1 from "./H1"
import P from "./P"
import H1Product from "./H1Product"

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
  transform: perspective(200px);
  transition: margin 1.2s;

  & img{
    transform: scale(0.85);
  }

  

  ${({ theme }) => theme.media.tablet}{
      width: 13vw;
      height: 13vw;
      margin: 1vw 10vw;
      
      /* margin-bottom: 20vw; */

  }

  :hover{
    /* margin-bottom: 200px; */

    ${({theme})=>theme.media.tablet}{
      /* margin-bottom: 6%; */
    }

    /* & ~ ${ProductSlide} {
        width: 60vw;
        height: 80vw;

        transition:   width .6s .3s, 
                      height .6s .9s;
        
        ${({theme})=>theme.media.tablet}{
          width: 40vw;
          height: 17vw;
        }

        ${H1} {
          transform: translateX(-1vw);
        }

        ${P}{
          transform: translateX(0);
        }
    } */

  }
  
  :focus{
     border: 1px inset orange;
     /* margin-bottom: 50%; 

     ${({theme})=>theme.media.tablet}{ 
       margin-bottom: 6%; 
    } 

     & ~ ${ProductSlide} {
          width: 60vw;
          height: 80vw; 
               box-shadow: inset -100px -250px 50px -280px rgba(230,119,23,1); 

         ${({theme})=>theme.media.tablet}{
          width: 40vw;
          height: 17vw;
        }

        ${H1} {
          transform: translateX(-1vw);
        }

        ${P}{
          transform: translateX(0);
        }
    /* } */
   }  

`
export default Circle;