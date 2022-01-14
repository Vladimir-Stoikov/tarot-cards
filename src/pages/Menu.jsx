import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const LinkGroup = styled.section`
display: flex;
flex-direction: column;
list-style: none;
text-align: center;
margin: 50% auto 0;
transform: translateY(-15%);
box-shadow: 0 0 100px black, inset 0 0 100px black;
border-radius: 60px;
a {
  font-family: 'Cormorant Infant', serif;
  font-size: 3rem;
  background-color: #753188;
  background-image: url("https://www.transparenttextures.com/patterns/rocky-wall.png");
  margin: 5px 0;
  padding: 30px 30px;
  color: white;
  transition: all 0.3s ease;
  border: none;
  text-decoration: none;
  user-select: none;
  width: 100%;
}
a:hover {
  margin: 15px 0;
  background-color: #9b47b3;
  box-shadow: 0 0 100px #ae54c7, 0 0 10px #671281, inset 0 0 10px #671281;
  transform: scale(1.05);
  
}
a:active {
  background: #ae54c7;
}
a:first-child {
 border-top-left-radius: 60px;
 border-top-right-radius: 60px;
 margin: 0;
}
a:first-child:hover {
  margin-bottom: 15px;
 }
a:last-child {
 border-bottom-left-radius: 60px;
 border-bottom-right-radius: 60px;
 margin: 0;
}
a:last-child:hover {
  margin-top: 15px;
 }

@media(max-width: 1100px) {
  width: 70%;
  transform: translateY(-30%);
}
@media(max-width: 600px) {
  transform: translateY(-10%);
  width: 90%;
  overflow: none;
  a {
    font-size: 2.5rem;
  }
 }
@media(max-width: 450px) {
  transform: translateY(-10%);
  width: 80%;
  overflow: none;
  a {
    font-size: 2.3rem;
  }
 }
@media(max-width: 400px) {
  a {
    font-size: 1.5rem;
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