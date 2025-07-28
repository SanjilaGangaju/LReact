import React from 'react'
import './components/quizz.css'
const QuizzesDisplay = ({ questions ,message,time, currentQuestion, clicked, handleOption, handleNextQuestion, handlePrevQuestion, score, correct, handleRestart}) => {

  return (
    <div className= "quiz-wrapper">
      <h1>Quizzlers</h1>
      <p className='questions-text'>{questions[currentQuestion].question}</p>
      <div className="options-wrapper">
        
        {questions[currentQuestion].options.map(option=>
        
        <button className='options-btn' key={option} disabled={correct==="correct" || time==0? true : false} onClick={()=>handleOption(option)}>{option}</button>)}<br></br>

      </div>
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
