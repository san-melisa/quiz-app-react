import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button>Start quiz</button>
      </main>
    </>
  )
}

export default App
