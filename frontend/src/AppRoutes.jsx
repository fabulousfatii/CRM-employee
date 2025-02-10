import React from 'react'
import App from './App'
import EmployeeDetails from './subPages/Employee/EmployeeDetails'
import { Routes, Route,  } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Employee from './pages/team/Employee'
import PerformanceEmployee from './pages/team/Performance-Employee'
import TrainingEmployee from './pages/team/Training-Employee'
import AddnewEmployee from './pages/team/AddnewEmployee'
import Team from './pages/team/Team'
import Services from './pages/services/Services'
import About from './pages/home/About'
import Leaves from './pages/team/Leaves'
function AppRoutes() {
    return (
      <>
      <Header/>
      <Sidebar/>
      <Routes>
     
          <Route path="/" element={<App />} />

          <Route path="/home">
          <Route index element={<About />} />
          </Route> 

          <Route path="/team">
            <Route index element={<App />} />
            <Route path="performance" element={<PerformanceEmployee/>} />
            <Route path="training" element={<TrainingEmployee/>} />
            <Route path="addnew" element={<AddnewEmployee/>} />
            <Route path="leaves" element={<Leaves/>} />
            <Route path="employee" element={<App/>} />
            <Route path=":id" element={< EmployeeDetails/>} />
          </Route>

          <Route path='/services'>
            <Route index element={<Services />} />
          </Route>
          
        </Routes>
      </>
        
    )
}

export default AppRoutes
