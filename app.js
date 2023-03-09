const express = require("express");
const body_parser = require("body-parser");
const { request } = require("express");
//const { request } = require("http");
const app = express();
app.use(body_parser.urlencoded({ extended: true }));

// app use ejs as view engine
app.set("view engine", "ejs");
app.listen("3000");
app.use(express.static(__dirname + "/public"))

// create a dynamic array for storing item
let items = ["Buy Grocery", "Go to School"]

app.get("/", (request, response) =>{
    let date = new Date();
    //create a object to render today's date
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = date.toLocaleDateString("en-US", options);
    response.render("index", {"days":day, "items":items})
}) 
// callback function when recieve the post request from the form
app.post("/", (request, response) =>{
    let newItem = request.body.newItem;
    items.push(newItem);
    /**when we receive the post request from the form
    we save the variable newItem and redirect to the home route
    Otherwise, there can be a issue when response render **/
    response.redirect("/")
})

