import React, { useState } from 'react';
import useHook from '../../hook/UseHook';

function TrainingEmployee() {
    const {employees}= useHook()
    const [formData, setFormData] = useState({
        taskTitle: '',
        taskDate: '',
        assignedTo: '',
        department: '',
        category: '',
        description: '',
    })
    // console.log(employees[0].name);
    

    const handleChange=(e)=>{
    setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
     
        
       
        const newtask = {
        title: formData.taskTitle,
        dactive: true,
        assignedDate: Date.now().toLocaleString(),
        category: formData.category,
        completed: false,
        department: formData.department,                                  
        description: formData.description,
        assignedDate: formData.taskDate,
        assignedTo: formData.assignedTo,
        
        };

        console.log("newtask",newtask);
        const updatedemployee = employees.find(emp => emp.email === formData.assignedTo)
        updatedemployee.tasks.push(newtask)
        // console.log("employee",updatedemployee);

        try {
            const response =  fetch(`/api/employees/${updatedemployee._id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedemployee),
            })
            console.log(updatedemployee);
            if (response.ok) {
              console.log("Task created successfully");
            }
      } catch (error) {
        console.error("Error:", error);
      }
        setFormData({
                    taskTitle: '',
                    taskDate: '',
                    assignedTo: '',
                    category: '',
                    description: '',
                    department: '',
                })

       // window.location.reload()        
        
    }

   
    
    return (
        <div className='w-[98.5vw] max-[900px]:w-[90vw] mt-10 h-full  pl-[17%] bg-white overflow-hidden '>
            <div className='flex justify-between items-center mb-8'>
                <h1 className='text-3xl font-bold text-blue-900 ml-7 '>Create New Task</h1>
                {/* <button 
                    onClick={handleLogout}
                    className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                >
                    Logout
                </button> */}
            </div>
            <div className=' w-[84vw] max-w-5xl  mx-auto mt-8 p-6 text-black bg-gray-300 rounded-lg'>
                <form onSubmit={handleSubmit} className='flex gap-6'>
                    <div className='flex-1 space-y-4'>
                        <div>
                            <label className='block  mb-2'>Task Title</label>
                            <input 
                                type="text"
                                name="taskTitle"
                                 value={formData.taskTitle}
                                onChange={handleChange}
                                className='w-full p-2 rounded-lg bg-gray-200 '
                                placeholder='Enter task title'
                            />
                        </div>
                        
                        <div>
                            <label className='block  mb-2'>Due Date</label>
                            <input 
                                type="date"
                                name="taskDate"
                               value={formData.taskDate}
                                onChange={handleChange}
                                className='w-full p-2 rounded-lg bg-gray-200 '
                            />
                        </div>

                        <div>
                            <label className='block  mb-2'>Assign To</label>
                            <select 
                                name="assignedTo"
                                 value={formData.assignedTo}
                                onChange={handleChange}
                                className='w-full p-2 rounded-lg bg-gray-200 '
                            >
                                <option value="">Select Employee</option>
                                {employees?.map((emp, index) => (
                                    <option key={index} value={emp.email}>{emp.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className='block  mb-2'>Category</label>
                            <select 
                                name="category"
                                //value={formData.department}
                                onChange={handleChange}
                                className='w-full p-2 rounded-lg bg-gray-200 '
                            >
                                <option value="">Select Category</option>
                                <option value="development">Development</option>
                                <option value="design">Design</option>
                                <option value="marketing">Marketing</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <button 
                            type="submit"
                            className='w-full bg-blue-900 text-gray-100 py-2 px-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors'
                        >
                            Create Task
                        </button>
                    </div>

                    <div className='flex-1'>
                        <label className='block  mb-2'>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className='w-full p-2 rounded-lg bg-gray-200  h-1/2'
                            placeholder='Enter task description '
                        ></textarea>
                    </div>
                </form>
            </div>

            {/* all tasks */}
            <div className='mt-8 ml-7 w-[90%]'>
                <h2 className='text-2xl font-bold text-blue-900 mb-4'>Employee Tasks</h2>
                <div className='space-y-4 text-black'>
                    {employees?.map((employee, index) => (
                        <div key={index} className='w-full p-4 bg-gray-100 rounded-lg'>
                            <div className=' justify-between items-center'>
                                <h3 className='text-xl font-bold '>{employee?.name}</h3>
                                {/* <span className='text-gray-400'>Active Tasks: {employee?.status[length]}</span> */}
                                {employee?.tasks.map((task, index) => (
                                    <div  className='mt-2 p-2 bg-gray-300 rounded'>
                                    <p className=''>{task?.title}</p>
                                    <p className='text-sm text-gray-400'> {task?.date}</p>
                                </div>
                                ))}
                            </div>
                            <div className='mt-2'>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
)}

export default TrainingEmployee