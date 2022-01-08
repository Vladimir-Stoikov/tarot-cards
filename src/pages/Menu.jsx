import React from 'react'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom';

import ThreeCardSpread from './ThreeCardSpread'

const UlStyled = styled.ul`
list-style: none;
text-align: center;
li:first-child {
 border-top-left-radius: 60px;
 border-top-right-radius: 60px;
}
li:last-child {
 border-bottom-left-radius: 60px;
 border-bottom-right-radius: 60px;
}
li {
  background: #753188;
  margin: 5px;
  padding: 30px 40px;
  transition: all 0.3s ease;
}
li:hover {
  background: #9b47b3;
}
li:active {
  background: #ae54c7;
}
a:link, a:visited {
  color: white;
  text-decoration: none;
  font-size: 3rem;
  user-select: none;
}
`

export default function Menu() {
  return <>
    <UlStyled className={'menu'}>
     <li><Link to='/ThreeCardSpread'>Расклад на три карты</Link></li>
     <li><a href='#'>Карта дня</a></li>
     <li><a href='#'>Совет и предостережение</a></li>
    </UlStyled>
   </>
}