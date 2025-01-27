
import TeamSidebar from './components/sidebar/TeamSidebar';
import {Link} from "react-router-dom"
import useHook from './hook/UseHook';
import Hamburger from './components/Hamburger';

const App = () => {
 
 const {employees}=useHook()
  
  
  return (
  <main className='w-full h-screen bg-[#362e69] '> 
  {/* <Hamburger/> */}
  {/* <TeamSidebar/> */}
  <div className='w-screen max-[900px]:w-screen h-screen flex justify-end '>
    <div className='w-[84%] max-[900px]:w-full max-md:w-full h-full bg-white text-black '>


<div className='w-full h-16 bg-[#f7f4f4] text-black mt-8 p-9 flex  justify-between items-center'>
  
  <div className='gap-6 flex justify-evenly items-center'>
  <select className='bg-white text-black rounded-lg px-3 py-3 '>
    <option value="employee">Employee</option>
  </select>
  <span className='text-blue-600 cursor-pointer hover:text-blue-400 max-sm:hidden'>Edit</span>
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

<div className='w-full grid grid-cols-6 max-[900px]:grid-cols-3  max-sm:hidden gap-4 px-3 border-b-2 font-bold 2xl:text-lg text-center py-2'>
<div class="max-[900px]:hidden">ID</div>
  <div class="...">First name</div>
  <div class="...">Role</div>
  <div class="">Department</div>
  <div class="max-[900px]:hidden">Email</div>
  <div class="max-[900px]:hidden">Status</div>
</div>


{employees.map((data,index)=>{
  
  return(
<Link to={`/team/${data._id}`} onClick={()=>{
} }  key={index} className='w-full grid grid-cols-6 max-[900px]:grid-cols-3 max-sm:grid-cols-1 max-sm:justify-start border-b-2 2xl:text-lg text-black gap-4 max-sm:gap-1 px-3 text-md text-center max-sm:text-start  py-2 pb-2 cursor-pointer hover:bg-[#dcdcdd] '>
<div class="max-[900px]:hidden">{data._id}</div>
  <div class="max-sm:font-bold max-sm:pl-10">{data.name}</div>
  <div class="max-sm:pl-10">{data.role}</div>
  <div class="max-sm:hidden">{data.department}</div>
  <div class="w-40 text-blue-600 text-md max-lg:overflow-hidden xl:overflow-visible max-[900px]:hidden">{data.email}</div>
  <div class="max-w-40 overflow-hidden max-[900px]:hidden ml-3">{data.status}</div>
</Link>
  )
   
})}
  
   </div>
  </div>
  </main>
  )
}

export default App
