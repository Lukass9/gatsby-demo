import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Logo from "../../images/log_bez_tla_biale.png"
// import { theme } from "../../utils/theme";

const StyledMenu = styled.div `    
    position: sticky;
    top: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
    height: 50px;

    /* background: linear-gradient(to bottom, rgba(204,51,0,1) 0%,rgba(205,52,0,1) 2%,rgba(255,103,15,0.8) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc3300', endColorstr='#ccff670f',GradientType=0 ); */

    z-index: 9999;
`

const Wrapp = styled.div ` 
    position: absolute;
    top: 0px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: column;
    overflow: hidden;

    background: linear-gradient(to bottom, rgba(204,51,0,1) 0%,rgba(205,52,0,1) 2%,rgba(255,103,15,0.8) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc3300', endColorstr='#ccff670f',GradientType=0 );

    height: ${(props)=> props.IsOpen ? parseInt("400") + (props.SubIsOpen ? parseInt("188") : parseInt("0") ) + "px"  : "50px" };
    transition: height .3s ease-out;

    /* :focus{
        height:400px;
    } */
  
    ${({theme}) => theme.media.desktop}{
        position: static;
        height: 50px;
        flex-flow: row;
        align-items: center;
        overflow: visible;

    }
`

const Li = styled.li ` 
    text-decoration: none;
    color: white;
    
    opacity: .6;
    position: relative;
    margin: 11px;

    transition: opacity .3s;

::before{
      content: " ";
      position: absolute;
      background-color: white;
      border-radius: 100%;
      top: 23px;
      width: 0;
      height: 2px;
      transition: width .15s ease-out, transform .15s;
    }

:hover{
    opacity: 1;
    cursor: pointer;

    ::before{
        width: 100%;
    }
}

  ${({theme}) => theme.media.desktop} {
    margin-left: 40px
  }
`

const Ul = styled.ul ` 
    user-select: none;
    display: flex;
    font-family: 'Raleway', sans-serif;
    list-style-type: none;
    padding:0;
    flex-flow: column;
    align-items: center;
    opacity: ${({showMenu}) => showMenu ? '1' : "0"};
    visibility: ${({showMenu}) => showMenu ? 'visible' : "hidden"};

    transition: opacity .5s, visibility .5s;

    ${({theme}) => theme.media.desktop}{
        flex-flow: row;
        visibility: visible;
        opacity: 1;
        margin: 0;
    }
    
`

const SubMenu = styled.ul ` 
    /* display: flex; */
    list-style-type: none;
    padding:0;
    flex-flow: column;
    background-color: white;
    border-radius: 15px;
    width: 70vw;
    color: black;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    overflow: hidden;
    height: ${({openSubMenu}) => openSubMenu ? "188px" : "0px"};
    /* height: 0px; */
    visibility: ${({openSubMenu}) => openSubMenu ? 'visible' : "hidden"};

    transition: height .3s, visibility 3s;

    ${({theme}) => theme.media.desktop} {
        position: absolute;
        width: 400px;
        top: 50px;
        left: 515px;
    }

`

const SubLi = styled.li `  
    position: relative;
    text-decoration: none;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    transition: background-color .2s;
     /* text-align: center; */
    
:hover{
    background-color: #CC3300;
    color: white;
    cursor: pointer;
}
`

const WrapperMenu = styled.div ` 
    display: flex;
    flex-flow: row;
    height: 50px;
    width: 100%;

    ${({theme}) => theme.media.desktop} {
        width: auto;
    }

`

const WrapperLogo = styled.div ` 
    display: flex;
    height: 100%;
    width: 85%;

    ${({theme}) => theme.media.desktop} {
        width: auto;
    }
`
const WrapperHamburger = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 15%;

    ${({theme}) => theme.media.desktop}{
        display: none;
    }
`

const Hamburger = styled.div ` 
    position: relative;
    background-color: white;
    border-radius: 50px;
    height: ${({IsOpen}) => IsOpen? "0px" : "2px"};
    width: 30px;

    transition: height .05s;

::after{
    content: '';
    position: absolute;
    top: ${({IsOpen}) => IsOpen? "0px" : "-8px"};
    background-color: white;
    border-radius: 50px;
    height: 2px;
    width: 30px;

    transform: ${({IsOpen}) => IsOpen? "rotate(45deg)" : "rotate(0deg)"};
    transition: transform .2s, top .2s;
}

::before{
    content: '';
    position: absolute;
    top: ${({IsOpen}) => IsOpen? "0px" : "8px"};
    background-color: white;
    border-radius: 50px;
    height: 2px;
    width: 30px;

    transform: ${({IsOpen}) => IsOpen? "rotate(-45deg)" : "rotate(0deg)"};
    transition: transform .2s, top .2s;
}

    ${({theme}) => theme.media.desktop} {
        display: none;
    }

`

const Img = styled.img `
    height: 100%;
    padding-left: 15px;
`
const P = styled.p ` 
    font-family: 'Aharoni', sans-serif ;    
    font-size: 20px;
    color:white;
`

const Hr = styled.hr ` 
    width: 100%;
    height: 1px;
    background-color: lightgrey;
    border: 0;
`
const Triangle = styled.div ` 
    position: absolute;
    top: 5px;
    left: 60px;
	border-left: 4px solid transparent;
	border-right: 4px solid transparent;
	border-bottom: 9px solid white;
    transform: ${({rotate2}) => rotate2? "rotate(0deg)" : "rotate(180deg)"};
    transition: transform .3s;
`
const AnchorLinkWithoutDecoration = styled(AnchorLink)` 
    text-decoration: none;
    color: black;
`
function Menu () {

    const [isOpen, setIsOpen] = useState(false);
    const [subIsOpen, setsubIsOpen] = useState(false);

    useEffect(  () => {
            document.onclick = (e)=>{
                if(e.target.id !== "SubMenu" && e.target.id !== "Menu"){
                    setsubIsOpen(false);
                    setIsOpen(false);
                }
            }

            if(window.top.location.pathname === "/Cennik"){
                const SubMenu = document.getElementById("SubMenu")
                SubMenu.style.opacity = "1";
            }
        }
    )
    return(  
        <>
        <StyledMenu>
            <Wrapp IsOpen = {isOpen} SubIsOpen = {subIsOpen}>
                <WrapperMenu>
                    <WrapperLogo>
                        <Img src={Logo} alt="asd"/>
                        <P> WROCLAW <b>trzebnicka</b> </P>
                    </WrapperLogo>
                    <WrapperHamburger id="Menu" onClick={() => setIsOpen(!isOpen) } >  
                        <Hamburger IsOpen = {isOpen}/>
                    </WrapperHamburger>
                </WrapperMenu>
                <Ul showMenu = {isOpen}>
                    <Li as={Link} to="/"  activeStyle={{opacity: 1,}}> Koncept SF</Li>
                    <Li as={Link} to="/StacjeZabiegowe" activeStyle={{opacity: 1,}}>Stacje zabiegowe</Li>
                        <Li id="SubMenu"  onClick={() => setsubIsOpen(!subIsOpen) } >Cennik <Triangle rotate2 = {subIsOpen}/></Li>
                        <SubMenu openSubMenu = {subIsOpen} >
                            <AnchorLinkWithoutDecoration to="/Cennik#scroll_fitwell" stripHash><SubLi>Stacje fitness & wellness</SubLi></AnchorLinkWithoutDecoration>
                            <AnchorLinkWithoutDecoration to="/Cennik#scroll_cosm" stripHash> <SubLi>Kosmetologia</SubLi> </AnchorLinkWithoutDecoration>
                            <Hr/>
                            <AnchorLinkWithoutDecoration to="/Cennik#scroll_pack" stripHash><SubLi>Pakiety</SubLi></AnchorLinkWithoutDecoration>
                            <Hr/>
                            <AnchorLinkWithoutDecoration to="/Cennik#scroll_sup" stripHash><SubLi>Kosmetyki i suplementy</SubLi></AnchorLinkWithoutDecoration>
                        </SubMenu>
                    <Li as={Link} to="/Promocje">Promocje</Li>
                    <Li>Wspomnienia ;)</Li>
                    <Li as={Link} to="/Wskazowki">Wskazówki</Li>
                    <Li>Kadra</Li>
                    <Li>Kontakt</Li>
                </Ul>         
            </Wrapp>
        </StyledMenu>
        </>
    )
}

export default Menu;