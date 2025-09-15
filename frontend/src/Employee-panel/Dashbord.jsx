import React, { useContext, useEffect } from "react";
import useHook from "../hook/UseHook";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/useContext";
import EmployeeTask from "./EmployeeTask";

const Dashboard = () => {
  const navigate= useNavigate()
  const{user,setUser}= useContext(AppContext)
  console.log(user)


  return (
    <div className="w-full  flex justify-start items-start overflow-x-hidden">
        <div className=" w-[100vw] flex flex-col items-center bg-gray-100  sm:p-8">

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl mt-6">
        {/* Profile Section */}
       {user?.map((employee)=>{return(

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/red/40_-_red.jpg"
            alt="Profile"
            className="rounded-full w-24 h-24"
          />
          <h2 className="mt-4 text-lg text-black font-bold">{employee.name}</h2>
          <p className="text-gray-600">{employee?.role}</p>
          <p className="mt-2 text-sm text-blue-600 font-semibold">
           
          </p>
         <h3 className="text-lg text-blue-500 font-bold mb-4">Personal Details</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Name: {employee?.name} </li>
            <li>Department: {employee?.department}</li>
            <li>Designation: {employee?.role}</li>
            <li>Gender: Male</li>
            <li>Email: {employee?.email}</li>
            <li>Phone: {employee?.phone}</li>
            <li>
              Local Address: 98927 Alexis Landing West Lourdes, DE 08534
            </li>
            <li>Permanent Address: 5203 King Way North May, IL 23220</li>
          </ul>
          <div className="mt-4 text-left w-full">
          </div>
        </div>
)})}
        {/* Personal & Company Details */}
        <EmployeeTask/>
        {/* Notice Board & Upcoming Holidays */}
        {user?.map((employee)=>{return(
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-bold mb-4 text-blue-600">Notice Board</h3>
          <p className="text-gray-500 text-sm">No Notice</p>
          <h3 className="text-lg font-bold mt-6 mb-4">Upcoming Holidays</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="text-sm">Office Off</span>
              <span className="text-sm text-red-600">07 Sep 2018</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Office Off</span>
              <span className="text-sm text-yellow-600">05 Oct 2018</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Office Off</span>
              <span className="text-sm text-green-600">26 Oct 2018</span>
            </li>
          </ul>
        </div>
      )})}

     
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
