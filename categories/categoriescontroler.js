const express = require('express');
const router = express.Router();
const categorie = require('./category')
const slugify = require('slugify');

router.get("/admin/categories/new",(req,res) =>{
res.render('admin/categories/new');
});

router.post('/categories/save', (req,res) => {
    var title = req.body.title;
    if(title != undefined){
             categorie.create({
                 title : title ,
                 slug : slugify(title)
             }).then(()=>{
                 res.redirect("/admin/categories");
             })
    }else{
        res.redirect('/admin/categories/new');
    }

});

router.get('/admin/categories', (req,res) =>{
    categorie.findAll().then(categoria =>{
        res.render('admin/categories/index' ,{categories : categoria});
    });
    
});

router.post("/categories/delete",(req,res) =>{
    var id = req.body.id ;
    if(id != undefined){
        if(!isNaN(id)){
categorie.destroy({
    where:{
        id:id
    }
    }).then(() =>{
        res.redirect("/admin/categories/");
})
        }else{// se nao for um numero
res.redirect("/admin/categories/");
        }
        
    }else{//null
        res.redirect("/admin/categories/");
    }
   
})



router.get('/admin/categories/edit/:id', (req,res)=>{
    var id = req.params.id;
    categorie.findByPk(id).then(categoria => {
        if(categoria != undefined){
res.render('admin/categories/edit',{categorias : categoria});
            }else{
                res.redirect("/admin/categories");
            }
    }).catch(erro =>{
        res.redirect('/admin/categories');
    })
})


module.exports = router ;