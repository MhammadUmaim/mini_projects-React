import React from 'react'

const Navbar = (props) => {
  return (
   <nav className='navbar bg-white sm:px-20 py-3 text-black flex sm:justify-between justify-around rounded-4xl h-13 items-center mx-5 absolute top-5 w-[90vw] sm:text-xl'>
    <div className="flex items-center"><img src="https://cdn-icons-png.flaticon.com/512/1555/1555512.png" className='sm:h-20 h-15' alt="" />Live Weather</div>
   {props && <div className="flex items-center gap-5"><img src="https://cdn-icons-png.flaticon.com/512/183/183411.png" className='sm:h-8 h-5' alt="" />{props.name}</div>}
   </nav>
  )
}

export default Navbar