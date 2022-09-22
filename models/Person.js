const mongoose = require("mongoose");
const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  favFood: {
    type: [String],
    default: [],
  },
})

module.exports = mongoose.model("person", personSchema);
