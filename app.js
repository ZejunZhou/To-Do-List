const express = require("express");
const body_parser = require("body-parser");
const { request } = require("http");
const app = express();
// app use ejs as view engine
app.set("view engine", "ejs");

app.listen("3000");
app.get("/", (request, response) =>{
    var date = new Date();
    day_number = date.getDay();

    day = calculate_day(day_number);


    response.render("index", {"days":day})
}) 
console.log("app ls listen on port 3000")

const calculate_day = (day_number) => {
    switch (day_number){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid date due to error"
    }
}
