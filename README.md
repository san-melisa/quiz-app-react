# Trivia Quiz App 🧠🎯

**Trivia Quiz App** is a fun and interactive quiz application built with React. It allows users to test their general knowledge through multiple-choice trivia questions, receive instant feedback, and view their final score at the end of the quiz.

**Live Demo:** https://trivia-quiz1.netlify.app/quiz  
**Design Prototype:** https://www.figma.com/design/VTl4Z2adaSfbsTFW78wwzu/Quizzical-App?node-id=0-1&p=f&t=owLMkpv3ZgMYRZsc-0

---

## Features ✨

* Fetches **multiple-choice trivia questions** from a public trivia API.
* Randomly **shuffles answer options** for each question.
* Allows users to select **only one answer per question** using radio buttons.
* Ensures **all questions are answered** before submitting the quiz.
* Highlights **correct and incorrect answers** after submission.
* Displays the user’s **final score** at the end of the quiz.
* Prevents changes after submission by disabling inputs.
* Includes a **Play Again** option to restart the quiz.
* Fully **responsive design** for desktop and mobile devices.

---

## Technologies Used 🛠️

* **Frontend:** React, JavaScript, HTML, CSS
* **State Management:** React Hooks (`useState`, `useEffect`)
* **API:** Open Trivia Database (OpenTDB)
* **Utilities:**
  * `he` – for decoding HTML entities in API responses
* **Styling:** Custom CSS
* **Deployment:** Netlify
* **Design:** Figma

---

## What I Learned 📚

* Managing dynamic forms with React state
* Handling controlled radio inputs
* Conditional rendering based on application state
* Cleanly handling submit logic and validation
* Structuring reusable and readable React components
