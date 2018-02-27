var express = require('express');
var todoController = require('./controllers/todo_controller')
var app=express();

//set the template engine

app.set('view engine','ejs');


//static file

app.use(express.static('./public'));

//fier controller

todoController(app);


//listing the port

app.listen(3000);
console.log("Listing to the port 3000...");