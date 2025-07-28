import React, { use, useEffect, useState } from 'react'
import QuizzesDisplay from './QuizzesDisplay'
import quizQuestions from './components/questions'
import './components/quizz.css'
const App = () => {
  const[score, setScore]=useState(0)
  const[currentQuestion, setCurrentQuestion] = useState(0)
  const [showResult, setShowResult] = useState(0)
  const [message, setMessage] = useState();
  const [correct, setCorrect] = useState("wrong");
  const [time, setTime] = useState(10);
  const[clicked, setClicked] = useState(false);
  console.log(time);
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      
      setTime(prevTime=>{
        if(prevTime==1){
          clearInterval(interval);
          
          setMessage("Time's up");
        
          
        
        }
        
          
        return prevTime-1;    
      })
  
     
     
    }, 1000);
    return ()=> clearInterval(interval);
    
  },[currentQuestion])
  const handleOption=(optionValue)=>{
    setTime(0)
    if (optionValue===quizQuestions[currentQuestion].answer){
      
        setMessage("Correct")
         setCorrect("correct");

         
       setScore(score+1);
       
      
      
    }
    else{
      
      setMessage("wrong!!!!!!")
      setTime(time);
    }
  }
  const handleNextQuestion=()=>{
    
    setCorrect("wrong");
    setCurrentQuestion(currentQuestion+1)
    setMessage("Answering........")
      setTime(10)
    
    

   }
   const handlePrevQuestion=()=>{
    setCurrentQuestion(currentQuestion-1)
      setTime(10)

   }
   const handleRestart=()=>{
    setScore(0);
    setCurrentQuestion(0)
    setCorrect("wrong")
    setMessage("Answering.......")
    setTime(10)
    
   }
  return (
    <div className="quiz-container">
      <QuizzesDisplay questions={quizQuestions} clicked ={clicked} score={score}message={message} time={time} correct={correct}currentQuestion={currentQuestion} handleOption={handleOption} handleNextQuestion={handleNextQuestion} handleRestart={handleRestart}handlePrevQuestion={handlePrevQuestion}></QuizzesDisplay>
    </div>
  )
}

export default App
