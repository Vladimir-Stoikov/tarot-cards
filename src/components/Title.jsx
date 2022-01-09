import React from 'react'
import styled from 'styled-components';


const TitleS = styled.h1`
font-family: 'Neucha', cursive;
font-size: 3rem;
color: #ae54c7;
text-align: center;

`


function Title({name}) {
  return <TitleS>{name}</TitleS>
}

export default Title;