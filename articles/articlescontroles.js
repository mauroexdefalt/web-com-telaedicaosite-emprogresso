const express = require('express');
const router = express.Router();


router.get('/aticles',(req,res)=>{
    res.send('rota article');
})

router.get('/admin/articles/new',(req,res)=>{
    res.send('rota admin articles new');
})
module.exports = router; 