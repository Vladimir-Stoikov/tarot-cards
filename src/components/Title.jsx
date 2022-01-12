import React from 'react'
import styled from 'styled-components';


const TitleS = styled.h1`

font-family: 'Neucha', cursive;
font-size: 3rem;
text-align: center;
color: ${props => props.color ? props.color : '#ae54c7'};
margin: ${props => props.margin ? props.margin : null};
`


function Title({name, titleMargin, color}) {
  return <TitleS margin={titleMargin} color={color}>{name}</TitleS>
}

export default Title;