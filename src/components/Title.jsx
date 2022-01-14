import React from 'react'
import styled from 'styled-components';


const TitleS = styled.h1`

font-family: 'Cormorant Infant', serif;
font-size: 3rem;
text-shadow: 0 0 10px black;
text-align: center;
color: ${props => props.color ? props.color : '#ae54c7'};
margin: ${props => props.margin ? props.margin : null};
`


function Title({name, titleMargin, color}) {
  return <TitleS margin={titleMargin} color={color}>{name}</TitleS>
}

export default Title;