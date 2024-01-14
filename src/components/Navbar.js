import React from 'react'

const Navbar = () => {
  return (
    <div className=' py-12 bg-black text-white'>
      <div className="navbar px-16 flex justify-between">
      <div className="navbar__logo font-bold text-3xl">
        MEMENTO
      </div>
      <div className="navbar__links w-2/5">
        <ul className='flex justify-between justify-around font-medium text-lg'>
          <li>WHAT WE DO</li>
          <li>WHO WE ARE</li>
          <li>BEING HERE</li>
          <li>CAREERS</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar