import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()


function AppContextProvider({children}) {
    const [employees, setEmployees] = useState([]);
    const [user,setUser] = useState([])

    axios.defaults.withCredentials=true

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
   .then((response) => setUser([response.data.userdata]))
   .catch((error) => console.error(error));
  
   }

     

   const value = {
    // backendUrl,
    user, setUser,
    employees,setEmployees,
    getuserdata, employeedata
}
  
    return (
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        )
}

export default AppContextProvider
