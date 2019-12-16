const mongoose = require("mongoose");


const usuarioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        require: true,
    },
    apellido:{
        type: String,
        require: true,
    },
    usuario: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("usuario", usuarioSchema);