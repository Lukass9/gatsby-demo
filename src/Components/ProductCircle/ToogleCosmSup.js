import React from "react"
import styled from "styled-components"
import H1 from "../H1/H1"

const Wrapp = styled.div `
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
    width: auto;
    margin: 0px;
    padding: 0;
    font-weight: ${({isActive}) => isActive? "normal" : "800" };

${({ theme }) => theme.media.desktop}{
    height: auto;
    padding: 20px;
  }
`

const ToogleCosmSup = ({switchButton}) => {
    return(
        <Wrapp id="scroll_sup">
            {/* <H1>Kosmetyki i Suplementy</H1> */}
            <H1Edit isActive = {switchButton}> Kosmetyki </H1Edit> 
            <H1Edit isActive = {true}> i </H1Edit> 
            <H1Edit isActive = {!switchButton}> Suplementy </H1Edit>
        </Wrapp>
    )
}

export default ToogleCosmSup