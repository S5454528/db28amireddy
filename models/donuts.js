const mongoose = require("mongoose")
const donutSchema = mongoose.Schema({
    donut_type: String,
    quantity: {type:Number, min : 4,max : 82, default : 0},
    cost: {type:Number, min : 5,max : 80, default : 0}
})

module.exports = mongoose.model("Donut", donutSchema)