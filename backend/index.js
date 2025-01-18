const express = require('express');
const app = express();
const port = 3000;
const userRouter = require("./router/route");
const connectdb = require("./db")
const cors = require("cors")



app.use(express.json());
app.use('/api', userRouter);
app.use(cors())
connectdb()


app.get('/', (req, res) => {
  res.send("connected")
 
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});