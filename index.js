const express = require('express');
const app = express();
app.use(express.json())
const port = 9000;
app.listen(port)

app.get('/',(req,res)=>{
    const movies = require('./moviesList.json')
    res.send({movies})
})
app.get('/:id',(req,res)=>{
    const movies = require('./moviesList.json')
    const myMovie= movies.find(movieItem => movieItem.id === parseInt(req.params.id))
    if(myMovie) return res.send({myMovie})
    res.status(404).send({message :"movies not found"})
})