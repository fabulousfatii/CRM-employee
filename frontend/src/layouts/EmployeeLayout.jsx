import EmployeeNavbar from "../components/employee-panel/EmployeeNavbar";

// EmployeeLayout.js
const EmployeeLayout = ({ children }) => {
    
    return <div className=""> <EmployeeNavbar/>{children}</div>;
  };
  
  export default EmployeeLayout;
  