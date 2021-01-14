const Router = require("express");
const User = require("../models/Games");

const config = require("config")
const jwt = require("jsonwebtoken")

const router = new Router()
const gameMiddleware = require("../middleware/game.middleware")


router.get('/game', gameMiddleware,
    async (req,res) => {
        try {
            const user = await User.findOne({dialog: req.games.dialog})
            const token = jwt.sign({dialog: games.dialog},config.get("secretKey"))
            return res.json({
                token,
                games: {
                    dialog: games.dialog,
                    background: games.background,
                    character: games.character
                }
            })
        }catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })


module.exports = router
