const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.CONNECT_MONGO)
        console.log("Base de datos conectada")
    } catch (error) {
        console.log("Error al conectarse con la base de datos")
    }
}

module.exports = {connect}