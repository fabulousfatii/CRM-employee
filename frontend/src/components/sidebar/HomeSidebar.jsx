import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeSidebar() {
    //max-md:transform max-md:-translate-x-full
    return (
        <div className='className=" homesidebar  xl:left-0 xl:ml-20   h-full  bg-[#362e69] max-md:w-[170px]'>
        <div className='flex flex-col justify-end items-end'>
        <nav class="mt-10 mr-10 ">
           <NavLink to={"/home"} className={({ isActive })=>` ${isActive? "bg-[#514699]":"" } hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white  duration-200  text-white hover:text-blue-600 `} >
               <span class="mx-4 text-lg font-normal">
                   About
               </span>
 
           </NavLink>
          
       </nav>

        </div>
  </div>
    )
}

export default HomeSidebar
