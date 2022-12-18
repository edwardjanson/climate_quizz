import React from 'react';
import styled from 'styled-components';


const Boolean = ({question, onAnswer}) => {

  return (
    <>
        <p>{question.question}</p>
        <button onClick={onAnswer}>{question.correct_answer}</button>
        <button onClick={onAnswer}>{question.incorrect_answers[0]}</button>
    </>
  );
}


export default Boolean;