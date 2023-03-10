const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({

  tittle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
  
});

module.exports = mongoose.model("Blog", blogSchema);