import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const LayoutS = styled.section`
margin: 50px auto;
width: 700px;
display: flex;
justify-content: space-between;
`


export default function CardsLayout() {

  const [problem, setProblem] = useState('');
  const [impact, setImpact] = useState('');
  const [result, setResult] = useState('');
  const [takeAction, setTakeAction] = useState('');


  return <LayoutS>
         <Card />
         <Card />
         <Card />
         </LayoutS>
}