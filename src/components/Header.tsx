import React, { useState } from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom'

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        console.log('activated dark mode');
        setDarkMode(!darkMode);
      } else {
        document.documentElement.classList.remove('dark')
        console.log('Deactivated dark mode');
        setDarkMode(!darkMode);
      }
    }

  return (
    <div className='fixed w-full h-16 py-1 backdrop-blur-sm bg-cyan/30 border-1'>
        <ul className='flex items-center justify-between px-4'>
            <NavLink to='inicio'></NavLink>
            <NavLink to='inicio'>
                <div className='text-3xl font-extrabold'>
                    <span className='bg-clip-text font-splineSans text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                        Pokedux
                    </span>
                </div>
            </NavLink>
            <button onClick={toggleDarkMode} className='pt-4'>
                {darkMode ? <BsMoonFill size={24} color={'#134874'}/> : <BsSunFill size={24} color={'#DFBF0D'}/>}
            </button>
        </ul>
    </div>
  )
}
