
import React, {  useState } from 'react'
import TeamSidebar from './sidebar/TeamSidebar'

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




<div  className=" sidebar left-2 fixed top-2 z-10 h-full flex rounded-xl  bg-[#4230b4] max-[900px]:transform max-[900px]:-translate-x-full">
    <div className="flex flex-col   sm:flex-row max:mad:mt-20 ">
<TeamSidebar/>
        <div className=' py-10 font-light flex flex-col gap-1 rounded-xl bg-[#0e0f4b]  '>
            {/* <NavLink onClick={()=>handlebutton("services")} to="/services" className={({ isActive })=> ` ${isActive? "bg-[#362e69]": ""} flex flex-col xl:p-2 md:p-0 md:py-2 max-sm:w-[30px] justify-center hover:bg-[#362e69]`}>
             Services
            </NavLink>
            <NavLink onClick={()=>handlebutton("home")}   to="/home" className={({ isActive })=> ` ${isActive? "bg-[#362e69]": ""}  flex flex-col xl:p-2 md:p-0 md:py-2 max-sm:w-[30px] justify-center hover:bg-[#362e69]`}>
            <svg className='mx-2' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth ="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#f4f1f1"></path> </g></svg>
            Home
            </NavLink>
            <NavLink onClick={()=>handlebutton("team")}   to="/team" className={({ isActive }) =>  `${isActive ? "bg-[#362e69]" : ""} flex flex-col xl:p-2 md:p-0 md:py-2 max-sm:w-[30px] justify-center hover:bg-[#362e69]`}>
               <svg className='mx-2' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#f5f5f5"><g id="SVGRepo_bgCarrier" strokeWidth ="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M435.95,287.525c32.51,0,58.87-26.343,58.87-58.853c0-32.51-26.361-58.871-58.87-58.871 c-32.502,0-58.863,26.361-58.863,58.871C377.088,261.182,403.448,287.525,435.95,287.525z"></path> <path class="st0" d="M511.327,344.251c-2.623-15.762-15.652-37.822-25.514-47.677c-1.299-1.306-7.105-1.608-8.673-0.636 c-11.99,7.374-26.074,11.714-41.19,11.714c-15.099,0-29.184-4.34-41.175-11.714c-1.575-0.972-7.373-0.67-8.672,0.636 c-2.757,2.757-5.765,6.427-8.698,10.683c7.935,14.94,14.228,30.81,16.499,44.476c2.27,13.7,1.533,26.67-2.138,38.494 c13.038,4.717,28.673,6.787,44.183,6.787C476.404,397.014,517.804,382.987,511.327,344.251z"></path> <path class="st0" d="M254.487,262.691c52.687,0,95.403-42.716,95.403-95.402c0-52.67-42.716-95.386-95.403-95.386 c-52.678,0-95.378,42.716-95.378,95.386C159.109,219.975,201.808,262.691,254.487,262.691z"></path> <path class="st0" d="M335.269,277.303c-2.07-2.061-11.471-2.588-14.027-1.006c-19.448,11.966-42.271,18.971-66.755,18.971 c-24.466,0-47.3-7.005-66.738-18.971c-2.555-1.583-11.956-1.055-14.026,1.006c-16.021,16.004-37.136,51.782-41.384,77.288 c-10.474,62.826,56.634,85.508,122.148,85.508c65.532,0,132.639-22.682,122.165-85.508 C372.404,329.085,351.289,293.307,335.269,277.303z"></path> <path class="st0" d="M76.049,287.525c32.502,0,58.862-26.343,58.862-58.853c0-32.51-26.36-58.871-58.862-58.871 c-32.511,0-58.871,26.361-58.871,58.871C17.178,261.182,43.538,287.525,76.049,287.525z"></path> <path class="st0" d="M115.094,351.733c2.414-14.353,9.225-31.253,17.764-46.88c-2.38-3.251-4.759-6.083-6.955-8.279 c-1.299-1.306-7.097-1.608-8.672-0.636c-11.991,7.374-26.076,11.714-41.182,11.714c-15.108,0-29.202-4.34-41.183-11.714 c-1.568-0.972-7.382-0.67-8.681,0.636c-9.887,9.854-22.882,31.915-25.514,47.677c-6.468,38.736,34.924,52.762,75.378,52.762 c14.437,0,29.016-1.777,41.459-5.84C113.587,379.108,112.757,365.835,115.094,351.733z"></path> </g> </g></svg>
                  Team
            </NavLink> */}
            
        </div>

        <div >
            
            
{/* {link==="home"?<HomeSidebar/>:null}
{link==="services"?<ServicesSidebar/>:null}
{link==="team"?<TeamSidebar/>:null} */}
        </div>
    </div>
</div>
</>

    )
}

export default Sidebar

