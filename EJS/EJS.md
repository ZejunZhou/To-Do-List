# EJS (embed javascript template)

## Installation
npm i ejs
---
## Set up
app use ejs as view engine
```
app.use("view engine", "ejs");
```
---
## Use EJS with Express

**Format**: 

* format1: Outputs the value into the template (HTML escaped)
```
<%= EJS %>
```
* format2: 'Scriptlet' tag, for control-flow, no output
```
<%  %>
```
### set up
1. set up *views* directory
2. create ejs file (same as html)
3. response.render("index", {"days":day}) **"index"** is refering ot index.ejs file and **"days"** is the ejs argument in ejs file, **day** is the value



