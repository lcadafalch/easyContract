const mongoose = require("mongoose");


const usuarioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usuario: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    billeteraBitcoin:{
        type: [String],
        require: true,
    },
    billeteraEthereum:{
        type: String,
    }

})

module.exports = mongoose.model("usuario",usuarioSchema);