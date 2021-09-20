import React from "react";
import styled from "styled-components";


const WindowWrappFixed = styled.div ` 
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: transparent;
    z-index: 100000;
`

const WindowModal = styled.div ` 
    
`

const Modal = ({onClick, img}) => {

    return(
    <>
        <WindowWrappFixed onClick={onClick}>
            <WindowModal>
                {img}
            </WindowModal>
        </WindowWrappFixed>
    </>
    )
}

export default Modal;
