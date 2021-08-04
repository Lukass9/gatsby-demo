import * as React from "react"
import styled from "styled-components"


import Circle2 from "./ProductCircle2"
import ProductPrice from "./ProductPrice"
import ProductSlide from "./ProductSlide"
import H1 from "./H1"
import P from "./P"
import H1Product from "./H1Product"

import PriceTag from "../../images/entypo_price-tag.svg"

const Wrapp = styled.div` 
  display: flex;
  position: relative;
  z-index: 1;
`
const CircleShape = styled.div ` 
  border-radius: 100%;
  width: 35vw;
  height: 35vw;
  float:left;
  shape-outside: circle(53% at -5px 39px);

  ${({theme})=> theme.media.tablet}{
    shape-outside: circle(25% at -0.45vw 2vw);
  }
`

// const H1 = styled.h1 ` 
//   color: #e67817;
//   font-size: 5vw;
//   transform: translateX(-30vw);
//   transition: transform .6s .6s;

//   ${({theme})=>theme.media.tablet}{
//       font-size: 2vw;
//   }
// `

// const P = styled.p ` 
//   padding-left: 8px;
//   font-size: 3.2vw;
//   transform: translateX(-70vw);
//   transition: transform .6s 1s;

//   ${({theme})=>theme.media.tablet}{
//       font-size: 1vw;
//   }
// `
 

const WrappCircle = ( { img , Suplement } ) => (
    <Wrapp>
        <Circle2>
            {img}
        </Circle2>
        <H1Product> {Suplement.name} </H1Product>

        <ProductPrice>
            <img src={PriceTag} alt= {Suplement.alternative} />
            <p> {Suplement.price} </p>
        </ProductPrice>

        <ProductSlide>
            <CircleShape />
            <H1>{Suplement.name} </H1>
            <P> {Suplement.description} </P>
        </ProductSlide>
    </Wrapp>
)

export default WrappCircle;

