import React, { useState } from "react";
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

    background: linear-gradient(to bottom, rgba(204,51,0,1) 0%,rgba(205,52,0,1) 2%,rgba(255,103,15,0.8) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc3300', endColorstr='#ccff670f',GradientType=0 );

    z-index: 9999;
`

const Wrapp = styled.div ` 
    display: flex;
    flex-flow: column;
    overflow: hidden;
    height: ${(props)=> props.IsOpen ? parseInt("400") + (props.SubIsOpen ? parseInt("188") : parseInt("0") ) + "px"  : "50px" };
    transition: height .3s ease-out;
  
    ${({theme}) => theme.media.desktop}{
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
    display: flex;
    list-style-type: none;
    padding:0;
    flex-flow: column;
    background-color: white;
    border-radius: 15px;
    width: 400px;
    color: black;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    overflow: hidden;
    height: ${({openSubMenu}) => openSubMenu ? "188px" : "0px"};
    /* height: 0px; */
    visibility: ${({openSubMenu}) => openSubMenu ? 'visible' : "hidden"};
    
    /* :focus{
        height:188px;
    } */

    transition: height .3s, visibility 3s;

    ${({theme}) => theme.media.desktop} {
        position: absolute;
        top: 50px;
        left: 515px;
    }

`

const SubLi = styled.li `  
    position: relative;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    transition: background-color .2s;
    
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
    transform: ${({rotate}) => rotate? "rotate(0deg)" : "rotate(180deg)"};
    transition: transform .3s;
`

function Menu () {

    const [isOpen, setIsOpen] = useState(false);
    const [subIsOpen, setsubIsOpen] = useState(false);

    return(  
        <>
        <StyledMenu>
            <Wrapp IsOpen = {isOpen} SubIsOpen = {subIsOpen}>
                <WrapperMenu>
                    <WrapperLogo>
                        <Img src={Logo} alt="asd"/>
                        <P> WROCLAW <b>trzebnicka</b> </P>
                    </WrapperLogo>
                    <WrapperHamburger onClick={() => setIsOpen(!isOpen) } >  
                        <Hamburger IsOpen = {isOpen}/>
                    </WrapperHamburger>
                </WrapperMenu>
                <Ul showMenu = {isOpen}>
                    <Li as={Link} to="/">Koncept SF</Li>
                    <Li as={Link} to="/StacjeZabiegowe" >Stacje zabiegowe</Li>
                        <Li onClick={() => setsubIsOpen(!subIsOpen) }>Cennik <Triangle rotate = {subIsOpen}/></Li>
                        <SubMenu openSubMenu = {subIsOpen}>
                            <AnchorLink to="/Cennik#scroll_fitwell" stripHash><SubLi>Stacje fitness & wellness</SubLi></AnchorLink>
                            <AnchorLink to="/Cennik#scroll_cosm" stripHash> <SubLi>Kosmetologia</SubLi> </AnchorLink>
                            <Hr/>
                            <AnchorLink to="/Cennik#scroll_pack" stripHash><SubLi>Pakiety</SubLi></AnchorLink>
                            <Hr/>
                            <AnchorLink to="/Cennik#scroll_sup" stripHash><SubLi>Kosmetyki i suplementy</SubLi></AnchorLink>
                        </SubMenu>
                    <Li>Promocje</Li>
                    <Li>Wspomnienia ;)</Li>
                    <Li>Wskazówki</Li>
                    <Li>Kadra</Li>
                    <Li>Kontakt</Li>
                </Ul>         
            </Wrapp>
        </StyledMenu>
        </>
    )
}

export default Menu;