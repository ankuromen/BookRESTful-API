const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require('body-parser')
const dotenv = require('dotenv').config()
const bookRoutes=require('./routes/Bookroutes')
const app=express();
app.use(express.json())



//mangodb
let dburl=process.env.DB_URL
mongoose.connect(dburl).then(()=>{
    console.log("Connected Successfuly")
})


//routes
app.use('/books',bookRoutes)

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Deployment 
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("Server is Running on port "+ PORT )
})
