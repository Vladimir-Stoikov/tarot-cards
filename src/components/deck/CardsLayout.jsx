import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const LayoutS = styled.section`
margin: 50px 0;
width: 90vw;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
@media(max-width: 1000px) {
  width: 100%;
  flex-direction: column;
  justify-content: center;
}
`

const DeckS = styled.img`
border-radius: 10px;
width: 255px;
height: 450px;
object-fit: cover;
box-shadow: 0 0 10px #753188;
@media(max-width: 1000px) {
  margin: 0 auto;
 }
`


export default function CardsLayout({type, func}) {

  const deck = ['Ar00','Ar01','Ar02','Ar03','Ar04','Ar05','Ar06','Ar07','Ar08','Ar09','Ar10','Ar11','Ar12','Ar13','Ar14','Ar15','Ar16','Ar17','Ar18','Ar19','Ar20','Ar21', 'Cu02', 'Cu03','Cu04','Cu05','Cu06','Cu07','Cu08','Cu09','Cu10','Cuac','Cuki','Cukn','Cupa', 'Cuqu', 'Pe02','Pe03','Pe04','Pe05','Pe06','Pe07','Pe08','Pe09','Pe10','Peac','Peki','Pekn','Pepa', 'Pequ','Sw02','Sw03','Sw04','Sw05','Sw06','Sw07','Sw08','Sw09','Sw10','Swac','Swki','Swkn','Swpa','Swqu', 'Wa02','Wa03','Wa04','Wa05','Wa06','Wa07','Wa08','Wa09','Wa10','Waac','Waki','Wakn','Wapa', 'Waqu',];

  const [shuffledDeck, setShuffledDeck] = useState('');
  const [disable, setActive] = useState('');

  function ShuffleDeck() {
    let shuffled = deck    
      .map(card => ({card, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({card}) => card)
    setShuffledDeck(shuffled);
    setActive('disable');
  };

  function multiMove() {
    ShuffleDeck();
    func();
  }

  // const [current, setCurrent] = useState('');
  // const [progress, setProgress] = useState('');
  // const [result, setResult] = useState('');
 
  return <LayoutS>
         <Card type={type} cardNumber={shuffledDeck[25] || ''}/>
         <Card type={type} cardNumber={shuffledDeck[50] || ''}/>
         <Card type={type} cardNumber={shuffledDeck[75] || ''}/>
         <DeckS className={disable} src='tarot/cardBack.jpg' onClick={multiMove}/>
         </LayoutS>
}