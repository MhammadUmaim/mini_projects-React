import React, { useState } from 'react'
import axios from 'axios'



const App = () => {

  const [random, setRandom] = useState({})

  let getData = async () => {
  const response = await axios.get('https://dummyjson.com/quotes')
  const Data = response.data.quotes
  const rand = Math.floor(Math.random() * Data.length)
  setRandom(Data[rand])
}


  return (
    <div className='bg-[url("https://image.slidesdocs.com/responsive-images/background/poetic-expressions-on-vintage-paper-crafted-by-3d-rendered-ink-pen-powerpoint-background_065fef1abe__960_540.jpg")] min-h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center '>
      <button onClick={getData} className='border py-2 px-5 rounded bg-black text-white hover:bg-white hover:text-black cursor-pointer m-10'>getQuote</button>
      <div key={random.id} className=' rounded-xl m-5 p-5 flex flex-col gap-3 bg-black text-white hover:bg-white hover:text-black transition-colors ease-in-out'>
         <h2>{random.quote}</h2> 
         <h4>__{random.author}</h4>
      </div>
    </div>
  )
}

export default App