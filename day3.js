const express = require('express');

const app = express();

app.get("/",function(req,res){
    res.send("Hello World");
})

app.get("/chicken",function(req,res){
    res.send("Chicken order is placed");
})

app.get("/recipe",function(req,res){

    var customized = {
        itemName:"Chicken",
        weight:"50gm",
        price:250.00,
        spicy:false
    }
    res.send(customized);
})



app.listen(3000,()=>console.log('listening on port 3000'));