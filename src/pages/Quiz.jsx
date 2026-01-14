import { useState, useEffect } from "react";
import { decode } from "he";
import { clsx } from "clsx";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        if (!data.results) return;

        const updatedQuestions = data.results.map((question) => {
          const mergeArr = [
            question.correct_answer,
            ...question.incorrect_answers,
          ];
          const shuffledArr = shuffle(mergeArr);

          return {
            ...question,
            shuffledAnswers: shuffledArr,
          };
        });
        setQuestions(updatedQuestions);
      });
  }, []);


  function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  function handleChange(qIndex, answer) {
    setSelectedAnswers((prev) => ({
      ...prev,
      [`q${qIndex}`]: answer,
    }));
  }

  function submitSolutions(e) {
    if (e && e.preventDefault) e.preventDefault();

  const allAnswered = questions.every((q, index) =>
    selectedAnswers.hasOwnProperty(`q${index}`)
  );

  if (!allAnswered) {
    alert("Answer all the questions please.");
    return; 
  }
    let newScore = 0;
    questions.forEach((question, index) => {
      if (question.correct_answer === selectedAnswers[`q${index}`]) {
        newScore++;
      }
    });

    setScore(newScore);
    setIsSubmitted(true);
  }

  function playAgain() {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
  }


  return (
    <main>
      {questions.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <form>
          {questions.map((question, qIndex) => (
            <fieldset key={qIndex}>
              <legend>{decode(question.question)}</legend>

              {question.shuffledAnswers.map((answer, aIndex) => (
                <label
                  key={aIndex}
                  className={clsx(
                    "option-label",
                    !isSubmitted &&
                       selectedAnswers[`q${qIndex}`] === answer &&
                      "selected",
                    isSubmitted  && answer === question.correct_answer
                      && "correct",
                    isSubmitted &&
                      selectedAnswers[`q${qIndex}`] === answer &&
                      answer !== question.correct_answer &&
                      "wrong"
                    
                        
                  )}
                >
                  <input
                    type="radio"
                    name={`q${qIndex}`}
                    value={answer}
                    className="visually-hidden"
                    onChange={() => handleChange(qIndex, answer)}
                    disabled={isSubmitted}
                  />
                  {decode(answer)}
                </label>
              ))}
              <hr />
            </fieldset>
          ))}

          {!isSubmitted && (
            <button type="button" className="btn btn-submit" onClick={submitSolutions}>
              Check answers
            </button>
          )}
          {isSubmitted && (
            <>
              <p>You scored {score}/5 correct answers</p>
              <button type="button" className="btn btn-submit" onClick={playAgain}>Play again</button>
            </>
          )}
        </form>
      )}
    </main>
  );
}
