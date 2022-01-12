import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Card from '../components/deck/Card'
import { deckInfo } from '../components/deck/data/card-info'
import { info } from '../components/deck/data/info'


const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
`

const CardGroup = styled.section`
  display: flex;
  justify-content:center;
  margin: 2% auto;
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

  const [advice, setAdvice] = useState('cardBack');
  const [caution, setCaution] = useState('cardBack');
  const [infoClass, setInfoClass] = useState('info-disable');

  function getAdvice() {
    let randomCard = Math.floor(Math.random() * 78);
    while(randomCard == caution) {
      randomCard = Math.floor(Math.random() * 78);
    }
    if(advice === 'cardBack') setAdvice(deckInfo[randomCard].cardName);
  }

  function getCaution() {
    let randomCard = Math.floor(Math.random() * 78);
    while(randomCard == advice) {
      randomCard = Math.floor(Math.random() * 78);
    }
    if(caution === 'cardBack') setCaution(deckInfo[randomCard].cardName);
  }

  function showInfo() {
    setInfoClass(prev => prev === 'info-disable' ? 'info-active' : 'info-disable');
  }

  return (
    <section>
      <Header>
         <Link to={'/'}><i className="far fa-arrow-alt-circle-left icon"></i></Link>
         <i className="far fa-question-circle icon" onClick={showInfo}></i>
      </Header> 
      <section className={infoClass}>
        {info.AdviceAndCaution}
        <i className="fas fa-times close-info" onClick={showInfo}></i>
        </section>
      <CardGroup>
        <Card headTitle='Совет' func={getAdvice} cardNumber={advice} type='advice'/>
        <Card headTitle='Предостережение' func={getCaution} cardNumber={caution} type='advice'/>
      </CardGroup>
    </section>
  )
  
}

export default AdviceAndCaution
