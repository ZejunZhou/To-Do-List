const express = require("express");
const body_parser = require("body-parser");
const { request } = require("http");
const app = express();
app.listen("3000");
app.get("/", (request, response) =>{
    var date = new Date()
    console.log(date.getDate())
    
    response.send("hello")
}) 
console.log("app ls listen on port 3000")
