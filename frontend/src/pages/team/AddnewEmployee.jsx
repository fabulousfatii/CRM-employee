import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios"
import { User, Mail, Shield, Key, Phone, Building, Loader2 } from 'lucide-react'

const AddnewEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.withCredentials = true

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    const formattedData = {
      ...data,
      phone: Number(data.phone),
      status: "Active",
    };

    console.log("Submitted Data:", formattedData);

    // Api call to add new employee
    try {
      const response = await axios.post("/api/auth/register", formattedData);
      if (response) {
        alert("Employee added successfully!");
        console.log(response);
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden pl-32 flex  flex-col items-center justify-center ">
        {/* <TeamSidebar/> */}
        <h2 className="text-2xl font-bold mb-6  text-blue-900">Add New Employee</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-100 p-8 rounded-xl flex gap-4 shadow-xl w-full max-w-4xl text-black border border-gray-200"
      >
        

        <div className='w-1/2'>

        <div className="mb-4">
          <label htmlFor="employeeId" className=" text-sm font-medium  flex items-center gap-1">
            Employee Id <User size={16} />
          </label>
          <input
            id="employeeId"
            type="text"
            placeholder="Enter employee ID"
            {...register("employeeId", { required: "Employee ID is required" })}
            className="bg-gray-100 text-black w-full p-3 rounded-md border border-indigo-800 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
          />
          {errors.employeeId && <p className="text-red-600 text-sm mt-1">{errors.employeeId.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="name" className=" text-sm font-medium  flex items-center gap-1">
            Name <User size={16} />
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter full name"
            className="bg-gray-100 text-black w-full p-3 rounded-md border border-indigo-800 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="role" className=" text-sm font-medium  flex items-center gap-1">
            Role <Shield size={16} />
          </label>
          <input
            id="role"
            {...register("role", { required: "Role is required" })}
            type="text"
            placeholder="Enter role"
            className="bg-gray-100 text-black p-3 w-full rounded-md border border-indigo-800 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
          />
          {errors.role && <p className="text-red-600 text-sm mt-1">{errors.role.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className=" text-sm font-medium  flex items-center gap-1">
            Email <Mail size={16} />
          </label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="Enter email address"
            className="bg-gray-100 text-black w-full p-3 rounded-md border border-indigo-800 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </div>

        </div>

        <div className='w-1/2'>

        <div className="mb-4">
          <label htmlFor="password" className=" text-sm font-medium  flex items-center gap-1">
            Password <Key size={16} />
          </label>
          <input
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Password must be at least 10 characters",
              },
            })}
            type="password"
            placeholder="Enter password"
            className="bg-gray-100 text-black  w-full p-3 rounded-md border border-indigo-800 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
          />
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className=" text-sm font-medium  flex items-center gap-1">
            Phone <Phone size={16} />
          </label>
          <input
            id="phone"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone must be a 10-digit number",
              },
            })}
            type="tel"
            placeholder="Enter phone number"
            className="bg-gray-100 text-black w-full p-3 rounded-md border border-indigo-800 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="department" className=" text-sm font-medium  flex items-center gap-1">
            Department <Building size={16} />
          </label>
          <input
            id="department"
            {...register("department", { required: "Department is required" })}
            type="text"
            placeholder="Enter department"
            className="bg-gray-100 text-black w-full p-3 rounded-md border border-indigo-800 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
          />
          {errors.department && <p className="text-red-600 text-sm mt-1">{errors.department.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ${
            isLoading ? 'cursor-not-allowed opacity-70' : ''
          }`}
        >
          {isLoading && <Loader2 className="animate-spin h-5 w-5" />}
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};


export default AddnewEmployee
