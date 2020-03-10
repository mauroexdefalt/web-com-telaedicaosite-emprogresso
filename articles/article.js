const Sequelize = require('sequelize');
const connection = require('./../database/database');
const category = require('./../categories/category')

const Article = connection.define('articles',{

    title:{
            type : Sequelize.STRING ,
            allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull:false ,
    },body:{
        type :Sequelize.TEXT ,
        allowNull : false 
    }


})
//realacionamento
category.hasMany(Article);//uma categoria tem muitos artigos
Article.belongsTo(category);//um artigo tem uma categoria



module.exports = Article ;