const jwt = require("jsonwebtoken")
const config = require("config")

module.exports = (req,res,next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.dialog.split('')[1]
        if (!token) {
            return res.status(401).json({message: 'Dialog error'})
        }
        const decoded = jwt.verify(token, config.get('secretKey'))
        req.games = decoded
        next()
    }catch (e) {
        return res.status(401).json({message: 'Dialog error'})
    }

}