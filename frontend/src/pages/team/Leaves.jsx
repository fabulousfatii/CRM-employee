
import { Calendar, Clock, User } from 'lucide-react';

import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/useContext';
import useHook from '../../hook/UseHook';


const EmployeeLeavesDisplay = () => {
  const { employees,employeedata,getuserdata } = useHook()
 useEffect(()=>{
      getuserdata()
      employeedata()

    },[])
  //const [updateLeave,setupdateLeave]= useState(null)
  const leaves = employees?.filter((employee) => employee.leaves.length !== 0).map((employee) => employee.leaves).flat();
   console.log("here",leaves);

 
  const handleApproved = async (e) => {
    console.log(e);
     const updatedleave= {...e,status:"Approved"}
    
    const findemployee= employees?.find((employee)=> employee.email === e.email )
    console.log("findemployee",findemployee);

    const updateLeaves= findemployee?.leaves.map((leave)=> leave.startDate === e.startDate && leave.endDate === e.endDate ? updatedleave : leave)
    console.log("updateLeaves",updateLeaves);
    
    const formatleave = {...findemployee, leaves: updateLeaves}
     console.log(formatleave);
    
    
    
   try {
    
  const response = await fetch(`/api/user/employees/${findemployee?._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formatleave),
  });

 
  if (response) {
    console.log("response",response)
    console.log("leaves updated",formatleave)
    // setupdateLeave(updatedleave)
  } else {
    console.error("Error:", response.status)
  }
} catch (error) {
  console.error("Error:", error);
}
  };
    
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  return (
    <div className="container w-[84vw] bg-gray-100 h-full flex-col ml-48 justify-center text-black items-center pb-10 ">
        
        {/* progress */}
      <div className="max-w-5xl mx-auto p-6 mt-8">
        <h1 className="text-2xl font-bold mb-2 ">Employee Leaves</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-100">
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Total Leaves</span>
              </div>
              <p className="text-2xl font-bold mt-2">{leaves.length}</p>
            </div>
          </div>
          
          <div className="bg-green-100">
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="font-medium">Approved</span>
              </div>
              <p className="text-2xl font-bold mt-2">
                 {leaves.filter((leave) => leave.status === 'Approved').length} 
              </p>
            </div>
          </div>

          <div className="bg-yellow-100">
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-yellow-600" />
                <span className="font-medium">Pending</span>
              </div>
              <p className="text-2xl font-bold mt-2">
                {leaves.filter((leave) => leave.status === 'Pending').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden max-w-4xl mx-auto mt-6">   
        <div className="overflow-x-auto">

{/* displaying table heading   */}
<div className='w-full grid grid-cols-5 max-[900px]:grid-cols-3  max-sm:hidden gap-4 px-3 border-b-2 text-sm bg-[#473a96] text-white  2xl:text-lg text-center py-2'>
<div class="max-[900px]:hidden">Name</div>
  <div class="...">Type</div>
  <div class="...">Duration</div>
  <div class="">Days Count</div>
  <div class="max-[900px]:hidden">Status</div>

</div>

{/* displaying leaves data */}
    <div>
      {leaves.map((e, index) => (
<div   key={index} className='w-full grid grid-cols-5 max-[900px]:grid-cols-3 max-sm:grid-cols-1 max-sm:justify-start border-b-2 2xl:text-lg text-black gap-4 max-sm:gap-1 px-3 text-md text-center max-sm:text-start text-sm py-2 pb-2 cursor-pointer hover:bg-[#dcdcdd] '>
<div class="max-[900px]:hidden">{e?.name}</div>
  <div class="max-sm:font-bold max-sm:pl-10">{e?.type}</div>
  <div class="max-sm:pl-10">{formatDate(e.startDate)} -<br/> {formatDate(e.endDate)}</div>
  <div class="max-sm:hidden">{e?.daysCount}</div>
  <div class="w-40 text-blue-600 text-md max-lg:overflow-hidden xl:overflow-visible max-[900px]:hidden">
  <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                  e.status
                )}`}
              >
                {e.status}
              </span>{e.status === "Pending" && (
                <button
                  onClick={() => handleApproved(e)}
                  className="bg-purple-100 text-purple-900 w-20 p-0 ml-2 rounded-md text-sm"
                >
                  Approve
                </button>)}</div>
  
</div>))}
</div>
 
        </div>
      </div>
    </div>
  );
};

export default EmployeeLeavesDisplay;