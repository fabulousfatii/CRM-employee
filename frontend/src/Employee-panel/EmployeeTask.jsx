import React, { useContext, useState } from "react";
import { AppContext } from "../context/useContext";

const EmployeeTask = () => {
 const{user,setUser}= useContext(AppContext)
  // const [taskList, setTaskList] = useState(tasks);

  console.log("user",user);
  

  // const handleTaskComplete = (taskId) => {
  //   setTaskList((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === taskId ? { ...task, status: "completed" } : task
  //     )
  //   );
  // };

  const completedTasks = user[0]?.tasks.filter((task) => task.completed === true);
  const activeTasks = user[0]?.tasks.filter((task) => task.active === true);

  return (
    <div className="p-4 mt-10 space-y-6 max-w-4xl mx-auto">
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 border border-indigo-500 p-4 rounded-xl shadow-md">
      <div className="text-lg font-bold text-green-600 mb-2 sm:mb-0">
        Completed Tasks: {completedTasks?.length}
      </div>
      <div className="text-lg font-bold text-blue-600">
        Active Tasks: {activeTasks?.length}
      </div>
    </div>

    <div className="space-y-4">
      {user[0]?.tasks?.map((task,index) => {
        console.log("task",task)
        return(
        <div key={index}
         
          className={`p-4 rounded-xl shadow-md transition-colors duration-300 ${
            task.completed === true
              ? "bg-green-100 border-l-4 border-green-500"
              : "bg-blue-100 border-l-4 border-indigo-500"
          }`}
        >
          <h3 className="text-xl font-bold mb-2 text-black">{task.title}</h3>
          <p className="text-gray-700 mb-4">{task.description}</p>
          {task.active === true && (
            <button
              onClick={() => handleTaskComplete(task.id)}
              className="px-4 py-2 bg-indigo-700 text-white rounded-xl hover:bg-indigo-600 transition"
            >
              Mark as Completed
            </button>
          )}
        </div>)
})}
    </div>
  </div>
  );
};

export default EmployeeTask;

// Example usage
// Pass the tasks as props to the EmployeeTaskDisplay component
// const tasks = [
//   { id: 1, title: "Task 1", description: "Complete the report", status: "active" },
//   { id: 2, title: "Task 2", description: "Attend the meeting", status: "active" },
//   { id: 3, title: "Task 3", description: "Submit code review", status: "completed" },
// ];
// <EmployeeTaskDisplay tasks={tasks} />
