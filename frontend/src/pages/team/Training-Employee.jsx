import { useEffect, useState } from 'react';
import useHook from '../../hook/UseHook';
import axios from 'axios'
import TaskTable from '../../components/tasks/TaskTable';
import TaskProgress from '../../components/tasks/TaskProgress';


function TrainingEmployee() {
    const {employees,tasks,tasksdata}= useHook()
useEffect(()=>{
        tasksdata()
  },[])

//   console.log({tasks})
    const [createTask,setCreateTask] = useState(false)
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

    const handleSubmit= async(e)=>{
        e.preventDefault()
     
         const employee = employees.find(emp => emp.email === formData.assignedTo)

         const newtask = {

        userid: employee._id,
        email:employee.email,    
        title: formData.taskTitle,
        active: false,
        dueDate: formData.taskDate,
        category: formData.category,
        completed: false,
        department: formData.department, 
        description: formData.description,
        
        };

        console.log("newtask",newtask);
        

        try {
            const response = await axios.post(`/api/tasks/createtask`, newtask)
            // console.log(updatedemployee);
            if (response) {
              console.log("Task created successfully");
              console.log(response);
              
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

    }

    const deleteTask = async (taskId) => {
        console.log("Deleting task with ID:", taskId);
        try {
            const response = await axios.delete(`/api/tasks/deletetask/${taskId}`);
            if (response) {
                console.log("Task deleted successfully");
                tasksdata(); // Refresh tasks
            }
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const updateTask = async (task) => {
        try {
            const updatedtask= {...task,completed:true, active:false}
            console.log(updatedtask);
            
            const response = await axios.put(`/api/tasks/updatetask/${task._id}`, updatedtask);
            if (response) {
                console.log("Task updated successfully");
                tasksdata(); // Refresh tasks
            }
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };
    
    
    return (
        <div className='w-[98.5vw] max-[900px]:w-[90vw] mt-10 h-full  pl-[17%] overflow-hidden '>
         <button
                 onClick={()=>setCreateTask(true)}
                 disabled={createTask}
                 className='text-xl p-2 text-white font-bold mt-2 bg-indigo-900 ml-16 '>Create New Task</button>

            <div className='flex justify-between items-center mb-5'>

              {/* create new task form   */}
            </div>
            {createTask? <div className='  max-w-4xl  mx-auto  p-6 text-black text-sm bg-gray-300 border-2 border-indigo-900  backdrop-blur-lg rounded-lg'>
                <form onSubmit={handleSubmit} className='flex gap-6'>
                    <div className='flex-1 space-y-1'>
                        <div>
                            <label className='block  mb-1'>Task Title</label>
                            <input 
                                type="text"
                                name="taskTitle"
                                 value={formData.taskTitle}
                                onChange={handleChange}
                                className='w-full p-1 rounded-lg bg-slate-50 border border-indigo-900'
                                placeholder='Enter task title'
                            />
                        </div>
                        
                        <div>
                            <label className='block  mb-1'>Due Date</label>
                            <input 
                                type="date"
                                name="taskDate"
                               value={formData.taskDate}
                                onChange={handleChange}
                                className='w-full p-1 rounded-lg bg-slate-50 border border-indigo-900'
                            />
                        </div>

                        <div>
                            <label className='block  mb-1'>Assign To</label>
                            <select 
                                name="assignedTo"
                                 value={formData.assignedTo}
                                onChange={handleChange}
                                className='w-full p-1 rounded-lg bg-slate-50 border border-indigo-900'
                            >
                                <option value="">Select Employee</option>
                                {employees?.map((emp, index) => (
                                    <option key={index} value={emp.email}>{emp.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className='block  mb-1'>Category</label>
                            <select 
                                name="category"
                                //value={formData.department}
                                onChange={handleChange}
                                className='w-full p-1 rounded-lg bg-slate-50 border border-indigo-900'
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
                            className='w-full bg-blue-900 text-gray-100 py-2 px-4 rounded-lg font-bold hover:bg-blue-500 transition-colors'
                        >
                            Create Task
                        </button>
                    </div>

                    <div className='flex-1'>
                        <label className='block  mb-1'>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className='w-full p-1 rounded-lg bg-slate-50 border border-indigo-900 h-1/2'
                            placeholder='Enter task description '
                        ></textarea>
                    </div>
                </form>
               <div className='flex justify-end'>
                 <button className='text-white border border-red-700 bg-red-700' onClick={()=>setCreateTask(false)}>close</button>
               </div>
            </div> : null}


          {/* progress */}
           <TaskProgress tasks={tasks}/>
          

     {/* task table */}
    <TaskTable tasks={tasks} onDelete={deleteTask} onUpdate={updateTask}/>

                </div>
               
           
)}

export default TrainingEmployee