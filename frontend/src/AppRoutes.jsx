import App from './App'
import EmployeeDetails from './subPages/Employee/EmployeeDetails'
import { Routes, Route, } from 'react-router-dom'
import PerformanceEmployee from './pages/team/Performance-Employee'
import TrainingEmployee from './pages/team/Training-Employee'
import AddnewEmployee from './pages/team/AddnewEmployee'
import Leaves from './pages/team/Leaves'
import Dashboard from './Employee-panel/Dashbord'
import Loginform from './login/Loginform'
import AdminLayout from './layouts/AdminLayout'
import EmployeeLayout from './layouts/EmployeeLayout'
import EmployeeTask from './Employee-panel/EmployeeTask'
import EmployeeLeaves from './Employee-panel/EmployeeLeaves'
import Attendence from "./pages/team/Attendence"
import AttendenceReport from './pages/team/AttendenceReport'
import Announcements from './pages/team/Announcements'

function AppRoutes() {
    return (
      <>
        <Routes>
        <Route path="/" element={<Loginform />} />
        

        {/* Admin Routes */}
        <Route
  path="/admin/*"
  element={
    <AdminLayout>
      <Routes>
        <Route path="/" element={<App />} />
      


        <Route path="/home">
        </Route>

        <Route path="/team">
          <Route index element={<App />} />
          <Route path="performance" element={<PerformanceEmployee />} />
          <Route path="training" element={<TrainingEmployee />} />
          <Route path="addnew" element={<AddnewEmployee />} />
          <Route path="leaves" element={<Leaves />} />
          <Route path="employee" element={<App />} />
          <Route path=":id" element={<EmployeeDetails />} />
          <Route path="attendence" element={<Attendence/>} />
          <Route path="attendence-report" element={<AttendenceReport/>} />
          <Route path="announcements" element={<Announcements/>} />
            {/* <Route index element={<About />} /> */}

          

          </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </AdminLayout>
  }
/>

<Route
          path="/employee/*"
          element={
            <EmployeeLayout>
              <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tasks" element={<EmployeeTask/>} />
              <Route path="/leaves" element={<EmployeeLeaves/>} />
             
              
              
                {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </EmployeeLayout>
          }
        />
        

        </Routes>
      </>
      

    )
}

export default AppRoutes