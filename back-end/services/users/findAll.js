var mongojs = require('mongojs');
var db = mongojs('phrasalDB', ['users']);


exports.find = function(fn){
    db.users.find({}, function(err, docs){
        if(err){
            if(typeof fn === "function") fn(err, 500);  
        }else if(docs.length){
            if(typeof fn === "function") fn(err, docs);
        }else{
            if(typeof fn === "function") fn(new Error("No users found"), 400);  
        }
    });




}