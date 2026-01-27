import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [result, setResult] = useState('')

  const checkPassword = async () => {
    const res = await fetch('http://localhost:5000/check.py', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    })

    const data = await res.json()
    setResult(data.message)
  }

  return (
    <div className="container">
      <div className="col left">
        <h2>Chequeo de contraseñas</h2>
      </div>

      <div className="col right">
        <p>Introduce tu contraseña</p>

        <div className="form">
          <input
            className="input"
            placeholder="Introduzca su contraseña"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="input-border"></span>
        </div>

        <button onClick={checkPassword}>
          <span className="transition"></span>
          <span className="gradient"></span>
          <span className="label">Checar contraseña</span>
        </button>

        {result && <p>{result}</p>}
      </div>
    </div>
  )
}

export default App
