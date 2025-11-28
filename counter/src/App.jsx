import React, { useEffect, useState } from 'react'



const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [num, setNum] = useState(() => parseInt(localStorage.getItem('count')) || 0)

  useEffect(() => {
    localStorage.setItem('count', num)
  }, [num])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <div className='overflow-hidden'>

      <div className='bg-amber-700 flex justify-evenly py-5 text-2xl'>
        <div>Counter</div>
        <div onClick={() => {
          if (theme == 'light') {
            setTheme('dark')
          }
          else {
            setTheme('light')
          }
        }} className='cursor-pointer hover:underline'>Change theme</div>

      </div>

      <div className={theme} >
        <div className='bg-white text-black h-[30vh] w-[80vw] sm:w-[40vw] py-5 rounded-4xl flex flex-col relative'>
          <div className='text-center text-Black'>
            <h1 className='text-5xl'>{num}</h1>
          </div>
          <div className='flex justify-around  w-full text-Black absolute bottom-10
        '>
            <button onClick={() => {
              if (num > 0) {
                setNum(num - 1)
              }
            }} className=' py-2 hover:bg-gray-400 hover:border-none hover:text-white hover:transition-all px-5 rounded-2xl font-bold text-2xl flex items-center justify-center border border-gray-800 cursor-pointer'>-</button>

            <button onClick={() => {
             setNum(0)
            }} className=' py-2 hover:bg-gray-400 hover:border-none hover:text-white hover:transition-all px-5 rounded-2xl font-bold text-2xl flex items-center justify-center border border-gray-800 cursor-pointer'>Reset</button>

            <button onClick={() => {
              setNum(num + 1)
            }} className=' py-2 hover:bg-gray-400 hover:border-none hover:text-white hover:transition-all px-5 rounded-2xl font-bold text-2xl flex items-center justify-center border border-gray-800 cursor-pointer'>+</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App