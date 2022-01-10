import React from 'react'
import styled from 'styled-components'
import {deckInfo} from './data/card-info'

import Title from '../Title'

const CardImg = styled.img`
border-radius: 10px;
width: 255px;
height: 450px;
object-fit: cover;
box-shadow: 0 0 10px #753188;
margin-bottom: 15px;
`
const CardSt = styled.section`
width: 300px;
text-align: center;
color: white;
@media(max-width: 1000px) {
  margin: 0 auto 50px;
 }
`

const CardText = styled.div`
padding-right: 5px;
text-align: justify;
height: 200px;
overflow-y: scroll;
`

export default function Card({cardNumber, time, type, func}) {

  let cardInfo = '';

  if(cardNumber) {
    cardInfo = deckInfo.filter(card => card.cardName === cardNumber);
  };

  if(!cardNumber) return null;


  return <CardSt>
            <CardImg onClick={() => func ? func() : null} src={`/tarot/${cardNumber || 'cardBack'}.jpg`} alt="image" draggable={false} />
            <Title titleMargin='0 0 15px 0' color='#E59934' name={(cardNumber !== false && cardNumber !== 'cardBack') ? cardInfo[0].name : null}/>
            <CardText>{(cardNumber !== false && cardNumber !== 'cardBack') ? cardInfo[0][type] : null}</CardText>
          </CardSt>;
}