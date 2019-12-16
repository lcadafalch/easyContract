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

//APERTURA SERVER
const server = express();

//MIDDLEWARES
server.use(cors())
server.use(bodyparser.json());
// server.use(jwtChecker({
//     secret: secrets["jwt_clave"],               
//     getToken: (req) => {           
//         return req.cookies['jwt']; 
//     }
// }).unless({ path: ["/crearusuario", "/logearusuario"] }))


mongoose.connect("mongodb://localhost/easyContracts", { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log("conexion con mongo hecha!")


    //GET CONTRATOS
    server.get("/contrato", function (req, res) {

        let filtroEstado = req.query.estado;
        let objFiltro = {};

        if (filtroEstado != undefined && filtroEstado != "")
            objFiltro.estado = filtroEstado;

        contrato.find(objFiltro,(err, contractosFiltrados) => {
            if (err) res.send(err);

            res.send(contractosFiltrados);
        });
    });

    //POST
    server.post("/registrarUsuario", (req, res) => {

        bcrypt.hash(req.body.password, 11, (err, hash) => {
            const nuevousuario = new usuario({


                _id: mongoose.Types.ObjectId(),
                nombre: req.body.name,
                apellido: req.body.apellido,
                usuario: req.body.usuario,
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
            const usuarios = data
            const password = usuarios.filter(pass => pass.password === req.password)
            if (password.length > 0) {
                bcrypt.compare(req.body.password, password[0].password, (err, result) => {

                    if (result) {
                        res.send({ "logged": true })
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



