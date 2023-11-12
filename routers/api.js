const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')
const {validarId}= require('../middlewares/validarId')
const checks = require('../middlewares/checks')
const {validarChecks} = require('../middlewares/validarChecks')

router.get('/test', apiController.testApi)
router.get('/lista', apiController.verListado)
router.get('/buscar/id/:id',validarId, apiController.buscarPorId)
router.post('/crear', checks, validarChecks, apiController.crear)
router.put('/editar/:id', validarId, checks, validarChecks, apiController.editar)
router.delete('/borrar/:id', validarId, apiController.borrar)
router.get('/receta', apiController.mostrarReceta)

module.exports = router