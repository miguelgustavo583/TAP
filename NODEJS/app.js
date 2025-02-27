const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send();
})

app.listen(8081, function(){
    console.log("Seu servidor Web está ativo")
})