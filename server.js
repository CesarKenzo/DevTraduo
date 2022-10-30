const express = require('express');//Importanto o express, mostrar arquivo estatico
const path = require('path');//importando o Path
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/dev-traduo/'));

app.get('/*', (req,res) => {
    res.sendFile(__dirname + '/dist/dev-traduo/index.html');
});

app.listen(PORT, () =>{
    console.log('Servidor Iniciado na porta ' + PORT);
});