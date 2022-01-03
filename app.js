const express = require("express")
const app = express()
const path = require('path');


let homeRouter = require(path.join(__dirname ,"routers","main.js"));

app.use('/', homeRouter);

app.listen(3000, () => {
    console.log("Servidor funcionando")
})