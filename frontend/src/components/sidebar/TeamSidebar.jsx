import React from 'react'
import { NavLink } from 'react-router-dom'

function TeamSidebar() {

    const linksData= [
        {name:"Task" , link:"/admin/team/training"},
        {name:"Performance" , link:"/admin/team/performance"},
        {name:"Leaves" , link:"/admin/team/leaves"},
        {name:"Add new Employee" , link:"/admin/team/addnew"},
        {name:"Employees" , link:"/admin/team/employee"},
        {name:"Attendence" , link:"/admin/team/attendence"},
        {name:"Attendence Report" , link:"/admin/team/attendence-report"},
        {name:"Annoucements" , link:"/admin/team/announcements"}
    ]


    return (
       <div className=' teamsidebar  rounded-xl lg:left-5  px-3 h-full  bg-[#251b66] max-[900px]:w-[150px]'>
             <div className='flex flex-col  max-md:justify-end justify-end  max-md:items-end xl:justify-end xl:items-end'>
               <header className='w-full'>
                 <h1 className="mt-5 text-2xl text-start text-white font-bold">CRM-employee</h1>
               </header>
               

               {/* All links */}
             <nav class="mt-10 mb-2 flex flex-col gap-1 rounded-xl ">
                {linksData.map((links)=>{
                  return(
                                    <NavLink key={links.name} to={links.link} className={({ isActive })=>` ${isActive? "bg-[#514699]":"" } hover:bg-[#514699] flex items-center p-2 rounded-xl transition-colors dark:hover:text-white max-md:justify-end  duration-200  text-white hover:text-blue-600 `} >
                    <span class="mx-4  text-lg font-normal">
                        {links.name}
                    </span>
      
                </NavLink>
                  )
               })}
       
            </nav>

             </div>
       </div>
    )
}

export default TeamSidebar
