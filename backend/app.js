const express = require('express');
// const List = require('./modles/list');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const multer = require("multer");
// const path = require("path");


// const postRoutes = require("./routing/post");


const addCourseRoute = require('./routing/course');


const app = express();
//moodle

mongoose.connect("mongodb+srv://moodle:moodle@moodle-bcmm9.mongodb.net/test?retryWrites=true&w=majority" ,{useNewUrlParser:true})
.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("Connection failed");
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
// app.use('/image',express.static(path.join("backend/image")));

app.use((req,res,next)=>{
    res.setHeader("Access-control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin ,X-Requested-With , Content-Type,Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET ,POST,PUT,PATCH,DELETE,OPTIONS"); 
    next();
});


app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));




app.use("/course",addCourseRoute)


module.exports = app;