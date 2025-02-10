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

const LeaveSchema = new mongoose.Schema({
  daysCount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    // enum: ["Pending", "Approved"], // Fewer options for status
    // default: "Pending",
    required: true,
  },
  type: {
    type: String,
    enum: ["Annual Leave", "Sick Leave"], // Only two options for type
    required: true,
  },
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
  leaves:[LeaveSchema]
});
const employees = model('employees', employee_schema);
module.exports= employees