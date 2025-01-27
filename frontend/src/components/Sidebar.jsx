

import React, {  useState } from 'react'
import { NavLink } from 'react-router-dom'
import TeamSidebar from './sidebar/TeamSidebar'
import ServicesSidebar from './sidebar/ServicesSidebar'
import HomeSidebar from './sidebar/HomeSidebar'
import { gsap } from 'gsap'

function Sidebar() {
    const[link,setLink]=useState('team')
  
    const handlebutton=(button)=>{
           if(button==="home"){
               setLink("home")
              gsap.to(".homesidebar", {
                           transform:"translateX(10px)",
                           duration: 1
                       })
           }
            else if(button==="services"){
                setLink("services")
                 gsap.to(".servicesidebar", {
                            transform:"translateX(10px)",
                            duration: 1
                        })
              }
            else if(button==="team"){
                 setLink("team")
                    gsap.to(".teamsidebar", {
                                transform:"translateX(10px)",
                                duration: 1
                            })
                  }
            else{
                console.log("error in sidebar");
  
            }      

    }
    return (
<>




<div  className=" sidebar left-0 fixed z-10 h-full flex xl:w-[17%] bg-[#362e69] max-[900px]:transform max-[900px]:-translate-x-full">
    <div className="flex flex-col sm:flex-row max:mad:mt-20 ">

        <div className=' py-10 font-light flex flex-col gap-1 bg-[#0e0f4b]  '>
            <NavLink onClick={()=>handlebutton("services")} to="/services" className={({ isActive })=> ` ${isActive? "bg-[#362e69]": ""} flex flex-col xl:p-2 md:p-0 md:py-2 max-sm:w-[30px] justify-center hover:bg-[#362e69]`}>
                <svg className='mx-2 ' viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M546.133333 733.866667c2.133333-8.533333 2.133333-19.2 2.133334-29.866667s0-19.2-2.133334-29.866667l59.733334-42.666666c6.4-4.266667 8.533333-12.8 4.266666-19.2l-57.6-98.133334c-4.266667-6.4-10.666667-8.533333-17.066666-6.4L469.333333 539.733333c-14.933333-12.8-32-21.333333-51.2-29.866666l-6.4-72.533334c0-6.4-6.4-12.8-12.8-12.8h-113.066666c-6.4 0-12.8 6.4-12.8 12.8l-8.533334 74.666667c-19.2 6.4-34.133333 17.066667-51.2 29.866667L147.2 512c-6.4-2.133333-14.933333 0-17.066667 6.4l-57.6 98.133333c-4.266667 6.4-2.133333 14.933333 4.266667 19.2l59.733333 42.666667c-2.133333 8.533333-2.133333 19.2-2.133333 29.866667s0 19.2 2.133333 29.866666l-59.733333 42.666667c-6.4 4.266667-8.533333 12.8-4.266667 19.2l57.6 98.133333c4.266667 6.4 10.666667 8.533333 17.066667 6.4L213.333333 874.666667c14.933333 12.8 32 21.333333 51.2 29.866666l6.4 72.533334c0 6.4 6.4 12.8 12.8 12.8h113.066667c6.4 0 12.8-6.4 12.8-12.8l6.4-72.533334c19.2-6.4 34.133333-17.066667 51.2-29.866666l66.133333 29.866666c6.4 2.133333 14.933333 0 17.066667-6.4l57.6-98.133333c4.266667-6.4 2.133333-14.933333-4.266667-19.2l-57.6-46.933333zM341.333333 810.666667c-59.733333 0-106.666667-46.933333-106.666666-106.666667s46.933333-106.666667 106.666666-106.666667 106.666667 46.933333 106.666667 106.666667-46.933333 106.666667-106.666667 106.666667z" fill="#E65100"></path><path d="M893.866667 326.4c2.133333-10.666667 2.133333-19.2 2.133333-27.733333s0-17.066667-2.133333-27.733334l53.333333-38.4c6.4-4.266667 6.4-10.666667 4.266667-17.066666l-53.333334-91.733334c-4.266667-6.4-10.666667-8.533333-17.066666-4.266666l-61.866667 27.733333c-14.933333-10.666667-29.866667-19.2-46.933333-27.733333l-6.4-66.133334c2.133333-6.4-2.133333-10.666667-8.533334-10.666666h-104.533333c-6.4 0-12.8 4.266667-12.8 10.666666l-6.4 66.133334c-17.066667 6.4-32 14.933333-46.933333 27.733333l-61.866667-27.733333c-6.4-2.133333-12.8 0-17.066667 4.266666l-53.333333 91.733334c-4.266667 6.4-2.133333 12.8 4.266667 17.066666l53.333333 38.4V298.666667c0 8.533333 0 17.066667 2.133333 27.733333l-53.333333 38.4c-6.4 4.266667-6.4 10.666667-4.266667 17.066667l53.333334 91.733333c4.266667 6.4 10.666667 8.533333 17.066666 4.266667l61.866667-27.733334c14.933333 10.666667 29.866667 19.2 46.933333 27.733334l6.4 66.133333c0 6.4 6.4 10.666667 12.8 10.666667h104.533334c6.4 0 12.8-4.266667 12.8-10.666667l6.4-66.133333c17.066667-6.4 32-14.933333 46.933333-27.733334l61.866667 27.733334c6.4 2.133333 12.8 0 17.066666-4.266667l53.333334-91.733333c4.266667-6.4 2.133333-12.8-4.266667-17.066667l-59.733333-38.4zM704 405.333333c-59.733333 0-106.666667-46.933333-106.666667-106.666666s46.933333-106.666667 106.666667-106.666667 106.666667 46.933333 106.666667 106.666667-46.933333 106.666667-106.666667 106.666666z" fill="#FFA000"></path></g></svg>
             Services
            </NavLink>
            <NavLink onClick={()=>handlebutton("home")}   to="/home" className={({ isActive })=> ` ${isActive? "bg-[#362e69]": ""}  flex flex-col xl:p-2 md:p-0 md:py-2 max-sm:w-[30px] justify-center hover:bg-[#362e69]`}>
            <svg className='mx-2' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#f4f1f1"></path> </g></svg>
            Home
            </NavLink>
            <NavLink onClick={()=>handlebutton("team")}   to="/team" className={({ isActive }) =>  `${isActive ? "bg-[#362e69]" : ""} flex flex-col xl:p-2 md:p-0 md:py-2 max-sm:w-[30px] justify-center hover:bg-[#362e69]`}>
               <svg className='mx-2' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#f5f5f5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M435.95,287.525c32.51,0,58.87-26.343,58.87-58.853c0-32.51-26.361-58.871-58.87-58.871 c-32.502,0-58.863,26.361-58.863,58.871C377.088,261.182,403.448,287.525,435.95,287.525z"></path> <path class="st0" d="M511.327,344.251c-2.623-15.762-15.652-37.822-25.514-47.677c-1.299-1.306-7.105-1.608-8.673-0.636 c-11.99,7.374-26.074,11.714-41.19,11.714c-15.099,0-29.184-4.34-41.175-11.714c-1.575-0.972-7.373-0.67-8.672,0.636 c-2.757,2.757-5.765,6.427-8.698,10.683c7.935,14.94,14.228,30.81,16.499,44.476c2.27,13.7,1.533,26.67-2.138,38.494 c13.038,4.717,28.673,6.787,44.183,6.787C476.404,397.014,517.804,382.987,511.327,344.251z"></path> <path class="st0" d="M254.487,262.691c52.687,0,95.403-42.716,95.403-95.402c0-52.67-42.716-95.386-95.403-95.386 c-52.678,0-95.378,42.716-95.378,95.386C159.109,219.975,201.808,262.691,254.487,262.691z"></path> <path class="st0" d="M335.269,277.303c-2.07-2.061-11.471-2.588-14.027-1.006c-19.448,11.966-42.271,18.971-66.755,18.971 c-24.466,0-47.3-7.005-66.738-18.971c-2.555-1.583-11.956-1.055-14.026,1.006c-16.021,16.004-37.136,51.782-41.384,77.288 c-10.474,62.826,56.634,85.508,122.148,85.508c65.532,0,132.639-22.682,122.165-85.508 C372.404,329.085,351.289,293.307,335.269,277.303z"></path> <path class="st0" d="M76.049,287.525c32.502,0,58.862-26.343,58.862-58.853c0-32.51-26.36-58.871-58.862-58.871 c-32.511,0-58.871,26.361-58.871,58.871C17.178,261.182,43.538,287.525,76.049,287.525z"></path> <path class="st0" d="M115.094,351.733c2.414-14.353,9.225-31.253,17.764-46.88c-2.38-3.251-4.759-6.083-6.955-8.279 c-1.299-1.306-7.097-1.608-8.672-0.636c-11.991,7.374-26.076,11.714-41.182,11.714c-15.108,0-29.202-4.34-41.183-11.714 c-1.568-0.972-7.382-0.67-8.681,0.636c-9.887,9.854-22.882,31.915-25.514,47.677c-6.468,38.736,34.924,52.762,75.378,52.762 c14.437,0,29.016-1.777,41.459-5.84C113.587,379.108,112.757,365.835,115.094,351.733z"></path> </g> </g></svg>
                  Team
            </NavLink>
        </div>

        <div >
            
            {/* <nav class="mt-10 ">
                <a class=" hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white  duration-200  text-white hover:text-blue-600 " href="#">
                    <span class="mx-4 text-lg font-normal">
                        Training
                    </span>
      
                </a>
                <a class=" hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white duration-200  text-white hover:text-blue-600" href="#">
                    <span class="mx-4 text-lg font-normal">
                       Performance
                    </span>
                    
                </a>
                <a class=" hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white duration-200  text-white hover:text-blue-600 " href="#">
                    <span class="mx-4 text-lg font-normal">
                       Departemnts
                    </span>
                    
                </a>
                <a class=" hover:bg-[#514699] flex items-center p-2  transition-colors dark:hover:text-white duration-200  text-gray-600 dark:text-gray-100  " href="#">
                    <span class="mx-4 text-lg font-normal">
                        Employee
                    </span>
                    
                </a>
            </nav> */}
{link==="home"?<HomeSidebar/>:null}
{link==="services"?<ServicesSidebar/>:null}
{link==="team"?<TeamSidebar/>:null}
        </div>
    </div>
</div>
</>

    )
}

export default Sidebar

