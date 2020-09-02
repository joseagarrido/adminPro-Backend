c
require('dotenv').config();

const express = require ('express');
const cors = require('cors')
const {dbConexion}= require ('./database/config');

//Crea servidor express
const app =express();

//configurar cors
app.use(cors())

//Vase de datos
dbConexion();

//Ruta
app.get('/', (req,res)=>{
 res.json({
     ok:true,
     msg:'hola mundo'
 })
});

app.listen(process.env.PORT,() => {
    console.log('puerto corriendo '+ process.env.PORT);
});