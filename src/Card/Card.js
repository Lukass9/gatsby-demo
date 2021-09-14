import React from "react";
import styled from "styled-components";



const Card = styled.div` 
    position: relative;
    display: flex;
    justify-content: center;
    width: 82vw;
    height: 50vh;
    background: #F1F1F1;
    margin: 2vh;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: ${props => props.rotate};
`

const WrappImage = styled.div ` 
    /* display: flex; */
    width: 100%;
    height: 75%;
    margin: 5%;
    background-color: white;
    overflow: hidden;
    /* justify-content: center;
    align-items: center; */
`

const PolaroidCard = ({img, rotate})=> {
    return(
        <Card rotate = {rotate}>
            <WrappImage>
                {img}
            </WrappImage>
        </Card>
    )
}
export default PolaroidCard