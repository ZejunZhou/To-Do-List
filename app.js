const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
// brew services run mongodb-community (use this command to start mongodb server)
const app = express();
app.use(body_parser.urlencoded({ extended: true }));

// app use ejs as view engine
app.set("view engine", "ejs");
app.listen("3000");
app.use(express.static(__dirname + "/public"));


// connect to mongoDB
mongoose.connect("mongodb://localhost:27017/todolistDB");

const todolist_schema = {
    name: {
        type:String,
        required: true
    }
}
// create mongoose data model
const Item_Model = mongoose.model("item", todolist_schema);

const Item_Document1  = new Item_Model ({
    name: "Get Water"
})

const Item_Document2  = new Item_Model ({
    name: "Make dinner"
})

// save item document in a list
const document_list = [Item_Document1, Item_Document2]

// use insert many to place into database
// Item_Model.insertMany(document_list)
//   .then(docs => {
//     console.log(docs.length + ' docs saved to database.');
//   })
//   .catch(error => {
//     console.error(error);
//   });


// create a dynamic array for work list
let workItem = [];

/**Render to home page */
app.get("/", (request, response) =>{
    
    Item_Model.find()
    .then((docs) => {

        let date = new Date();
        let options = {
            weekday: "long",
            day: "numeric",
            month: "long"
        };
        var day = date.toLocaleDateString("en-US", options);
        if (docs.length == 0) {
            response.render("index", {"title":day, "items":[{name:"Let's get Started!"}], "postType": "home"})
        } else {
            response.render("index", {"title":day, "items": docs, "postType": "home"})
        }
    })
    .catch((err) => console.log(err));
    
}) 
// callback function when recieve the post request from the form
app.post("/", (request, response) =>{
    // case1: when button's value is work, render at /Worklist
    // if (request.body.button == "work"){
    //    let newItem = request.body.newItem;
    //    workItem.push(newItem);
    //    response.redirect("/Worklist");

    // caes2: home case, redner at / 
   
    let newItem = request.body.newItem;
    const Item_Insert = new Item_Model({
        name: newItem
    })

    Item_Insert.save()
    .catch((err) => {
        
    })

        //items.push(newItem);
        /**when we receive the post request from the form
        we save the variable newItem and redirect to the home route
        Otherwise, there can be a issue when response render **/
    response.redirect("/")
})


/**Callback function to implement checkbox delete */
app.post("/delete", (request, response) =>{
   const checkedItemId = request.body.checkbox;
   Item_Model.findByIdAndRemove(checkedItemId)
   .then((docs) => {
        //console.log("successfully remove " + docs)
        response.redirect("/")
   })
   .catch((err) => {
        console.log("something wrong happened")
   })

})


