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
`

const CardLayout = styled.section`
section {
  margin: 20px auto;
}

`

const CardOfTheDay = () => {

  const [dayCard, setDayCard] = useState('cardBack');
  const [infoClass, setInfoClass] = useState('info-disable');

  function getDayCard() {
    const randomCard =  Math.floor(Math.random() * 78);
    if(dayCard === 'cardBack') setDayCard(deckInfo[randomCard].cardName);
  }

  function showInfo() {
    setInfoClass(prev => prev === 'info-disable' ? 'info-active' : 'info-disable');
  }

  return (
    <CardLayout>
      <Header>
         <Link to={'/'}><i className="far fa-arrow-alt-circle-left icon"></i></Link>
         <i className="far fa-question-circle icon" onClick={showInfo}></i>
      </Header>
      <section className={infoClass}>
        {info.CardOfTheDay}
        <i className="fas fa-times close-info" onClick={showInfo}></i>
      </section> 
      <Card headTitle='Карта дня' func={getDayCard} cardNumber={dayCard} type='daily'/>
    </CardLayout>
  )
}

export default CardOfTheDay
