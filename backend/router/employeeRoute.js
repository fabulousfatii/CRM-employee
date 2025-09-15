const express = require('express');
const router = express.Router();
const {getEmployeedata,newEmployee,updateEmployee,deleteEmployee,getLoginEmployee,addLeaveToEmployee,displayEmployeeAttendance}= require("../controller/employeeController")
const authenticateToken = require("../middleware/authuser")
// Define your routes here

router.get('/employees',getEmployeedata);
router.get('/employeedata',authenticateToken,getLoginEmployee);
router.post('/employees',newEmployee);
router.put('/employees/:_id',updateEmployee);
router.post('/employees/leave/:_id',addLeaveToEmployee);
router.delete('/employees/:_id',deleteEmployee);
router.get("/attendance/:employeeId", displayEmployeeAttendance);


module.exports = router;