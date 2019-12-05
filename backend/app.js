const express = require('express');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");



const server = express();

server.use(bodyparser.json());


mongoose.connect("mongodb://localhost/easyConstracts", { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) throw err;

    console.log("conexion con mongo hecha!")



    server.listen(3000, function () {
        console.log("easyContracts listening en el puerto 3000!");
    });

})



