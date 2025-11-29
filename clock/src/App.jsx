import React, { useEffect, useState } from 'react'

const App = () => {

  const [hour, setHour] = useState('00')
  const [min, setMin] = useState('00')
  const [sec, setSec] = useState('00')


  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let mins = date.getMinutes();
      let secs = date.getSeconds();

      if (hours > 12) {
        setHour(String(hours - 12).padStart(2, '0'));
        setMin(String(mins).padStart(2, '0'));
      } else {
        setHour(String(hours).padStart(2, '0'));
        setMin(String(mins).padStart(2, '0'));
      }
      setSec(String(secs).padStart(2, '0'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='main h-screen flex justify-center items-center flex-col bg-linear-to-r from-cyan-500 to-blue-500'>
      <h1 className='heading text-5xl font-bold mb-8 tracking-widest'>Digital Clock</h1>
      <div className='clock  h-40 w-100 rounded '>
        <div className='text-6xl tracking-[20px] text-center py-5'>
        <p className='font-extralight'>{hour}:{min}:{sec}</p>  
        </div>
      </div>
    </div>
  )
}

export default App