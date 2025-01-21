import React from 'react'
import TeamSidebar from '../../components/sidebar/TeamSidebar'
import { useForm } from 'react-hook-form';

const AddnewEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    const formattedData = {
    
      ...data,
      phone: Number(data.phone), 
      status: "Active", 
      joiningDate: new Date().toString(), // Current date and time
    };

    console.log("Submitted Data:", formattedData);

    //Api call to add new employee
    try {
        const response =  fetch("/api/employees", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        })
        if (response.ok) {
            alert("Product added successfully!");}
         reset()
  } catch (error) {
    console.error("Error:", error);
  }
}

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100">
        <TeamSidebar/>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-black"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Add New Employee</h2>

        <div className="">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700"> Id </label>
          <input
            id="id"
            {...register("id_", { required: "Name is required" })}
            type="number"
            className=" bg-gray-300 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.name && <p className="text-red-500 text-sm ">{errors.name.message}</p>}
        </div>

        <div className="">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            type="text"
            className=" bg-gray-300 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.name && <p className="text-red-500 text-sm ">{errors.name.message}</p>}
        </div>

        <div className="">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700"> Role</label>
          <input
            id="role"
            {...register("role", { required: "Role is required" })}
            type="text"
            className=" bg-gray-300 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.role && <p className="text-red-500 text-sm ">{errors.role.message}</p>}
        </div>

        <div className="">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
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
            className=" bg-gray-300 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.email && <p className="text-red-500 text-sm ">{errors.email.message}</p>}
        </div>

        <div className="">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
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
            className=" bg-gray-300 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.phone && <p className="text-red-500 text-sm ">{errors.phone.message}</p>}
        </div>

        <div className="">
          <label htmlFor="department" className="block text-sm font-medium text-gray-700"> Department</label>
          <input
            id="department"
            {...register("department", { required: "Department is required" })}
            type="text"
            className=" bg-gray-300 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.department && <p className="text-red-500 text-sm ">{errors.department.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  )};


export default AddnewEmployee
