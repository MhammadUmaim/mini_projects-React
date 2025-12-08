import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Wind } from 'lucide-react';
import { Droplets } from 'lucide-react';
import { Thermometer } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Haze } from 'lucide-react';
import { Sun } from 'lucide-react';
import { CloudRain } from 'lucide-react';




const App = () => {
  const [error, setError] = useState("")
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("")
  const [name, setName] = useState(null)
  let API_KEY = "08962b9417766af0d9df0bb89a8f91ba";

  let getWeather = async (e) => {
    e.preventDefault()

    if (!city) {
      setError("Please enter a city name!")
      setWeather(null)
      return
    }

    try {
      let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

      setError("")
      setWeather(response.data)
      setName(response.data.weather[0].main)
      setCity("")
      // console.log()

    } catch (err) {
      setError("City not found! Please try again.")
      setWeather(null)
      setName(null)
      console.log(err)
    }

  }

  const getWeatherIcon = (size = 120) => {
    if (!name) return

    if (name === 'Rain') {
      return <CloudRain size={size} color="#ff57b0" />
    } else if (name === 'Clouds') {
      return <Cloud size={size} color="#ff57b0" />
    } else if (name === 'Clear') {
      return <Sun size={size} color="#ff57b0" />
    } else if (name === 'Haze') {
      return <Haze size={size} color="#ff57b0" />
    }
    return <Sun size={size} color="#ff57b0" />
  }

  return (<>
    <div className='min-h-screen overflow-hidden bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 flex justify-center items-center '>
      <Navbar name={weather && weather.name} country={weather && weather.sys.country}/>
      <form
        onSubmit={getWeather}
        className=' absolute top-20 sm:left-10 flex items-center m-5 sm:m-0 sm:p-0 '>
        <input
          placeholder='enter a city'
          type="text"
          className=' outline-0 m-5 sm:m-10 rounded-full px-4 py-2 bg-white/60 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-pink-300 '
          onChange={(e) => { setCity(e.target.value) }}
          value={city}
        />
        <button
          className='  h-10 w-35 cursor-pointer active:scale-95 px-2.5 py-2 rounded-full bg-pink-400 text-white hover:bg-pink-500 transition shadow-md hover:-translate-y-0.5 text-sm '
        >
          check weather
        </button>

      </form>
      <div className='w-[350px] rounded-3xl relative top-20 sm:top-0 bg-white/40 backdrop-blur-lg shadow-lg p-8 transition-transform hover:scale-105 border border-pink-200'>

        <div class="-z-10 absolute top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-linear-to-br from-pink-300 via-yellow-200 to-purple-300 opacity-25 blur-md"></div>
        <div class="-z-10 absolute top-24 left-1/3 w-32 h-32 rounded-full bg-linear-to-br from-purple-300 to-blue-300 opacity-20 blur-lg"></div>
        <div class="-z-10 absolute top-10 right-1/4 w-36 h-36 rounded-full bg-linear-to-br from-pink-200 to-purple-200 opacity-10 blur-md"></div>
        <div className='flex justify-center relative z-10 mb-4 '>
          {getWeatherIcon(120)}
        </div>
        {error && <div className='bg-red-600 text-white text-center py-3 px-4 rounded-lg mb-4 font-semibold'>{error}</div>}
        {weather && <div className='text-6xl font-light text-rose-400 tracking-tight'>{Math.round(weather.main.temp)}°</div>}
        <div class="flex flex-col gap-2 text-gray-600 text-sm mt-4">
          {weather && <div className='flex items-center gap-2'><Thermometer color="#ff57b0" size={20} className=''/> Feel like: {weather.main.feels_like}°C</div>}
          {weather && <div className='flex items-center gap-2'><Droplets color="#ff57b0" size={20} /> Humidity: {weather.main.humidity}%</div>}
          {weather && <div className='flex items-center gap-2'><Wind color="#ff57b0" size={20} /> Wind speed: {weather.wind.speed} km/h</div>}
          {weather && <div className='flex items-center gap-2'>{getWeatherIcon(20)} Weather: {weather.weather[0].main}</div>}
        </div>

      
      </div>

    </div>
  </>
  )
}

export default App