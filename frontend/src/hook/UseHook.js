import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useHook() {
    const [employees, setEmployees] = useState([]);
    const [user,setUser] = useState([])
    const [tasks, setTasks] = useState([])

    const getuserdata= () => {
       axios
        .get("/api/user/employees")
        .then((response) => setEmployees(response.data))
        .catch((error) => console.error(error));

        console.log("employees",employees)
    }

    axios.defaults.withCredentials=true

    const employeedata= async()=>{
    await  axios
    .get("/api/user/employeedata")
   .then((response) => setUser(response.data.userdata))
   .catch((error) => console.error(error));
  
   }
    const tasksdata= async()=>{
     await  axios
    .get("/api/tasks/getTasks")
   .then((response) => setTasks(response.data))
   .catch((error) => console.error(error));

  
   }
   
    axios.defaults.withCredentials=true
  
    //console.log(employees);

    return {employees,getuserdata,employeedata,user,setUser,tasks ,tasksdata}
}

export default useHook
