const {Schema,model} = require("mongoose")

const User = new Schema({
    background: {type: String},
    character: {type: String},
    dialog: {type: String}



})

module.exports = model ('Games',Games)