const mongoose = require("mongoose")
const DogSchema = mongoose.Schema({
  breed: String,
  size: String,
  yrsOfLifeExpectancy: Number
})

module.exports = mongoose.model("Dog", DogSchema)


