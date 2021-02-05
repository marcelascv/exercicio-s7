const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send({
        titulo: "Alguns livros disponíveis na livraria",
        data: "26/09/2020"
    })
});

module.exports = router;