const mongoose = require("mongoose")
const donutSchema = mongoose.Schema({
    donut_type: String,
    quantity: Number,
    cost: Number
})

module.exports = mongoose.model("Donut", donutSchema)