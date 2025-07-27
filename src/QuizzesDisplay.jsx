import React from 'react'

const QuizzesDisplay = ({ questions ,message, currentQuestion, handleOption}) => {
 
  return (
    <div>
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map(option=><button key={option} onClick={()=>handleOption(option)}>{option}</button>)}
      <p>You are absolutely {message}!!!!</p>
    </div>
  )
}

export default QuizzesDisplay
