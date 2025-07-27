import React, { use, useState } from 'react'
import QuizzesDisplay from './QuizzesDisplay'
import quizQuestions from './components/questions'
const App = () => {
  const[score, setScore]=useState(0)
  const[currentQuestion, setCurrentQuestion] = useState(0)
  const [showResult, setShowResult] = useState(0)
  const [message, setMessage] = useState("Answering.........");
  const [correct, setCorrect] = useState("wrong");

  const handleOption=(optionValue)=>{
   
    if (optionValue===quizQuestions[currentQuestion].answer){
       setMessage("Correct")
       setCorrect("correct");
       
       setScore(score+1);
      
    }
    else{
      setMessage("wrong")
    }
  }
  const handleNextQuestion=()=>{
    
    setCorrect("wrong");
    setCurrentQuestion(currentQuestion+1)
    setMessage("Answering........")
    
    

   }
   const handlePrevQuestion=()=>{
    setCurrentQuestion(currentQuestion-1)

   }
   const handleRestart=()=>{
    setScore(0);
    setCurrentQuestion(0)
    setCorrect("wrong")
    setMessage("Answering.......")
    
   }
  return (
    <div>
      <QuizzesDisplay questions={quizQuestions} score={score}message={message} correct={correct}currentQuestion={currentQuestion} handleOption={handleOption} handleNextQuestion={handleNextQuestion} handleRestart={handleRestart}handlePrevQuestion={handlePrevQuestion}></QuizzesDisplay>
    </div>
  )
}

export default App
