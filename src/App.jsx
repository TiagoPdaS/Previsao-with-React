import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inputRef = useRef()

  function searchCity(){
    console.log(inputRef)
  }

  return (
    <div>
      <h1>Tiago PdaS</h1>
      <input ref={inputRef} type="text" placeholder='Digite a Cidade' />
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
