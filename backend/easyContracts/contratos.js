const mongoose = require("mongoose");


const contratoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo:{
        type: String,
        require: true,
    },
    texto:{
        type: String,
        require: true,
    },
    fechaCreacion:{
        type: Date,
        require: true,
    },
    fechaFinalizacion:{
        type: Date,
        require:true
    },
    usuarioPropietario:{
        type: String,
        require: true,
        //autopopulate  Usuario
    },
    usuarioDestinatario:{
        type: String,
        require: true,

    },
    billeteraUsuario:{
        type: String,
        require: true,
        //autopopulate billetera
    },
    estado:{
        type: String,
        require: true,
    }


})

module.exports = mongoose.model("contrato",contratoSchema);