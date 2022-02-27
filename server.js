const express = require("express");
const app = express();
app.use(express.json());
const port = 9000;

const moviesRouter = require('./routes/movies-route')
app.use('/movies',moviesRouter);

app.get('/',(req,res)=>{
  res.send({message:"server is online"})
})

app.listen(port);
