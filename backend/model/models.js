const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const employee_schema = new Schema({
  _id:{type:Number},
 name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  phone:{ type: Number, required: true },
  department:{ type: String, required: true },
  status: { type: String, required: true },
  joiningDate: {
    $date: { type: String, required: true },}
});
const employees = model('employees', employee_schema);
module.exports= employees