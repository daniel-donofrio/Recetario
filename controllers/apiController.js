const {Ingredientes} = require('../models/ingredientes')
const axios = require('axios')
class ApiController {
    testApi (req, res) {
        res.send('Hello API!') 
    }
    async verListado (req, res) {
        const list = await Ingredientes.find();
        res.status(200).json(list) 
    }
    async crear (req, res) {
        try {
                const newIngredient = new Ingredientes(req.body)
                await newIngredient.save()
                res.status(201).json(newIngredient) 
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async buscarPorId(req, res){
        const ingredientes= await Ingredientes.findById(req.params.id)
        res.status(200).json(ingredientes)
    }
    async editar (req, res) {
        try {
            await Ingredientes.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({
                msg: "El ingrediente con id " + req.params.id + " fue actualizado."
            })
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async borrar (req, res) {
        await Ingredientes.findByIdAndDelete(req.params.id)
        res.status(201).json({
            msg: "El ingrediente con el id " + req.params.id + " ha sido eliminado."
        }) 
    }
    async mostrarReceta (req, res) {
        try {
            const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            res.json(data)
        } catch (error) {
            res.status(400).json({data: error.response.data})
        }
    }
}

module.exports = new ApiController