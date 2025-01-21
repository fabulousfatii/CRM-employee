const express = require('express');

const router = express.Router();
const {getEmployeedata,newEmployee,updateEmployee}= require("../controller/employeeController")

// Define your routes here

router.get('/employees',getEmployeedata);
router.post('/employees',newEmployee);
router.put('/employees/:_id',updateEmployee);


module.exports = router;