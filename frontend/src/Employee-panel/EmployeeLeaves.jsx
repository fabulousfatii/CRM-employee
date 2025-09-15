import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/useContext";

const EmployeeLeaves = () => {
    const {user}= useContext(AppContext)
    console.log("user",user[0]?.name, user);
    
  const [leaveData, setLeaveData] = useState({
    daysCount: "",
    email: "",
    startDate: "",
    endDate: "",
    status: "Pending",
    type: "",
    description: "",
    name:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Validate the form data
    if (!leaveData.email.match(/.+@.+\..+/)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!leaveData.startDate || !leaveData.endDate || !leaveData.type) {
      alert("Please fill out all required fields.");
      return;
    }
    if (new Date(leaveData.startDate) > new Date(leaveData.endDate)) {
      alert("Start date cannot be after end date.");
      return;
    }

    // Calculate daysCount
    const start = new Date(leaveData.startDate);
    const end = new Date(leaveData.endDate);
    const days = Math.ceil((end - start + 1) / (1000 * 60 * 60 * 24));

    // Set daysCount
    const leaveRequest = { ...leaveData, daysCount: days ,name:user[0].name };
    console.log(leaveRequest);
    // Submit the leave request
    try {
        const response = await axios.post(`/api/user/employees/leave/${user[0]._id}`, leaveRequest);
        if (response.status === 200) {
            alert("Leave request submitted successfully.");}
    } catch (error) {
        console.error(error);  
        alert("Error submitting leave request.");
    }

    // console.log("Leave request submitted:", leaveRequest);
    // alert("Leave request submitted successfully.");

    //Reset the form
    setLeaveData({
      daysCount: "",
      email: "",
      startDate: "",
      endDate: "",
      status: "Pending",
      type: "",
      description: "",
    });
  };

  return (
    <div className="w-full bg-gray-100 h-full pt-10" >
    <div className="p-6 max-w-3xl mx-auto bg-blue-200 rounded-xl shadow-md text-black">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Leave Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={leaveData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-100"
            required
          />
        </div>

        <div>
          <label htmlFor="startDate" className="block font-medium mb-1">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={leaveData.startDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-100"
            required
          />
        </div>

        <div>
          <label htmlFor="endDate" className="block font-medium mb-1 ">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={leaveData.endDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-100"
            required
          />
        </div>

        <div>
          <label htmlFor="type" className="block font-medium mb-1">
            Leave Type:
          </label>
          <select
            id="type"
            name="type"
            value={leaveData.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-100"
            required
          >
            <option value="">Select a type</option>
            <option value="Annual Leave">Annual Leave</option>
            <option value="Sick Leave">Sick Leave</option>
          </select>
        </div>
        <div>
  <label htmlFor="description" className="block font-medium mb-1">
    Description:
  </label>
  <textarea
    type="text"
    id="description"
    name="description"
    value={leaveData.description}
    onChange={handleChange}
    className="w-full p-2 border rounded-md bg-gray-100"
  />
</div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
        >
          Submit Leave Request
        </button>
      </form>
    </div>
    </div>
  );
};

export default EmployeeLeaves;
