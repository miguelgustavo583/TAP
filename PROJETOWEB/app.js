const express = require('express')
const app = express()
const handlebars = require('express-handlebars').engine
const bodyParser = require('body-parser')
const post = require('./models/post')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res){
   res.render('primeira_pagina')
})

app.post('/cadastrar', function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.telefone,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao,

    }).then(function(){
        res.send('agendamento realizado!')

    }).catch(function(erro){
        res.send('erro ao criar o post: ' +erro)
    })
    
 })

 app.get('/consulta', function(req, res){
    post.findAll().then(function(posts){
        res.render('consulta', {posts: posts})
        console.log(posts)
    }).catch(function(erro){
        res.send("Erro ao listar os posts: " +erro)
    })
 })

app.listen(8081, function(){
    console.log('Servidor Ativo!')
})
