const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const categoriesControler = require('./categories/categoriescontroler');
const articleControler = require('./articles/articlescontroles');

const Article = require('./articles/article');
const Categorie = require('./categories/category')

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//database
connection
 .authenticate()
 .then(()=>{
     console.log("conexao feita com sucesso!");
 }).catch((erro) =>{
     console.log('erro');
 });

//rotas


app.use('/',categoriesControler);
app.use('/',articleControler);

app.get('/',(req,res) =>{
    res.render('index');
    });

//servidor
app.listen(4000, () => {
    console.log('o servidor  esta rodando')
});
