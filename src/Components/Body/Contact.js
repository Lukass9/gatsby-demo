import React from "react"
import styled from "styled-components"

import { Icon, InlineIcon } from '@iconify/react';
import phoneAlt from '@iconify/icons-fa-solid/phone-alt';
import envelopeIcon from '@iconify/icons-fa-solid/envelope';
import clockIcon from '@iconify/icons-fa-solid/clock';
import mapMarkerAlt from '@iconify/icons-fa-solid/map-marker-alt';

const FlexWrappLeft = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-items: flex-start;

  ${({ theme }) => theme.media.tablet}{
    display: grid;
    grid-template-columns: .25fr repeat(2, 1fr) .25fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px; 
    justify-items: start;
    
  }
`

const H1Header = styled.h1` 
  /* position: absolute; */
  width: 100%;
  text-align: center;
  font-family: Aharoni;
  font-size: 12vw;
  color: #E67817;
  text-shadow: 0px 4px 4px #00000040;
  /* top: -2.2%; */
  z-index: 5;

  ${({ theme }) => theme.media.tablet}{
    font-size: 5vw;
    grid-area: 1 / 2 / 2 / 4; 
  }
`
const RowWrappContact = styled.div` 
  display: flex;
  flex-flow: row;
  margin: 2vw 5vw;

  ${({ theme }) => theme.media.tablet}{
    margin: 0px;
    padding-left: 5vw;
    grid-area: 2 / 2 / 3 / 3;
    &+div{ grid-area: 2 / 3 / 3 / 4; } 
    &+div+div{ grid-area: 3 / 2 / 4 / 3; } 
    &+div+div+div{ grid-area: 3 / 3 / 4 / 4; }
  }
`
const ICons = styled(Icon)` 
  margin: 10px 5px;
  color: #E67817;
  text-shadow: 2px 2px black;
  width: 50px;
  height: 50px;

  ${({ theme }) => theme.media.tablet}{
    width: 3.5vw;
    height: 3.5vw;
  }
`
const Pcontact = styled.p` 
  display: flex;
  align-items: center;
  color: #E67817;
  margin: 5vw;
  font-size: 5vw;

  ${({ theme }) => theme.media.tablet}{
      margin: 0 2vw;
      font-size: 2vw;
    }
`

const PcontactPhone = styled(Pcontact)` 
    font-size: 7vw;
    letter-spacing: .5vw;

    ${({ theme }) => theme.media.tablet}{
      font-size: 2.5vw;
    }
`

const RowWrapp = styled.div` 
  display: flex;
  flex-flow: row;
`

const Contact = () => (
  <FlexWrappLeft>

    <H1Header>Nie zwlekaj</H1Header>
    <RowWrappContact>
      <ICons icon={phoneAlt} />
      <PcontactPhone>531 884 716</PcontactPhone>
    </RowWrappContact>

    <RowWrappContact>
      <ICons icon={envelopeIcon} />
      <Pcontact>trzebnicka54@gmail.com</Pcontact>
    </RowWrappContact>

    <RowWrappContact>
      <ICons icon={clockIcon} />
      <RowWrapp>
        <Pcontact>Pon-Pt   <br /> Sob.   </Pcontact>
        <Pcontact> 8:00-21:00 <br /> 9:00 - 14:00 </Pcontact>
      </RowWrapp>
    </RowWrappContact>

    <RowWrappContact>
      <ICons icon={mapMarkerAlt} />
      <Pcontact>Trzebnicka 54 <br /> 50-231 Wrocław</Pcontact>
    </RowWrappContact>

  </FlexWrappLeft>
)

export default Contact