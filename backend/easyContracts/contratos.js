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
    usuarioDestinatario:{
        type: String,
        require: true,

    },
    usuarioPropietario:{
        type: String,
        require: true,

    },
    estado:{
        type: String,
        require:true,
    },
    cantidad:{
        type: Number,
        require: true,
        // ref: 'usuarios',
        // autopopulate: true
    },
    fechaInicio:{
        type: String,
        require: true,
    },
    fechaFinalizacion:{
        type: String,
        require: true,
    }


})

// contratoSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("contrato",contratoSchema);