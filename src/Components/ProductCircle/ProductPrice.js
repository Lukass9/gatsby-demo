import styled from "styled-components"


const Price = styled.div` 
    position: absolute;
    width: 25vw;
    left: 36vw;
    top: -5%;

    ${({ theme }) => theme.media.tablet}{
        left: 20vw;
        top: -3%;
        width: 8%;
    }

    & > img {
        width: 100%;
    
        & + p {
            font-size: 3.8vw;
            position: absolute;
            width: 60%;
            top: 8vw;
            left: 11vw;
            color: #e67817;
            transform: rotate(25deg);

            ${({theme})=>theme.media.tablet}{
                font-size: 1.1vw;
                top: 2.6vw;
                left: 3.5vw;
            }
        }
    }


    /* transition: transform .8s ease-out; */
    z-index: -1;
`
export default Price;