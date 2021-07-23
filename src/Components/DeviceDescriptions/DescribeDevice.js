import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"


const DescribeDevice = styled.div `
  margin-bottom: 20px;
  width: 100%;

  ${({theme}) => theme.media.tablet}{
      padding: 0 15%;

      :hover{
        > div{
          transform: ${({isEven}) => isEven? "scale(1.2) translateX(25px)" : "scale(1.2) translateX(-25px)" };
        }
      }
    }

  
`

const H2 = styled.h2 ` 
    font-size: 6vw;
    font-weight: 500;
    color: #e67817;

    text-align: ${({isEven}) => isEven? "end" : "start"};
    

    ${({theme}) => theme.media.desktop}{
      font-size: 1.4vw;
    }
`

const P = styled.p ` 
  padding: 0px 20px;
  text-align: justify;
  z-index: 5;
`

const GatsbyImg = styled(Img) ` 
  border-radius: 50%;
  float: ${({isEven}) => isEven? "right" : "left" };

  shape-outside: ellipse(160px 150px at 35% 30%);
  transform:  ${({isEven}) => isEven? "translateX(10vw)" : "scale(.9) translateX(-10vw)" };
  transition: transform 0.5s;
  
  ${({theme}) => theme.media.tablet}{
    shape-outside: none;
    transform: scale(1) translateX(0px);
    /* ${DescribeDevice}:hover &{
      transform: ${({isEven}) => isEven? "translateX(25px)" : "translateX(-25px)" };
    } */
  }

  z-index: 0;
`

const DescribeDevice2 = ( {img, data, onClick, isEven} ) =>(
    <DescribeDevice
      isEven = {isEven} 
      onClick = {onClick}>
        <GatsbyImg 
          isEven = {isEven} 
          fixed = { img } 
          alt={ data.shortName}/>
        <H2 isEven = {isEven}> {data.deviceName} </H2>
        <P> {data.deviceDescription} </P>
    </DescribeDevice>
)

export default DescribeDevice2