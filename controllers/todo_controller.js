var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connet to the data database

mongoose.connect('mongodb://test:test@ds261828.mlab.com:61828/todo');

//create schema 

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
module.exports = function (app) {

    app.get('/todo', function (req, res) {
        
        //Getting Data From mongodb and update the view
        Todo.find({},function(err,data){
           if(err) throw err;
             res.render('todo', {todos: data });
        });
       
    });

    app.post('/todo', urlencodedParser, function (req, res) {
        //Post The data to The mongo Db 
        var newTodo=Todo(req.body).save(function(err,data){
           if (err) throw err;
            res.json(data);
        });
    });
    
    
    app.delete('/todo/:item', function (req, res) {
        //Delete The data
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
           if (err) throw err;
            res.json(data);
        });
    });

}
