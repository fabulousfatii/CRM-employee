import React from 'react'
import logo2 from '../assets/logo2.jpg'
import Hamburger from './Hamburger'


function Header() {
    return (
        <div className='fixed top-0 z-20 w-full  px-4 font-bold flex text-lg text-blue-600 bg-white h-10'>
            <Hamburger />
            <div className='max-w-48 h-10 '>
                <img className=' object-cover object-center transform  ' src={logo2} alt="Logo" />
            </div>
        </div>
    )
}

export default Header
