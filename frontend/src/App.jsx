
import TeamSidebar from './components/sidebar/TeamSidebar';
import {Link} from "react-router-dom"
import useHook from './hook/UseHook';

const App = () => {
 
 const {employees}=useHook()
  
  
  return (
  <main className='w-full h-screen bg-[#362e69] '> 
  <TeamSidebar/>
  <div className='w-screen h-screen flex justify-end '>
    <div className='w-[80%] h-full bg-white text-black '>


<div className='w-full h-16 bg-[#f7f4f4] text-black mt-8 p-9 flex  justify-between items-center'>
  
  <div className='gap-6 flex justify-evenly items-center'>
  <select className='bg-white text-black rounded-lg px-3 py-3 '>
    <option value="employee">Employee</option>
  </select>
  <span className='text-blue-600 cursor-pointer hover:text-blue-400'>Edit</span>
  </div>

 <div className='gap-4 flex justify-evenly items-center  '>
 <select className='bg-white text-black px-3 rounded-sm'>
    <option value="employee">All data </option>
  </select>
  <select className='bg-blue-700 text-white rounded-sm'>
    <option value="employee">Add new User </option>
  </select>
 </div>

</div>

<div className='w-full grid grid-cols-6 gap-4 px-3 border-b-2 font-bold text-center py-2'>
<div class="...">ID</div>
  <div class="...">First name</div>
  <div class="...">Last name</div>
  <div class="...">Department</div>
  <div class="...">Email</div>
  <div class="...">Status</div>
</div>


{employees.map((data,index)=>{
  
  return(
<Link to={`/team/${data._id}`} onClick={()=>{
} }  key={index} className='w-full grid grid-cols-6 border-b-2 text-black gap-4 px-3 text-lg text-center  py-2 pb-2 cursor-pointer hover:bg-[#dcdcdd] '>
<div class="">{data._id}</div>
  <div class="...">{data.name}</div>
  <div class="...">{data.role}</div>
  <div class="...">{data.department}</div>
  <div class="w-40 text-blue-600 text-md overflow-hidden">{data.email}</div>
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
