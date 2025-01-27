const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedDate: { type: Date, required: true },
  active: { type: Boolean, default: true },
  completed: { type: Boolean, default: false },
  category: { type: String, required: true },
  department: { type: String, required: true },
});

const employee_schema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  department: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Inactive'], required: true },
  joiningDate: { type: Date, required: true },
  tasks: [taskSchema],
});
const employees = model('employees', employee_schema);
module.exports= employees