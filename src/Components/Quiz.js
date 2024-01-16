import React,{useState,useContext} from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';
let sc=0;
function Quiz() {
    const{score,setScore,setGameState}=useContext(QuizContext);
    const [currQuestion,setCurrQuestion]=useState(0);
    const [optionChosen,setOptionCosen]=useState("");

    const nextQuestion=()=>{
      if(Questions[currQuestion].answer===optionChosen){
        sc=score+1;
        setScore(sc);
        
        console.log("answer is correct");
      }
      console.log(sc);
      setCurrQuestion(currQuestion+1);
    }

    const finishQuiz=()=>{
        if(Questions[currQuestion].answer==optionChosen){
            setScore(score+1);
          }
          setGameState("endScreen");
    }





  return (
    <div className='Quiz'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className='options'>
         <button onClick={()=>setOptionCosen("A")}>{Questions[currQuestion].optionA}</button>
         <button onClick={()=>setOptionCosen("B")}>{Questions[currQuestion].optionB}</button>
         <button onClick={()=>setOptionCosen("C")}>{Questions[currQuestion].optionC}</button>
         <button onClick={()=>setOptionCosen("D")}>{Questions[currQuestion].optionD}</button>
        </div>
{(currQuestion==Questions.length-1) ?(
      <button onClick={finishQuiz}>Finish Quiz</button>):(<button onClick={nextQuestion}>Next Question</button>
     )
}
</div>
  );
}

export default Quiz