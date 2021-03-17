const mongoose = require('mongoose')
const Schema = mongoose.Schema

const houseSch = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    img: {
        type: String
    }
}, {
    timestamps: true
})

const Houses = mongoose.model('House', houseSch)
module.exports = Houses