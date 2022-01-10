import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Card from '../components/deck/Card'
import { deckInfo } from '../components/deck/data/card-info'


const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
`

const CardGroup = styled.section`
  display: flex;
  justify-content: center;
   @media(max-width: 1700px) {
    width: 90vw;
  }
  @media(max-width: 1200px) {
    width: 100vw;
  }

  @media(max-width: 1100px) {
    flex-direction: column;
  }
`

const AdviceAndCaution = () => {

  const [advice, setAdvice] = useState('cardBack')
  const [caution, setCaution] = useState('cardBack')

  function getAdvice() {
    let randomCard = Math.floor(Math.random() * 79);
    while(randomCard == caution) {
      randomCard = Math.floor(Math.random() * 79);
    }
    if(advice === 'cardBack') setAdvice(deckInfo[randomCard].cardName);
  }

  function getCaution() {
    let randomCard = Math.floor(Math.random() * 79);
    while(randomCard == advice) {
      randomCard = Math.floor(Math.random() * 79);
    }
    if(caution === 'cardBack') setCaution(deckInfo[randomCard].cardName);
  }

  return (
    <section>
      <Header>
         <Link to={'/'}><i className="far fa-arrow-alt-circle-left icon"></i></Link>
         <i className="far fa-question-circle icon"></i>
      </Header> 
      <CardGroup>
        <Card headTitle='Совет' func={getAdvice} cardNumber={advice} type='advice'/>
        <Card headTitle='Предостережение' func={getCaution} cardNumber={caution} type='advice'/>
      </CardGroup>
    </section>
  )
  
}

export default AdviceAndCaution
