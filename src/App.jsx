import React, { use, useState } from 'react'
import QuizzesDisplay from './QuizzesDisplay'
import quizQuestions from './components/questions'
const App = () => {
  const[score, setScore]=useState(0)
  const[currentQuestion, setCurrentQuestion] = useState(0)
  const [showResult, setShowResult] = useState(0)
  const [message, setMessage] = useState("Answering");

  const handleOption=(optionValue)=>{
   
    if (optionValue===quizQuestions[currentQuestion].answer){
       setMessage("Correct")
    }
    else{
      setMessage("wrong")
    }
  }
  return (
    <div>
      <QuizzesDisplay questions={quizQuestions} message={message} currentQuestion={currentQuestion} handleOption={handleOption}></QuizzesDisplay>
    </div>
  )
}

export default App
