
const employees= require("../model/employee.model")

//getting data
const getEmployeedata= async(req,res)=>{
    try {
        const employee_data= await employees.find()
        res.status(200).json(employee_data)

    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees' })
    }
}

//insert new data 
const newEmployee = async (req, res) => {
    try {
        const {joiningDate,_id, name, role, email, phone, department, status } = req.body;
        const newemployee = new employees({joiningDate,_id, name, role, email, phone, department, status, });
        const savedEmployee = await newemployee.save();
        if (!savedEmployee) {
            res.status(400).json({ message: 'Error creating employee' });
        } else {
            res.json({ employee: savedEmployee });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//updating data
const updateEmployee = async (req, res) => {
    try {
        const {_id}= req.params
        const {joiningDate, name, role, email, phone, department, status,tasks, leaves } = req.body;
        const updatedEmployee = await employees.findByIdAndUpdate(_id , {joiningDate,_id, name, role, email, phone, department, status,tasks, leaves }, { new: true });
        if (!updatedEmployee) {
            res.status(400).json({ message: 'Error updating employee' });
        } else {
            res.json({ employee: updatedEmployee });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//delete employee
const deleteEmployee = async (req, res) => {
    try {
        const {_id} = req.params
        const deletedEmployee = await employees.findByIdAndDelete(_id);
        if (!deletedEmployee) {
            res.status(400).json({ message: 'Error deleting employee' });
        } else {
            res.json({ message: 'Employee deleted successfully' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports= {getEmployeedata,newEmployee,updateEmployee,deleteEmployee}