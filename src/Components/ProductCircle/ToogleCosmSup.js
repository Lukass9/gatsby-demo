import React from "react"
import styled from "styled-components"
import H1 from "../H1/H1"

const Wrapp = styled.div `
    position: relative;
    width: 100%;
    height: 1.7%;
    margin-top: 10%;
    margin-bottom: 10%;
    display: flex;
    background-color: #f8f9fa;
    justify-content: center;
    align-items: center;
    flex-direction: column;

${({ theme }) => theme.media.desktop}{
    width: 100%;
    height: 4.5vw;
    margin-top: 2%;
    margin-bottom: auto;
    flex-direction: row;
  }
`

const H1Edit = styled(H1) `
    user-select: none;
    width: auto;
    margin: 0px;
    padding: 0;
    font-weight: ${({isActive}) => isActive? "normal" : "800" };

    z-index: 2;
    background-color: transparent;

${({ theme }) => theme.media.desktop}{
    height: auto;
    padding: 20px;
  }
`

const Toggle = styled.div ` 
    display: flex;
    /* position: absolute; */
    width: 90%;
    height: 100%;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* padding: 10px; */

${({ theme }) => theme.media.desktop}{
    width: 100%;
    height: 4.5vw;
    /* margin-top: 2%; */
    margin-bottom: auto;
    flex-direction: row;
    width: 45%;
    cursor: pointer;
  }

    /* :after{
        content: "";
        display: block;
        width: 80%;
        height: 35%;
        background-color: #F2F2F2;
        border-radius: 50px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        transform: translateY(0%);

        z-index: 1;
    } */
`
const Switch = styled.div ` 
    display: block;
    position: absolute;
    width: 80%;
    height: 35%;
    background-color: #F2F2F2;
    border-radius: 50px;
    /* box-shadow: inset 3px 4px 4px rgba(250, 250, 250, 0.25); */
    transform: translateY(-100%);

${({ theme }) => theme.media.desktop}{
    height: 85%;
    width: 20%;
    left: 0;
    box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
    transform: translateY(0);
}
`

const ToogleCosmSup = ({switchButton, onClick, wrapper }) => {
    return(
        <Wrapp 
            ref={wrapper}
            id="scroll_sup"
            onClick={onClick}

        >
            <Toggle className ="toggle"> 
                <H1Edit isActive = {switchButton}> Suplementy </H1Edit> 
                <H1Edit isActive = {true}> i </H1Edit> 
                <H1Edit isActive = {!switchButton}> Kosmetyki </H1Edit>
                <Switch className ="switch"/>
            </Toggle>
        </Wrapp>
    )
}

export default ToogleCosmSup