require('dotenv').config();
const PORT = process.env.port || 3000;

const express = require("express");
const app = express();
app.use(express.json());
const cors=require('cors');
app.use(cors());
const port = 9000;

const moviesRouter = require('./routes/movies-route')
app.use('/movies',moviesRouter);

app.get('/',(req,res)=>{
  res.send({message:"server is online"})
})

app.listen(port);
 