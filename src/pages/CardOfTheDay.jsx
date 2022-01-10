import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Card from '../components/deck/Card'
import Title from '../components/Title'
import { deckInfo } from '../components/deck/data/card-info'

const DaySt = styled.section``

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardOfTheDay = () => {

  const [dayCard, setDayCard] = useState('cardBack')

  function getDayCard() {
    const randomCard =  Math.floor(Math.random() * 79);
    setDayCard(deckInfo[randomCard].cardName);
  }

  return (
    <DaySt>
      <Header>
         <Link to={'/'}><i className="far fa-arrow-alt-circle-left icon"></i></Link>
         <i className="far fa-question-circle icon"></i>
      </Header>
      <Title titleMargin='30px 0' name='Карта дня' />   
      <Card func={getDayCard} cardNumber={dayCard} type='daily'/>
    </DaySt>
  )
}

export default CardOfTheDay
