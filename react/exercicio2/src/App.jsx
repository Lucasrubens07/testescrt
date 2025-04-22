import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('contador')
    return saved ? Number(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem('contador', count)
  }, [count])

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className="container">
      <h1>Contador</h1>
      <p className="numero">{count}</p>
      <div className="botoes">
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  )
}

export default App
