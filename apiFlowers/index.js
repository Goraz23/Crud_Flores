//! Las dependencias

const express = require("express");
const cors = require("cors");

const flowersRouter =require('./routes/flowerRouter');

//* app va a tener todos los atributos y metodos de express
const app = express();

app.use(cors());
app.use(express.json());

//ruta

app.use("/flores", flowersRouter);


app.listen(3001,() => {
    console.log("Api escuchando por el puerto 3001");
});