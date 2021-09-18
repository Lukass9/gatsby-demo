import React from "react";
import styled from "styled-components";
import Card from "./Card"

const Wrapp = styled.div ` 
    position: relative;
    transform: translateX(8%);
`
function showCards(imgs){
    let rotate = 0;
    let zIndex = 3;
    let left = 0;
    const cards = imgs.slice(0, 3);

    return cards.map(card=>(
        <Card 
            left= { (left-=16) + "px" }  // 
            rotate= { "rotate("+ (rotate-=2) +"deg)"} // efekt rozłożonych kart 
            zIndex= {zIndex-=1} // karta jedna pod drugą 
            position= {"absolute"}
            img ={ <img style = {{height: "100%", width: "100%", objectFit: "cover"}}
                alt= {card.alt}
                src= {card.url}/> } 
        />
    ))    
}

const GroupCards = ({imgs, mainImg, rotate, title, onClick})=> {
    return(
        <Wrapp onClick = {onClick}>
            <Card
                zIndex = {4}
                position = {"relative"}  
                rotate = {rotate} 
                img ={<img  style = {{height: "100%", width: "100%", objectFit: "cover"}} 
                            src= {mainImg} />}
                title={title}
            />
            { showCards(imgs) }
        </Wrapp>
    )
}
export default GroupCards