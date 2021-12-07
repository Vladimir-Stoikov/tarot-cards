import React from 'react'
import styled from 'styled-components'

const CardS = styled.img`
border-radius: 10px;
width: 255px;
height: 450px;
object-fit: cover;
box-shadow: 0 0 10px #753188;
`

export default function Card({cardNumber}) {
  return <CardS src={`/tarot/${cardNumber || 'cardBack'}.jpg`} alt="image" />;
}