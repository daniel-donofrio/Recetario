const {check} = require('express-validator')

const checks = [
    check('ingrediente')
        .notEmpty().withMessage('el campo ingrediente es obligatorio')
        .isString().withMessage('el campo ingrediente debe ser un string'),
    check('cantidad')
        .notEmpty().withMessage('el campo cantidad es obligatorio')
        .isNumeric().withMessage('el campo cantidad debe ser un numero'),
    check('medida')
        .notEmpty().withMessage('el campo cantidad es obligatorio')
        .isString().withMessage('el campo cantidad debe ser un string'),
    check('comprar')
        .isBoolean().withMessage('el campo comprar debe ser un booleano'),
    check('recetas')
        .isString().withMessage('el campo recetas debe ser un string'),
    check('img')
        .isString().withMessage('el campo img debe ser un string'),
]

module.exports = checks