import React from 'react'
import App from './App'
import EmployeeDetails from './pages/EmployeeDetails'
import { Routes, Route,  } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function AppRoutes() {
    return (
      <>
      <Sidebar/>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={< EmployeeDetails/>} />
        </Routes>
      </>
        
    )
}

export default AppRoutes
