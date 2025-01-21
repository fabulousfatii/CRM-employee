import React from 'react'
import { NavLink } from 'react-router-dom'

function TeamSidebar() {
    return (
       <div className='className=" fixed left-0 w-[20%]  h-full  bg-[#362e69]'>
             <div className='flex flex-col justify-end items-end'>
             <nav class="mt-10  ">
                <NavLink to={"/team/training"} className={({ isActive })=>` ${isActive? "bg-[#514699]":"" } hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white  duration-200  text-white hover:text-blue-600 `} >
                    <span class="mx-4 text-lg font-normal">
                        Training
                    </span>
      
                </NavLink>
                <NavLink to={"/team/performance"} className={({ isActive })=>` ${isActive? "bg-[#514699]":"" } hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white  duration-200  text-white hover:text-blue-600 `}>
                    <span class="mx-4 text-lg font-normal">
                       Performance
                    </span>
                    
                </NavLink>
                <NavLink to={"/team/addnew"} className={({ isActive })=>` ${isActive? "bg-[#514699]":"" } hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white  duration-200  text-white hover:text-blue-600 `}>
                    <span class="mx-4 text-lg font-normal">
                       Add new Employee
                    </span>
                    
                </NavLink>
                <NavLink to={"/team/employee"} className={({ isActive })=>` ${isActive? "bg-[#514699]":"" } hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white  duration-200  text-white hover:text-blue-600 `}>
                    <span class="mx-4 text-lg font-normal">
                        Employee
                    </span>
                    
                </NavLink>
            </nav>

             </div>
       </div>
    )
}

export default TeamSidebar
