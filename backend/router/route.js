const express = require('express');

const router = express.Router();
const employees= require("../model/models")

// Define your routes here

router.get('/employees',async (req, res) => {
    try {
        console.log(employees)
        const employee_data= await employees.find()
        res.status(200).json(employee_data)

    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees' })
    }
});

module.exports = router;