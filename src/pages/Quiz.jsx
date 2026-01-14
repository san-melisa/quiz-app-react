import { useState, useEffect } from "react" 
import { decode } from "he"

export default function Quiz() {

 const [questions, setQuestions] = useState([])
 
 useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res => res.json())
    .then(data => {
        if (!data.results) return

        const updatedQuestions = data.results.map(question => {
        const mergeArr = [question.correct_answer , ...question.incorrect_answers]
        const shuffledArr = shuffle(mergeArr)   
    
    return {
        ...question,
        shuffledAnswers: shuffledArr
    }
    })
    setQuestions(updatedQuestions)

    })
    
 },[])

 console.log(questions)


function shuffle(array) {
  const arr = [...array]; 
  
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
  return (  
    <main>
        <form>
          {questions.map((question, qIndex) => (
          <fieldset key={qIndex}>
          <legend>{decode(question.question)}</legend>

          {question.shuffledAnswers.map((answer, aIndex)=> (
            <label key={aIndex} className="option-label">
            <input type="radio" name={`q${qIndex}`} value={answer} className="visually-hidden" />
              {decode(answer)}
            </label>
          ))}
          <hr/>
        </fieldset>
          ))}

        <button className="btn btn-submit">Check answers</button>
        </form>
    </main>
  )
}
