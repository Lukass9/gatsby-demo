import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'



const Wrapper = styled.div ` 
    color: black;
    display: flex;
    flex-flow: column;
    align-items: center;
`

const WrapperSocialMedia = styled.div ` 
    ${({theme}) => theme.media.desktop} {
        display: flex;
        flex-flow: row;
    }

`
const Facebook = styled.div ` 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    width: 300px;
	height: 100px;
	margin: 0px;
	text-align: center;

    :hover{
        background-color: #4668b3;
	    color: white;
    }
`
const Instagram = styled(Facebook)` 
    :hover{
        background-color:#f09433;
        color: white;
        background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    }
`

const Footer = () => (
    <Wrapper>
        <WrapperSocialMedia>
            <Facebook> <FontAwesomeIcon icon={faFacebookF} /> </Facebook>
            <Instagram> <FontAwesomeIcon icon={faInstagram} /> </Instagram>
        </WrapperSocialMedia>
        <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021 Projekt i realizacja Łukasz Pisarek</p>
    </Wrapper>
)

export default Footer