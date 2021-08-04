import styled from "styled-components"


const ProductSlid = styled.div`
    position: absolute;
    overflow: auto;
    top: 8vw;
    left: 28vw;

    background-color: #eee;
    /* box-shadow: inset -100px -250px 50px -280px rgba(186,186,186,1); */
    box-shadow: -3px 3px 10px -5px rgba(0,0,0,0.75);
    width: 5px;
    height: 80px;
    overflow:  hidden;
    padding: 10px;
    border-radius: 0% 25% 25% 5%;
    z-index: -1;
    transition: height .4s, 
                width .4s .4s;

    ${({theme})=>theme.media.tablet}{
        height: 120px;
        top: 3.2vw;
        left: 17vw;
    }
    
    /* & > h1 {
        color: #e67817;
        font-size: 5vw;
        transform: translateX(-30vw);
        transition: transform .6s .6s;

        ${({theme})=>theme.media.tablet}{
            font-size: 2vw;
        }
    }

    & > p {
        padding-left: 8px;
        font-size: 3.2vw;
        transform: translateX(-70vw);
        transition: transform .6s 1s;

        ${({theme})=>theme.media.tablet}{
            font-size: 1vw;
        }
    } */
`
export default ProductSlid;