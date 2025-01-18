import { useEffect, useState } from 'react'
import axios from "axios";
import Sidebar from './components/Sidebar';
import {Link, useNavigate} from "react-router-dom"
import EmployeeDetails from './pages/EmployeeDetails';
import useHook from './hook/useHook';




const App = () => {
  // const [employees, setEmployees] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/api/employees")
  //     .then((response) => setEmployees(response.data))
  //     .catch((error) => console.error(error));
  // },[]);

  // console.log(employees);
 
 const {employees}=useHook()
  
  
  return (
  <main className='w-full h-screen bg-blue-800 '> 
   <Sidebar/>
  <div className='w-screen h-screen flex justify-end '>
    <div className='w-[80vw] h-full bg-white text-black '>

<div className='w-full h-20 bg-[#ebe9e9] text-black mt-8 p-9 flex justify-between items-center'>
  
  <div className='gap-4 flex justify-evenly items-center'>
  <select className='bg-white text-black rounded-lg p-4 '>
    <option value="employee">Employee</option>
  </select>
  <span>edit</span>
  </div>

 <div className='gap-4 flex justify-evenly items-center  '>
 <select className='bg-blue-700 text-white rounded-lg'>
    <option value="employee">All data </option>
  </select>
  <select className='bg-blue-700 text-white rounded-lg '>
    <option value="employee">add user directly </option>
  </select>
 </div>

</div>

<div className='w-full grid grid-cols-6 gap-4 px-3 border-b-2 font-bold text-lg text-center py-4'>
<div class="...">ID</div>
  <div class="...">First name</div>
  <div class="...">Last name</div>
  <div class="...">Department</div>
  <div class="...">Email</div>
  <div class="...">Status</div>
</div>


{employees.map((data,index)=>{
  console.log(data.department);
  return(
<Link to={`/${data._id}`} onClick={()=>{
} }  key={index} className='w-full grid grid-cols-6 text-black gap-4 px-3 text-lg text-center  py-2 pb-2 cursor-pointer hover:bg-blue-900 hover:text-white'>
<div class="">{data._id}</div>
  <div class="...">{data.name}</div>
  <div class="...">{data.role}</div>
  <div class="...">{data.department}</div>
  <div class="w-40">{data.email}</div>
  <div class="max-w-40 overflow-hidden ml-3">{data.status}</div>
</Link>
  )
   
})}
  
   </div>
  </div>
  </main>
  )
}

export default App
