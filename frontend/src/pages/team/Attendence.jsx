import {useContext, useEffect, useState} from "react"
import { AppContext } from "../../context/useContext";
import axios from "axios";

const Attendance = () => {
  const {employees} = useContext(AppContext)
  const [attendenceData, setAttendenceData] = useState(null)

  const getattendence = async () => {
    // API call to get attendence data
   try{
    const response= await axios.get("/api/attendence/get-attendence")
    console.log(response.data)
     setAttendenceData(response.data)
    if(response.data !== ""){
      console.log("Attendence Data Fetched");
    }
   }catch{
        console.log("error")
   }
  }

  const handleclick=(status,empId)=>{
    console.log(status,empId)
    // API call to mark attendence
    const formatattendence=attendenceData.map((item)=>item.employeeId.employeeId===empId?{...item,status}:item)
    setAttendenceData(formatattendence)
    const response = axios.put(`/api/attendence/update/${empId}`,{status})
    console.log(response);
    
    if(response.success === true){
      console.log("Attendence Marked")}
  }

  useEffect(()=>{
    getattendence()
  },[])

  useEffect(() => {
    console.log(attendenceData);
  }, [attendenceData]);

  return (

<div className='w-[98.5vw] max-[900px]:w-[90vw] mt-10 h-full  pl-[17%] overflow-hidden '>
                  <h1 className='text-2xl text-start font-bold text-blue-900 ml-28 '>Attendence</h1>

            <div className='flex flex-col justify-between items-center mb-5'>

{/* table for attendence */}

 <div className="bg-white rounded-lg shadow overflow-hidden w-[80%]  mt-6">
            
            <div className="overflow-x-auto">

                {/* displaying table heading   */}
                <div className='w-full grid grid-cols-5 max-[900px]:grid-cols-3  max-sm:hidden gap-4 px-3 border-b-2 text-sm bg-[#473a96] text-white  2xl:text-lg text-center py-2'>
                    <div class="max-[900px]:hidden">S no.</div>
                    <div class="...">Name</div>
                    <div class="...">EmployeeID</div>
                    <div class="">Department</div>
                    <div class="max-[900px]:hidden">Action</div>
                </div>

                {/* all tasks */}
                <div>
                    {attendenceData?.map((employee, index) => (
                        <div key={index} className='w-full grid grid-cols-5 max-[900px]:grid-cols-3 max-sm:grid-cols-1 max-sm:justify-start border-b-2 2xl:text-lg text-black gap-4 max-sm:gap-1 px-3 text-md text-center max-sm:text-start text-sm py-2 pb-2 cursor-pointer hover:bg-[#dcdcdd] '>
                            <div class="max-[900px]:hidden">{index +1}</div>
                            <div class="max-sm:font-bold max-sm:pl-10">{employee?.employeeId?.name}</div>
                            <div class="max-sm:font-bold max-sm:pl-10">{employee?.employeeId?.employeeId}</div>
                            <div class="max-sm:font-bold max-sm:pl-10">{employee?.employeeId?.department}</div>
                            <div class="max-sm:font-bold max-sm:pl-10">
                                {employee?.status !== null ?(
                                     <p className=" p-2 rounded-lg">{employee?.status}</p>
                                ):(
                                  <div className="flex gap-2">
     <button onClick={() => handleclick("Present", employee.employeeId.employeeId)} className="bg-green-500 text-white text-sm p-1 rounded-xl mr-2 hover:bg-green-600">
       Present
     </button>
     <button onClick={() => handleclick("Absent", employee.employeeId.employeeId)} className="bg-red-500 text-white text-sm  p-1 border rounded-xl hover:bg-red-600">
       Absent
     </button>
   </div>
                                )}
                            </div>


                        </div>))}
                     
                </div></div>

        </div>

       

                </div>
                          <button className="p-1 ml-28 bg-green-100 border border-green-800 text-green-800 rounded-full ">Mark all as present</button> 
                          <button className="p-1 ml-7 bg-red-100 border border-red-800 text-red-800 rounded-full ">Mark all as absent</button> 

                </div>
  );
};

export default Attendance;
