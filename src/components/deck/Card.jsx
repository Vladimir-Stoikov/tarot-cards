import React from 'react'
import styled from 'styled-components'
import {deckInfo} from './data/card-info'

import Title from '../Title'

const CardSt = styled.section`
width: 30%;
text-align: center;
color: white;
@media (max-width: 1700px) {
  width: 50%;
}
@media (max-width: 1200px) {
  margin: 0 auto 20px;
  width: 80%;
}
@media(max-width: 1000px) {
  margin: 0 auto 50px;
 }
`
const CardAndInfo = styled.article`
display: flex;
justify-content: center;
@media (max-width: 650px) {
  align-items: center;
  flex-direction: column;
}
`

const CardImg = styled.img`
border-radius: 10px;
width: 255px;
height: 450px;
object-fit: cover;
box-shadow: 0 0 10px #753188;
margin-bottom: 15px;
`

const CardText = styled.div`
display: ${props => (props.display === 'cardBack') ? 'none' : 'block'};
padding: 0 10px;
text-align: justify;
height: 600px;
overflow-y: scroll;
@media (max-width: 1200px) {
  width: 60%;
}
@media (max-width: 650px) { 
  height: auto;
  width: 100%;
}
`

export default function Card({cardNumber, headTitle, type, func}) {

  let cardInfo = '';

  if(cardNumber) {
    cardInfo = deckInfo.filter(card => card.cardName === cardNumber);
  };

  if(!cardNumber) return null;

  return <CardSt>
            <Title titleMargin='0 auto 15px' name={headTitle ? headTitle : null} />
            <CardAndInfo>
            <figcaption>
            <CardImg onClick={() => func ? func() : null} src={`/tarot/${cardNumber || 'cardBack'}.jpg`} alt="image" draggable={false} />
            <Title titleMargin='0 0 15px 0' color='#E59934' name={(cardNumber !== false && cardNumber !== 'cardBack') ? cardInfo[0].name : null}/>
            </figcaption>
            <CardText display={cardNumber}>{(cardNumber !== 'cardBack') ? cardInfo[0][type] : null}</CardText>
            </CardAndInfo>
          </CardSt>;
}