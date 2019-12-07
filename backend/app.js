const express = require('express');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const usuario = require("./easyContracts/usuarios");
const contrato = require("./easyContracts/contratos");

//APERTURA SERVER
const server = express();

//MIDDLEWARES
server.use(bodyparser.json());


mongoose.connect("mongodb://localhost/easyContracts", { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log("conexion con mongo hecha!")

    // GET
    server.get('/usuario', function (req, res) {
        usuario.find((err, data) => {
            if (err) res.send(err)
            res.send(data)
        });
    });

    server.get('/contrato', function (req, res) {
        contrato.find((err, data) => {
            if (err) res.send(err)
            res.send(data)
        });
    });

    //POST
    server.post("/crearusuario", (req, res) => {

        const nuevousuario = new usuario({

            _id: mongoose.Types.ObjectId(),
            usuario: req.body.usuario,
            email: req.body.email,
            password: req.body.password,
            billeteraBitcoin: req.body.billeteraBitcoin,
            billeteraEthereum: req.body.billeteraEthereum,
        })

        nuevousuario.save((err) => {
            if (err) throw err

            res.send({

                "mensaje": "usuario creado",
                "result": req.body
            })

        })

    })


    server.post("/crearcontrato", (req, res) => {

        let nuevoContrato = new contrato({

            _id: mongoose.Types.ObjectId(),
            titulo: req.body.titulo,
            texto: req.body.texto,
            fechaCreacion: req.body.fechaCreacion,
            fechaFinalizacion: req.body.fechaFinalizacion,
            usuarioPropietario: req.body.usuarioPropietario,
            usuarioDestinatario: req.body.usuarioDestinatario,
            billeteraUsuario: req.body.billeteraUsuario,
            estado: req.body.estado,

        })

        console.log(req.body)

        nuevoContrato.save((err) => {
            if (err) throw err

            res.send({

                "mensaje": "contrato creado",
                "result": nuevoContrato
            })


        })

    })

    //PUT
    server.put("/editarusuario", (req, res) => {
        usuario.findByIdAndUpdate(
            req.body._id
            ,
            {
                $set:
                    req.body
            },
            (err) => {
                res.send({ "message": "documento actualizado" })
            }
        )
    })


    server.listen(3000, function () {
        console.log("easyContracts listening en el puerto 3000!");
    });

})



