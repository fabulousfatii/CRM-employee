import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import useHook from "../../hook/UseHook";

const EmployeeNavbar = () => {

    const{user,setUser}= useHook()
      console.log(user)
      const navigate= useNavigate()
    
    
      const handleSelectChange = (event) => {
        const value = event.target.value;
        if (value === "logout") {
          handleLogout(); // Call the logout function here
        } else if (value === "verify-email") {
          console.log("Verify Email selected"); // Add your verify-email logic here
        }
      };
    
      const handleLogout = async () => {
        axios.defaults.withCredentials= true
        try {
            const response = await axios.post('/api/auth/logout');
            if (response) {
                // Update the user context
                //setIsLoggedIn(false)
                setUser(null)
                navigate("/")
                
            }
        } catch (error) {
            console.error(error);
        }}


  return (
    <div className="w-[100vw]  bg-white  shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 bg-indigo-800 text-white">
              <h1 className="text-xl font-bold">Employee Dashboard</h1>
              <nav className="mt-4 px-6 sm:mt-0 flex gap-4">
                <NavLink to="/employee/dashboard" className="hover:underline">
                  Home
                </NavLink>
                <NavLink to="/employee/leaves" className="hover:underline">
                  Leaves
                </NavLink>
                <NavLink to="/employee/tasks" className="hover:underline">
                  tasks
                </NavLink>
                
                <select className="rounded-lg bg-blue-500 text-white" name="My account" 
                  onChange={(e)=>handleSelectChange(e)}>
      <option >My Account</option>
      <option value="logout">Logout</option>
      <option value="verify-email">Verify Email</option>
    </select>
              </nav>
              
            </div>
          </div>
  )
}

export default EmployeeNavbar