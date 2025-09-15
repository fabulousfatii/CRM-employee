
import TeamSidebar from './components/sidebar/TeamSidebar';
import {Link} from "react-router-dom"
import useHook from './hook/UseHook';
import Hamburger from './components/Hamburger';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from './context/useContext';
import { Activity, Building, PersonStanding } from 'lucide-react';

const App = () => {
 
//  const {employees,employeedata}=useContext(AppContext)
 const {employees,employeedata,getuserdata}=useHook()
  console.log("hereeeee",employees)
  
  useEffect(()=>{
    employeedata()
    getuserdata()
  },[])
  return (
  <main className='w-full h-full '> 
  
  <div className='w-full  max-[900px]:w-screen h-full flex justify-end '>
    <div className='w-[84%] max-[900px]:w-full max-md:w-full h-full bg-gray-100/50 text-black '>

    
<div className='w-full h-16  text-black mt-8 p-9 flex  justify-between items-center'>
<h2 className='text-black font-bold text-2xl mx-9'>Employee Display</h2>
  
  

 <div className='gap-4 flex justify-evenly items-center  '>
 <select className='bg-white text-black px-3 rounded-sm'>
    <option value="employee">All data </option>
  </select>
  <select className='bg-blue-700 text-white rounded-sm'>
    <option value="employee">Add new User </option>
  </select>
 </div>

</div>

<div className="max-w-5xl mx-auto p-6 ">
        {/* <h1 className="text-2xl font-bold mb-2 ">Employee Leaves</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-100">
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <PersonStanding className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Total Employees</span>
              </div>
              <p className="text-2xl font-bold mt-2">{employees.length} </p>
            </div>
          </div>
          
          <div className="bg-yellow-100">
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <Building className="h-5 w-5 text-yellow-600" />
                <span className="font-medium">Departments</span>
              </div>
              <p className="text-2xl font-bold mt-2">
                 6
              </p>
            </div>
          </div>

          <div className="bg-green-100">
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-green-600" />
                <span className="font-medium">Active</span>
              </div>
              <p className="text-2xl font-bold mt-2">
              {employees.filter((employee) => employee.status === 'Active').length}
              </p>
            </div>
          </div>
        </div>
      </div>

<div className='w-[87%] h-full mx-auto bg-white text-black mt-8 rounded-xl pb-5 flex flex-col overflow-hidden justify-center items-center'>
<div className='w-full grid grid-cols-6 max-[900px]:grid-cols-3 py-4  bg-[#473a96] text-white  max-sm:hidden gap-4 px-3 border-b-2  2xl:text-sm text-center'>
<div className="max-[900px]:hidden">ID</div>
  <div className="...">First name</div>
  <div className="...">Role</div>
  <div className="">Department</div>
  <div className="max-[900px]:hidden">Email</div>
  <div className="max-[900px]:hidden">Status</div>
</div>

<div>
{employees.map((data,index)=>{
  if(data.role!=="admin"){
  return(
<Link to={`/admin/team/${data._id}`} onClick={()=>{
} }  key={index} className='w-full grid grid-cols-6 max-[900px]:grid-cols-3 max-sm:grid-cols-1 max-sm:justify-start border-b-2 2xl:text-lg text-black gap-4 max-sm:gap-1 px-3 text-md text-center max-sm:text-start  py-2 pb-2 cursor-pointer hover:bg-[#dcdcdd] '>
<div className="max-[900px]:hidden py-2">{data._id}</div>
  <div className="max-sm:font-bold max-sm:pl-10">{data.name}</div>
  <div className="max-sm:pl-10">{data.role}</div>
  <div className="max-sm:hidden">{data.department}</div>
  <div className="w-40 text-blue-600 text-md max-lg:overflow-hidden xl:overflow-visible max-[900px]:hidden">{data.email}</div>
  <div className="max-w-40 overflow-hidden max-[900px]:hidden ml-3">
     <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                     ${data.status === "Active" ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
    
                                            }`}
                                    > {data.status === "Active"? "active" :"not active " }
    
                                    </span>
    </div>
</Link>
  )}
   
})}
</div>
</div>
  
   </div>
  </div>
  </main>
  )
}

export default App
