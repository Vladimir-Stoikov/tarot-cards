import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Card from '../components/deck/Card'
import { deckInfo } from '../components/deck/data/card-info'

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

  const [dayCard, setDayCard] = useState('cardBack')

  function getDayCard() {
    const randomCard =  Math.floor(Math.random() * 79);
    if(dayCard === 'cardBack') setDayCard(deckInfo[randomCard].cardName);
  }

  return (
    <CardLayout>
      <Header>
         <Link to={'/'}><i className="far fa-arrow-alt-circle-left icon"></i></Link>
         <i className="far fa-question-circle icon"></i>
      </Header> 
      <Card headTitle='Карта дня' func={getDayCard} cardNumber={dayCard} type='daily'/>
    </CardLayout>
  )
}

export default CardOfTheDay
