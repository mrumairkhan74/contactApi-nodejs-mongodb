// modules
const express = require('express');
const db = require('./connection/db');
const routes = require('./routes/contactRoutes')
const PORT = 3000;
const app = express()


// data save in json format using express 
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// for api running 
app.use('/api',routes);


// server listening
app.listen(PORT, ()=>{
    console.log('Server Connected successfully.......!!!!!!')
});