import React from "react"
// import React, { useEffect } from "react"
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
  width: 25vw;
  height: 25vw;
  float:left;
  /* shape-outside: circle(53% at -5px 39px); */
  shape-outside: circle(79.23% at -10% 30%);

  ${({theme})=> theme.media.tablet}{
    width: 15vw;
    height: 15vw;
    /* shape-outside: circle(25% at -0.45vw 2vw); */
    shape-outside: circle(51.04% at -1.38vw 3.47vw);
  }
  `

const WrappCircle = ( { img , Suplement } ) => {

    return(
        <Wrapp className= "ProductWrapp">
            <Circle2 
            className= "Circle">
                {img}
            </Circle2>
            <H1Product className= "H1Product"> {Suplement.name} </H1Product>

            <ProductPrice  className= "ProductPrice">
                <img src={PriceTag} alt= {Suplement.alternative} />
                <p> {Suplement.price} </p>
            </ProductPrice>

            <ProductSlide className= "ProductSlide">
                <CircleShape />
                <H1 className= "ProductName">{Suplement.name} </H1>
                <P className= "ProductParagraph"> {Suplement.description} </P>
            </ProductSlide>
        </Wrapp>
    )
}


export default WrappCircle;

