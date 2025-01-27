import React, { useEffect, useState } from 'react';
import { User, Phone, Mail, Calendar, Building2, UserCircle, Activity } from 'lucide-react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import useHook from '../../hook/UseHook';
import TeamSidebar from '../../components/sidebar/TeamSidebar';
import Updateform from '../../components/employee/Updateform';

const EmployeeDetails = () => {
 
const [updateModel, setUpdateModel] = useState(false);
 const {employees}= useHook()
  const {id}=useParams()

  
  const employee = employees.find((user)=> user._id == id )
  console.log(employee);
  
 

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const updatehandle = (msg) => {
    if(msg === "clicked") setUpdateModel(true)
    if(msg === "close") setUpdateModel(false)
    
  }

  return (
    <div className=" min-h-screen bg-gray-50  w-screen h-screen flex justify-end max-sm:flex-col-reverse max-sm:pt-10">
      
      
      <section className=" max-w-2xl mx-auto mt-10 w-[60%] h-[80%] max-md:w-full max-md:pt-5  max-sm:flex-col-reverse flex gap-4 justify-between border-blue-500">
        
        <div className="section-A">
        <header>
          <h1 className="text-2xl font-bold text-gray-800">Employee Profile</h1>
        </header>
          <div className="space-y-6">
          
            <div className="flex items-center space-x-4">
              <User className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="text-lg font-medium text-gray-900">{employee?.name}</p>
              </div>
            </div>

          
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-medium text-gray-900">{employee?.email}</p>
              </div>
            </div>

            
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-lg font-medium text-gray-900">{employee?.phone}</p>
              </div>
            </div>

       
            <div className="flex items-center space-x-4">
              <Building2 className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="text-lg font-medium text-gray-900">{employee?.department}</p>
              </div>
            </div>

           
            <div className="flex items-center space-x-4">
              <UserCircle className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="text-lg font-medium text-gray-900">{employee?.role}</p>
              </div>
            </div>

           
            <div className="flex items-center space-x-4">
              <Calendar className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Joining Date</p>
                <p className="text-lg font-medium text-gray-900">{formatDate(employee?.joiningDate)}</p>
              </div>
            </div>

       
            <div className="flex items-center space-x-4">
              <Activity className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {employee?.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section-B'>
        <div className="flex flex-col text-blue-800 border-opacity-35 font-bold justify-start items-start p-3 space-x-4 rounded-xl border-sky-600 border-2 mt-10 w-60 h-40 max-md:h-fit">
          <h4 className='px-5'> Update employee</h4>
  <button onClick={()=>updatehandle("clicked")} className="bg-green-500 hover:bg-green-700  text-white font-bold py-1 rounded-xl" >
    Update
  </button>
          <h4 className='px-2 '> Delete employee</h4>
  <button className="bg-rose-500 hover:bg-rose-700  text-white font-bold py-1 rounded-xl" onClick={() => console.log('Update button clicked')}>
    delete
  </button>
      </div>

      <div className="TASKS flex flex-col text-blue-800 border-opacity-35 font-bold justify-start items-start p-3  rounded-xl border-sky-600 border-2 mt-5 w-96  max-md:h-fit">
  <h4 className='p-3 font-bold text-2xl text-center'> Tasks</h4>
  <div className="">
    
    {employee?.tasks.map((task, index) => {
      return (
        <div key={index} className="flex items-center  bg-[#dedddf] px-4 my-2 rounded-lg">
    
          <div>
            <p className="text-sm text-blue-700">{task.title}</p>
            <p className="text-lg font-medium text-gray-900">{task.description}</p>
            <p className="text-sm  text-green-700">{task.active=== true? "Active":""}</p>
          </div>
        </div>
      );
    })}
    
  </div>
</div>
        </div>
      </section>
    {updateModel && <Updateform employee={employee} onClick={()=>updatehandle("close")} />}
    </div>
  );
};

export default EmployeeDetails;