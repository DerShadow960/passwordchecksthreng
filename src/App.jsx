import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="col left">
        <p1>Bienvenido al check de contraseñas</p1>
      </div>
      <div className="col right">
        <p1>Bienvenido al check de contraseñas, esto es una prueba</p1>
      </div>
    </div>
    </>
  )
}

export default App
