import { useState, useEffect } from 'react'
import './App.css' // vamos usar um CSS separado

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, done: false }])
      setTask('')
    }
  }

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    )
    setTasks(updatedTasks)
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Adicione uma tarefa..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <ul>
        {tasks.map((t, i) => (
          <li
            key={i}
            onClick={() => toggleTask(i)}
            className={t.done ? 'done' : ''}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
