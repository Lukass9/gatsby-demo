import * as React from "react"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"


import Circle2 from "./ProductCircle2"
import ProductPrice from "./ProductPrice"
import ProductSlide from "./ProductSlide"

import PriceTag from "../../images/entypo_price-tag.svg"


const Wrapp = styled.div` 
  position: relative;
  z-index: 1;
`
const H1Product = styled.h1` 
  position: absolute;
  opacity: 0;
  left: 8vw;
  top: 8%;  
  color: #e67817;
  font-size: 20px;

  transition: transform .4s .4s,
              opacity .5s .3s;

  z-index: -1;

  ${({theme}) => theme.media.tablet}{
    font-size: 32px;
  }
`
const CircleShape = styled.div ` 
  border-radius: 100%;
  width: 35vw;
  height: 35vw;
  float:left;
  shape-outside: circle(53% at -5px 39px);

  ${({theme})=> theme.media.tablet}{
    shape-outside: circle(19% at -5px 39px);
  }
`
const cena = "169 zł";
const opis = "Młody jęczmień to bogaty w witaminy i minerały suplement w formie płynnej, składający się z bioaktywnego ekstraktu z dodatkiem soku z jabłek oraz ksylitolu. Jest produktem całkowicie naturalnym mającym na celu  przyspieszenie przemiany materii oraz detoksykację organizmu, co w znaczący sposób wpływa na spalanie  zbędnej tkanki tłusczowej. Najlepiej stosować w połączeniu z Go Clean.";


const WrappCircle = ( { img } ) => (
    <Wrapp>
        <Circle2>
            {img}
        </Circle2>
        <H1Product> Młody Jęczmień </H1Product>

        <ProductPrice>
            <img src={PriceTag} />
            <p> {cena} </p>
        </ProductPrice>

        <ProductSlide>
            <CircleShape />
            <h1> Młody Jęczmień </h1>
            <p> {opis} </p>
        </ProductSlide>
    </Wrapp>
)

export default WrappCircle;

