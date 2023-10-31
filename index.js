// import { createRequire } from 'module';

// const require = createRequire(import.meta.url);
// console.log('Hola Mundo!!!!');
const express = require('express');
//import express from 'express'


require('dotenv').config();
//require('dotenv').config({ path: './config.env'}); 
const { dbConnection } = require('./database/config');

console.log(process.env);
console.log(process.env.PORT);

// crear el servidor de express
 const app = express();

//base de datos
dbConnection();

 // * Directorio Publico
//!use (middleware) es una funcion que se ejecuta cuando se hace una peticion a mi servidor
app.use( express.static('public'));

//* Lectura y parseo del body
app.use(express.json());

 // * Rutas
 app.use('/api/auth',require('./routes/auth'));
//  app.get('/', (req , res) => {
  
//     res.json({
//         ok: true
//     });
//  });

 //escuchar peticiones
//  app.listen(4000, () => {
//     console.log(`Servidor corriendo en puerto ${4000}`);
//  });

 app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
 });