import React, { useEffect, useState } from 'react';
import { User, Phone, Mail, Calendar, Building2, UserCircle, Activity } from 'lucide-react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import useHook from '../hook/useHook';

const EmployeeDetails = () => {
  // const [employees, setEmployees] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/api/employees")
  //     .then((response) => setEmployees(response.data))
  //     .catch((error) => console.error(error));
  // },[]);

 const {employees}= useHook()
  const {id}=useParams()
  console.log(id);
  console.log(employees);
  
  const employee = employees.find((user)=> user._id == id )
  console.log(employee);
  


  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className=" min-h-screen bg-gray-50 p-8 w-screen h-screen flex justify-end ">
      <section className="max-w-2xl mx-auto w-[80vw] h-[80%] border-blue-500">
        <header>
          <h1 className="text-2xl font-bold text-gray-800">Employee Profile</h1>
        </header>
        <div>
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
      </section>
    </div>
  );
};

export default EmployeeDetails;