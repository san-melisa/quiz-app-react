import { Routes, Route, useNavigate } from 'react-router-dom'
import Quiz from './pages/Quiz'

function Home() {
  const navigate = useNavigate()
  return (
    <main>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={() => navigate('/quiz')} className="btn">Start quiz</button>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  )
}

export default App
