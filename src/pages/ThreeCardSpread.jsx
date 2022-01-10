import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Title from '../components/Title';
import CardsLayout from '../components/deck/CardsLayout.jsx';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`

const RadioSt = styled.section`
text-align: center;
margin: 3% auto;
display: flex;
justify-content: center;

input {
  display: none;
}
label {
  color: white;
  font-size: 2rem;
  background: #ae54c7;
  padding: 10px;
  border-radius: 20px;
  margin: 0 0 0 15px;
  }

@media(max-width: 650px) {
    width: 80%;
    flex-direction: column;
    font-size: 1.5rem;
    margin-top: 10px;
    label { 
      margin: 10px 0;
    }
  }
}

label:hover {
  background: #c162db;
}

label:active, input:checked + label {
  background: #d17be9;
  user-select: none;
  box-shadow: 0 0 15px #c162db;
}
`

export default function ThreeCardSpread() {

  const [typeOfPrediction, setTypeOfPrediction] = useState('question');
  const [disableChoice, setDisableChoice] = useState(false);

  function ChangeType(type) {
    if(disableChoice === false) {
      setTypeOfPrediction(type);
    }
  }

  function LockChoice() {
    setDisableChoice(true);
  }
  
  return  <div className='App'>
      <Header>
         <Link to={'/'}><i className="far fa-arrow-alt-circle-left icon"></i></Link>
         <i className="far fa-question-circle icon"></i>
      </Header>
      <RadioSt>
        <Title name='Расклад на:' />
        <input disabled={disableChoice} type="radio" id='question' name='type' value='question' defaultChecked/>
        <label onClick={() => ChangeType('question')} htmlFor="question">Ситуация</label>
        <input disabled={disableChoice} type="radio" id='love' name='type' value='love'/>
        <label onClick={() => ChangeType('love')} htmlFor="love">Отношения</label>
      </RadioSt>
      <CardsLayout type={typeOfPrediction} func={LockChoice}/>
    </div>
}