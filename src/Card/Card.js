import React from "react";
import styled from "styled-components";



const Card = styled.div` 
    position:  ${props => props.position};
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    width: 82vw;
    height: 50vh;
    background: #F1F1F1;
    margin: 2vh;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: ${props => props.rotate};
    top: 0px;
    left: ${props => props.left};
    z-index: ${props => props.zIndex};
    cursor: pointer;

${({theme})=>theme.media.desktop}{
    width: 21vw;
    margin: 2vh 5vh;
}
`

const WrappImage = styled.div ` 
    /* display: flex; */
    width: 90%;
    height: 75%;
    margin: 5%;
    background-color: white;
    overflow: hidden;
    /* justify-content: center;
    align-items: center; */
`

const Title = styled.p `
    text-align: center;
    color: #e67817;
    margin: 0;
    font-weight: bold;
`

const PolaroidCard = ({img, rotate, title, position, zIndex, left, onClick})=> {
    return(
        // <Card left = {left} zIndex= {zIndex} rotate = {  "rotate(" + setRandomRotateCard() +"deg)" } position = {position}>
        <Card onClick= {onClick} left = {left} zIndex= {zIndex} rotate = { rotate } position = {position}>
            <WrappImage>
                { img }
            </WrappImage>
            <Title> { title } </Title>
        </Card>
    )
}
export default PolaroidCard