const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const userRouter = require("./router/employeeRoute");
const connectdb = require("./db")
const cors = require("cors")

app.use(express.json());
app.use('/api', userRouter);
app.use(cors({ origin: env.process.FRONTEND_URL }))
connectdb()


app.get('/', (req, res) => {
  res.send("connected")
 
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});