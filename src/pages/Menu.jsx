import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const LinkGroup = styled.section`
display: flex;
flex-direction: column;
list-style: none;
text-align: center;
margin: 20% auto 0;
a {
  font-size: 3rem;
  background: #753188;
  margin: 5px;
  padding: 30px 30px;
  color: white;
  transition: all 0.3s ease;
  border: none;
  width: 100%;
}
a:hover {
  background: #9b47b3;
}
a:active {
  background: #ae54c7;
}
a:first-child {
 border-top-left-radius: 60px;
 border-top-right-radius: 60px;
}
a:last-child {
 border-bottom-left-radius: 60px;
 border-bottom-right-radius: 60px;
}
a {
  text-decoration: none;
  user-select: none;
}
@media(max-width: 1100px) {
  width: 70%;
}
@media(max-width: 790px) {
  margin: 40% auto 0;
  height: 100vw;
  width: 80%;
  overflow: none;
  a {
    font-size: 1.8rem;
  }
 }
`

export default function Menu() {
  return <>
    <LinkGroup className={'menu'}>
     <Link to='/ThreeCardSpread'>Расклад на три карты</Link>
     <Link to='/CardOfTheDay'>Карта дня</Link>
     <Link to='/AdviceAndCaution'>Совет и предостережение</Link>
    </LinkGroup>
   </>
}