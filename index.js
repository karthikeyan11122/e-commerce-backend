//.import express inside index.js
const express = require('express')

//import cors in index.js 
const cors = require('cors')

const dataService = require('./services/dataservice')

//.creat server using express
const server = express()

//use cors difine the origin to share the data  
server.use(cors({
    origin:'http://localhost:4200'
}))

//10. parse json data  
server.use(express.json())

//server-app.http-method(path,call back function)
server.listen(3000,()=>{
    console.log("cart server is listening at port number 3000");
})



//all-product Api

server.get('/all-products',(req,res)=>{
    dataService.allproducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})