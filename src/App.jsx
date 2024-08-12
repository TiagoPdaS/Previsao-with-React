import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'

function App() {
  const [weather, setWeather] = useState()
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const key =  "0bf67054f8ad27d731b904436dbdc6f6"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url) 
    setWeather(apiInfo.data)
 
  }

  return (
    <div className='container'>
      <h1>Tiago PdaS Weather</h1>
      <input ref={inputRef} type="text" placeholder='Digite a Cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather}/>}
    </div>
  )
}

export default App
