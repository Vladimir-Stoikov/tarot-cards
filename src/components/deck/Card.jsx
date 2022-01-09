import React from 'react'
import styled from 'styled-components'
import {deckInfo} from './data/card-info'

const CardImg = styled.img`
border-radius: 10px;
width: 255px;
height: 450px;
object-fit: cover;
box-shadow: 0 0 10px #753188;
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

export default function Card({cardNumber, time, type}) {

  let cardInfo = '';

  if(cardNumber) {
    cardInfo = deckInfo.filter(card => card.cardName === cardNumber);
  };

  if(!cardNumber) return null;


  return <CardSt>
            <CardImg src={`/tarot/${cardNumber || 'cardBack'}.jpg`} alt="image" draggable={false} />
            <CardText>{cardNumber ? cardInfo[0][type] : null}</CardText>
          </CardSt>;
}