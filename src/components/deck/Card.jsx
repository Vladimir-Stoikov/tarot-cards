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
`

const CardText = styled.div`
padding-right: 5px;
text-align: justify;
height: 200px;
overflow-y: scroll;
`

export default function Card({cardNumber, time}) {

  let cardInfo = '';

  if(cardNumber) {
    cardInfo = deckInfo.filter(card => card.cardName === cardNumber);
  };


  return <CardSt><CardImg src={`/tarot/${cardNumber || 'cardBack'}.jpg`} alt="image" />
            <CardText>{cardNumber ? cardInfo[0].love : ''}</CardText>
          </CardSt>;
}