
import { Calendar, Clock, User } from 'lucide-react';
import useHook from '../../hook/UseHook';
import { useState } from 'react';


const EmployeeLeavesDisplay = () => {
  const { employees } = useHook();
  //const [updateLeave,setupdateLeave]= useState(null)
  const leaves = employees?.filter(employee => employee.leaves.length !== 0);
   console.log("here",leaves);

 
  const handleApproved = async (e) => {
    console.log(e);
     const updatedleave= {...e,status:"Approved"}
    
    const findemployee= employees?.find((employee)=> employee.email === e.email)
    
    const formatleave= {...findemployee,leaves:[updatedleave]}
     //console.log(formatleave);
    
    
    
   try {
    
  const response = await fetch(`/api/employees/${findemployee?._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formatleave),
  });

 
  if (response.ok) {
    console.log("leaves updated",formatleave)
    // setupdateLeave(updatedleave)
  } else {
    console.error("Error:", response.status)
  }
} catch (error) {
  console.error("Error:", error);
}
  };
    


const tableHeading= ["Employee","Type" , "Duration", "Days", "Status"]

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
    <div className="container w-[81vw]  bg-gray-100 h-screen flex-col ml-60 justify-center text-black items-center ">
        
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
                {leaves.filter(leave => leave.leaves.some(e => e.status.toLowerCase() === 'approved')).length}
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
                 {leaves.filter(leave => leave.leaves.some(e => e.status.toLowerCase() === 'pending')).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden max-w-4xl mx-auto mt-6">   
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {tableHeading.map((e)=>{
                  return(
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {e}
                </th>
                  )
                })}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaves.map((leave) => (
                <tr key={employees?._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{leave?.name}</div>
                  </td>
                  {leave.leaves.map((e)=>{
                    return(
                      <>
                      <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{e?.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDate(e.startDate)} - {formatDate(e.endDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{e.daysCount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(e.status)}`}>
                      {e.status}
                    </span>
                    {e.status==="Pending"?  <button onClick={()=>handleApproved(e)} className='bg-purple-100 text-purple-900 w-20 p-0 ml-2 rounded-md text-sm'>approved</button> : "" }
                  </td>
                      </>
                  
                    )
                    
                  })}
                 
                
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLeavesDisplay;