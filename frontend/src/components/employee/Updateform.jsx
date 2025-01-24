// Desc: This file contains the form to update the employee details
import { useState } from "react";
import { useForm } from "react-hook-form";

const Updateform = ({employee,onClick}) => {
  // using react-hook-form
  const [saved,setsaved]=useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
      defaultValues: {
        name: employee?.name,
        role: employee?.role,
        email: employee?.email,
        phone: employee?.phone,
        department: employee?.department,
      }
    });
    
    const onSubmit = (data) => {
        console.log(data);
        const formattedData = {
        ...data,
        status: "Active", 
        };
    
        console.log("Submitted Data:", formattedData);
    
        //Api call to add new employee
        try {
        const response = fetch(`/api/employees/${employee?._id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedData),
        });
        console.log(formattedData);
        setsaved(true)

        reset();
        } catch (error) {
        console.error("Error:", error);
        }
    };

return(
    <div className="min-h-screen w-screen absolute z-40 flex items-center justify-center backdrop-blur-md" >

      {/* close button */}
    <button onClick={onClick}
  type="button"
  className="absolute top-4 right-[27%] bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>


  <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white p-8 rounded-lg absolute shadow-md w-full max-w-md text-black"
  >
    <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Update Employee</h2>

    <div className="">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name:{employee?.name} </label>
      <input
        id="name"  type="text"
        {...register("name", { required: "Name is required" })}
        className=" bg-gray-300 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      {errors.name && <p className="text-red-500 text-sm ">{errors.name.message}</p>}
    </div>

    <div className="">
      <label htmlFor="role" className="block text-sm font-medium text-gray-700"> Role :{employee?.role} </label>
      <input
        id="role" type="text"
        {...register("role", { required: "Role is required" })} 
        className=" bg-gray-300 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      {errors.role && <p className="text-red-500 text-sm ">{errors.role.message}</p>}
    </div>

    <div className="">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email:{employee?.email}  </label>
      <input
        id="email" type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email format",
          },
        })}
        className=" bg-gray-300 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      {errors.email && <p className="text-red-500 text-sm ">{errors.email.message}</p>}
    </div>

    <div className="">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:{employee?.phone} </label>
      <input
        id="phone"  type="tel"
        placeholder="enter new phone"
        {...register("phone", {
          required: "Phone is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Phone must be a 10-digit number",
          },
        })}
        className=" bg-gray-300 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      {errors.phone && <p className="text-red-500 text-sm ">{errors.phone.message}</p>}
    </div>

    <div >
      <label htmlFor="department" className="block text-sm font-medium text-gray-700"> Department:{employee?.department} </label>
      <input
        id="department" type="text"
        {...register("department", { required: "Department is required" })}
        className=" bg-gray-300 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      {errors.department && <p className="text-red-500 text-sm ">{errors.department.message}</p>}
    </div>

    {saved? <p className="text-green-500 text-sm ">Employee updated successfully</p>:
    <button 
    type="submit"
    className="w-full mt-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Save Updates
  </button>}
  </form>
</div>)
}
export default Updateform;
