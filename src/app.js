const express = require ('express');  //programar de manera dinamica el servidor de backend
const morgan = require ('morgan'); //monitorear las peticiones
const mysql = require ('mysql'); //conexión con la base de datos
const myConnection = require ('express-myconnection');

const app = express();
const cors = require ('cors');  //evita las colisione entre los servicios

const mascotaRouter= require('./routes/mascotas.router');
const empleadoRouter= require('./routes/empleados.router')

app.set ('port', 3000);
app.use (cors());
app.use (morgan('dev'));

app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'gir0631'  
}, 'single'));

app.use (express.json());  //permite el envio de objetos json
app.use (express.urlencoded({extended:false}));  //permite el envio de formularios
app.use(require('./routes/mascotas.router'));
app.use(require('./routes/empleados.router'))
module.exports= app;