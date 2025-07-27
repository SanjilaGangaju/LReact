import React from 'react'

const QuizzesDisplay = ({ questions ,message,time, currentQuestion, handleOption, handleNextQuestion, handlePrevQuestion, score, correct, handleRestart}) => {
 
  return (
    <div>
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map(option=><button key={option} disabled={correct==="correct" || time==0? true : false} onClick={()=>handleOption(option)}>{option}</button>)}<br></br>
      <p>{time<=0? message: `${time} sec remaining`}</p>
      <button onClick={()=>handleNextQuestion()} 
        disabled={currentQuestion==questions.length-1? true: false}>Next</button><br></br><br></br>
      <button onClick={()=>handlePrevQuestion()} 
        disabled={currentQuestion>0?false: true}>Previous</button>
        <h1>Score:{score}</h1>
      <button onClick={()=>handleRestart()}>Restart</button>
    </div>
  )
}

export default QuizzesDisplay
