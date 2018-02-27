var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false})
var data=[{item:'Get Milk'},{item:'Walk dog'},{item:'kick some coding ass'}]
module.exports=function(app){
    
    app.get('/todo',function(req,res){
        
        res.render('todo',{todos:data});
    });
    
    app.post('/todo',urlencodedParser,function(req,res){
        data.push(req.body)
        res.json(data);
    });
    
    app.delete('/todo',function(req,res){
        
    });
    
};