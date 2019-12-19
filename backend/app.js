const express = require('express');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors")
const jwt = require("jsonwebtoken");
const jwtChecker = require("express-jwt");
const cookieparser = require("cookie-parser");
const bcrypt = require("bcrypt")
const axios = require("axios")
const usuario = require("./easyContracts/usuarios");
const contrato = require("./easyContracts/contratos");
const moment = require("moments");
const fs = require("fs")
 
//secrets
const secretsFile = fs.readFileSync("secrets.json")  // sincrono porque es necesario tenerlo
const secrets = JSON.parse(secretsFile)
console.log(secrets["jwt_clave"])
//APERTURA SERVER
const server = express();

//MIDDLEWARES
server.use(cors({
    credentials: true,
    origin: 'https://52.47.91.157'
}))
server.use(bodyparser.json());
server.use(cookieparser())

server.use(jwtChecker({
    secret: secrets["jwt_clave"],              // comprueva la validez del token 
    getToken: (req) => {           // saca la cookie
        console.log(req.cookies['test'])
        return req.cookies['jwt']; // retorna la cookie
    }

}).unless({ path: ["/register","/logearUsuario"] }))// todas las rutas menos register y login
server.use((err, req, res, next)=>{
    if(err.name == 'UnauthorizedError') {
        res.send({err: 'Fail here'})
    }
})

mongoose.connect("mongodb+srv://cashroll:ePinB*2ZE@v,KP6@easycontracts-rhy0a.mongodb.net/test?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log("conexion con mongo hecha!")




    //GET CONTRATOS

    server.get('https://blockchain.info/rawaddr/1NHX3eTN4s1tRNktsvG1Pea5VRWHiK4u7', (req, res) => res.send('Hello World!'))

    server.get("/contrato", function (req, res) {

        let filtroEstado = req.query.estado;
        let objFiltro = {};

        if (filtroEstado != undefined && filtroEstado != "")
            objFiltro.estado = filtroEstado;

        contrato.find(objFiltro, (err, contractosFiltrados) => {
            if (err) res.send(err);

            res.send(contractosFiltrados);
        });
    });


    //POST inicio
    server.post("/registrarUsuario", (req, res) => {

        bcrypt.hash(req.body.password, 11, (err, hash) => {
            const nuevousuario = new usuario({


                _id: mongoose.Types.ObjectId(),
                nombre: req.body.name,
                apellido: req.body.apellido,
                usuario: req.body.usuario,
                billetera:req.body.billetera,
                email: req.body.email,
                password: hash
            })

            nuevousuario.save((err) => {
                if (err) throw err

                res.send({

                    "mensaje": "usuario creado",
                    "result": nuevousuario
                })
            })

        })

    })

    server.post("/logearUsuario", (req, res) => {
        usuario.find((err, data) => {
            const usuarioLogeado = data.filter(f => f.email === req.body.email);
            if (usuarioLogeado.length > 0) {
                bcrypt.compare(req.body.password, usuarioLogeado[0].password, (err, result) => {
                    if (result) {                         //crear un jwt
                        const token = jwt.sign({ 'username': req.body.usuario },secrets["jwt_clave"]); //Setejar la cookie i passar-li el valor del token generat           
                        res.header('Set-Cookie', `jwt=${token}; httponly; maxAge: 99999`);       //La clau httpOnly és important per evitar que manipulin la cookie
                        res.send({ 'logged': true }) //envia 
                    }
                    else {
                        res.send({ "logged": false })
                    }
    
                })
            }
        })
    
    })

    server.post("/crearContrato", (req, res) => {
        usuario.findOne({ usuario: req.body.usuarioDestinatario }, (err, data) => {

            if (data !== null) {
                // usuario existe
                let usuarioId = data._id;
            }
            else if (req.body.fechaFinalizacion > req.body.fechaInicio) {

                // TODO: utilizar usuarioId en el contracto y hacer el autopopulate

                let nuevoContrato = new contrato({

                    _id: mongoose.Types.ObjectId(),
                    titulo: req.body.titulo,
                    texto: req.body.texto,
                    usuarioDestinatario: req.body.usuarioDestinatario,
                    estado: "pendiente",
                    cantidad: req.body.cantidad,
                    fechaInicio: req.body.fechaInicio,
                    fechaFinalizacion: req.body.fechaFinalizacion,
                })
                nuevoContrato.save((err) => {

                    if (err) throw err
                    res.send({
                        "mensaje": "contrato creado",
                        "result": nuevoContrato
                    })
                    console.log(nuevoContrato)
                })
            }
            else {
                res.send({

                    "mensaje": "usuario no encontrado",
                    "fecha": `revise la fecha ${req.body.fechaInicio} es mayor a la fecha de finalización ${req.body.fechaFinalizacion}`

                })
            }
        })
    })
    //PUT
    server.put("/editarUsuario", (req, res) => {
        usuario.findByIdAndUpdate(
            req.body._id
            ,
            {
                $set:
                    req.body
            },
            (err) => {
                res.send({ "message": "usuario actualizado" })
            }
        )
    })
    server.put("/editarcontrato", (req, res) => {
        contrato.findByIdAndUpdate(
            req.body._id
            ,
            {
                $set:
                    req.body
            },
            (err) => {
                res.send({ "message": "contrato actualizado" })
            }
        )
    })

    //ELIMINAR
    server.delete("/eliminarusuario/:_id", (req, res) => {
        usuario.findByIdAndDelete(req.params._id, (err) => {
            if (err) throw err
            res.send({ message: "usuario eliminado" })
        })
    })

    server.delete("/eliminarcontrato/:_id", (req, res) => {
        contrato.findByIdAndDelete(req.params._id, (err) => {
            console.log(req.params.id)
            if (err) throw err
            res.send({ message: "contrato eliminado" })
        })
    })

    server.listen(3000, function () {
        console.log("easyContracts listening en el puerto 3000!");
    });

})



