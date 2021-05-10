import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


const StickyWrapp = styled.div ` 
    position: sticky;
    width: 50px;
    height: 0px;
    top: 70%;
    margin-left: 10px;
    z-index: 20;
`

const Fb = styled.div ` 
    display: flex;
    align-items: center;
    justify-content: center;
    width:45px;
	height: 45px;
    border-radius: 35px;

    opacity: 0.3;
    font-size: 25px;
    color: black;
	
	transition: opacity ease-out .3s ,
        color ease-out .3s,
        transform ease-out .5s;

    :hover{
        opacity:1;
        background-color: #4668b3;
        color: white;
        transform: translateX(10px);
    }

`
const Inst = styled(Fb) ` 

    :hover{
        background-color: #f09433;
        background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
	    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );

    }
`

const StickyMedia = () => (
    <StickyWrapp>
        <Fb>  <FontAwesomeIcon icon={faFacebookF} /> </Fb>
        <Inst>  <FontAwesomeIcon icon={faInstagram} /> </Inst>
    </StickyWrapp>
)



export default StickyMedia 