const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
  breed: String,
  size: String,
  yrsOfLifeExpectancy: Number
})

module.exports = mongoose.model("Dog", dogSchema)


