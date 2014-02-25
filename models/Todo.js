var mongoose = require('mongoose');

exports.TodoSchema = new mongoose.Schema({
  description: {type: String, required: true},
  due: {type: Date, required: true},
  done: {type: Boolean, required: false}
});