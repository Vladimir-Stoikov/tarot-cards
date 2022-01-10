import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const UlStyled = styled.ul`
list-style: none;
text-align: center;
margin-top: 40%;
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
a {
  text-decoration: none;
  font-size: 3rem;
  user-select: none;
}
a:link, a:visited {
  color: white;
}
@media(max-width: 1100px) {
  margin: auto;
}
@media(max-width: 790px) {
  height: 100vw;
  width: 80%;
  overflow: none;
  a {
    font-size: 2rem;
  }
 }
`

export default function Menu() {
  return <>
    <UlStyled className={'menu'}>
     <li><Link to='/ThreeCardSpread'>Расклад на три карты</Link></li>
     <li><Link to='/CardOfTheDay'>Карта дня</Link></li>
     <li><a href='#'>Совет и предостережение</a></li>
    </UlStyled>
   </>
}