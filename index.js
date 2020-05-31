//importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//Node vamos a emplear MVC (Vista vamos a utilizar )
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials')
//Generamos el sitio estatico


app.use(express.static(__dirname + '/public'));

//Configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/Gogh', (req, res)=>{
    res.render('vincent');
});

app.get('/Vinci', (req, res)=>{
    res.render('leonardo');
});

app.get('/Cami', (req, res)=>{
    res.render('pissaro');
});

//Arrancamos el servidor web
app.listen(3000,()=>{
    console.log('Escuchando en el puerto 3000');
});