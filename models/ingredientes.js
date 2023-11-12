const {Schema, model} = require("mongoose")

const schema = new Schema({
    ingrediente: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    medida:{
        type: String,
        require: true
    },
    comprar: {
        type: Boolean,
        required: true
    },
    recetas: {
        type: String
    },
    img: {
        type: String
    }
})

const Ingredientes = model('Ingrediente', schema);
module.exports = {Ingredientes}