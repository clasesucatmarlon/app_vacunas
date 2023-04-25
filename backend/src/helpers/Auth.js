const Auth = {}
const jwt = require('jsonwebtoken')

Auth.checkToken = (req, res, next) => {
    const token = req.headers.authorization
    if (!req.headers.authorization || token === null) {
        return res.json({
            msg: 'Without authorization'
        })
    }
    jwt.verify(token, 'Secret', (error, result) => {
        if (error) {
            return res.json({
                msg: 'Without authorization'
            })
        }
        next()
    })
}

module.exports = Auth