import React, { useContext, useState } from "react";
import axios from "axios"
import useHook from "../hook/UseHook";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/useContext";

const Loginform = () => {

  const {getuserdata,employeedata,employees}= useContext(AppContext)
  const navigate = useNavigate()
   const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    axios.defaults.withCredentials= true
    try {
      const response = await axios.post("api/auth/login", { email: formData.email, password: formData.password })
      if (response) {
        console.log(response);
        console.log(response.data )
        if (response?.data?.user?.role === "admin") {
         await getuserdata()
          console.log(employees)
          navigate("/admin/team")
        }
        else{
          await  employeedata()
           navigate("/employee/dashboard")
        }
        
      }
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      // Add error handling/display logic here
    }

  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[url('https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/01/gradient-dynamic-blue-lines-background_23-2148995756-e1656080867962.jpg?fit=626%2C417&ssl=1')] bg-cover" >
      <div className="w-screen max-w-md bg-transparent backdrop-blur-sm p-8 sm:p-6 md:p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-xl md:text-3xl font-bold text-white text-gray-100 text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium  mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-2 md:px-5 py-2 border  bg-slate-300 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium  mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 sm:px-2 md:px-5 py-2 text-gray-950 border bg-slate-300 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            
            <a
              href="#"
              className="text-sm text-black hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 sm:py-1 md:py-3 px-4 sm:px-3 md:px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm sm:text-xs md:text-base text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <a
            href="#"
            className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Loginform;
