const {validationResult} = require('express-validator')
const validarChecks = (req, res, next) => {
    const err = validationResult(req)
    if (err.isEmpty()) {
        next()
    } else {
        res.status(400).json(err)
    }
}

module.exports = {validarChecks}