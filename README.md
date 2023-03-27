# To-do List

## Table of Contents
- [Requirement](#requirement)
- [Description](#description)
- [Code Installation](#installation)
- [Usage](#usage)

## Requirement

* Node.js v10 or higher
* MongoDB v4.0 or higher (Community Version)

## Description

A web application helped users in organizing tasks and increasing productivity. Built using Node.js, Express.js, EJS, HTML/CSS and MongoDB/Mongoose. 

## Installation

To run the script, make sure you have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed on your machine.

Then, at your local computer

```
git clone https://github.com/ZejunZhou/To-Do-List.git

cd To-Do-List
```
## Usage

Use **npm install** to install necessary dependency

```
npm install express

npm install body-parser

npm install mongoose
```

After you have installed the necessary dependency, run following command to start your local Mongodb 

```
brew services run mongodb-community
```

Then, start the app by

```
node app.js
```

You can then interact it with the app at **http://localhost:3000/**


## Configuration

The default port that the app is listen to is 3000
The default port that Mongodb is listen to is 27017








