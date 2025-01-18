import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';


function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get("/api/employees")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  },[]);

  

  return (
   <div className='bg-blue-800 w-full h-screen'>
             ok done ho gaya
   </div>
  )
}

export default App
