import React, { useEffect } from "react"
import styled from "styled-components"
import { Icon, InlineIcon } from '@iconify/react';

import P from "../Styled/PIndex"

import calendarAlt from '@iconify/icons-fa-solid/calendar-alt';
import calendarCheck from '@iconify/icons-fa-solid/calendar-check';
import femaleIcon from '@iconify/icons-fa-solid/female';
import scissorsIcon from '@iconify/icons-entypo/scissors';
import smileBeam from '@iconify/icons-fa-solid/smile-beam';
import { theme } from "../../utils/theme";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConceptWrapp = styled.section` 
  display: flex;
  flex-direction: column;
  font-size: 50px;
  padding-left: 10px;

${({ theme }) => theme.media.tablet}{
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-column-gap: .5vw;
    grid-row-gap: .5vw; 
}
`
const RowWrapp = styled.div` 
  display: flex;
  flex-flow: row;
  z-index: 10;
  background-color: white;

${({ theme }) => theme.media.tablet}{
    box-shadow: 0px 4px 10px 0px #E67817;
    padding: 5% 8%;
    border-radius: 2.5vw;

    grid-area: 1 / 4 / 5 / 8;  
    & + div{
        grid-area: 1 / 8 / 5 / 12; 
    }
    & + div + div{
        grid-area: 5 / 4 / 9 / 8;  
    }
    & + div + div + div{
        grid-area: 5 / 8 / 9 / 12;  
    }
    & + div + div + div + div{
        grid-area: 9 / 6 / 13 / 10;  
    }

    & > p{
        width: auto;
        padding-top: 2vw;
        font-size: 1.6vw;
    }
}
`
const ICons = styled(Icon)` 
  margin: 10px 5px;
  color: #E67817;
  text-shadow: 2px 2px black;
  width: 50px;
  height: 50px;

${({ theme }) => theme.media.tablet}{
    width: 8vw;
    height: 8vw;
    margin-right: 1.2vw;
}
`

const Concept = () => {
    useEffect(()=> {
        const divSelectors = document.querySelectorAll('.ConceptAnimation');

        if(window.innerWidth < 1024){
            divSelectors.forEach(element => {
                gsap.fromTo(element.children, {scale: 3, filter: "blur(12px)", opacity: 0}, 
                {scale: 1, opacity: 1, filter: "blur(0px)", stagger: 0.2, duration: 1, ease: 'easeInOut', 
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    // markers: true,
                }})
            });
        }
        else{
            // divSelectors.forEach(element => {
                gsap.fromTo(".ConceptAnimation", {scale: 1, filter: "blur(12px)", opacity: 0}, 
                {scale: 1, opacity: 1, filter: "blur(0px)", stagger: .8, duration: 1, ease: 'easeInOut', 
                scrollTrigger: {
                    trigger: ".ConceptAnimation",
                    // start: 'top bottom',
                }})
            // });
        }
    } )
    
    return (
        <ConceptWrapp>
            <RowWrapp className = "ConceptAnimation">
                <ICons icon={calendarAlt} />
                <P>Zadzwoń i sprawdź wolny termin</P>
            </RowWrapp>
            <RowWrapp className = "ConceptAnimation">
                <ICons icon={calendarCheck} />
                <P>Umów się na dogodny dla Ciebie dzień</P>
            </RowWrapp>
            <RowWrapp className = "ConceptAnimation">  
                <ICons icon={femaleIcon} />
                <P>Przyjdź na bezpłatną konsultację</P>
            </RowWrapp>
            <RowWrapp className = "ConceptAnimation">
                <ICons icon={scissorsIcon} />
                <P>Zostaw nam swoje kilogramy</P>
            </RowWrapp>
            <RowWrapp className = "ConceptAnimation">
                <ICons icon={smileBeam} />
                <P>Ciesz się swoją nową figurą</P>
            </RowWrapp>
        </ConceptWrapp>
    )
}
export default Concept;