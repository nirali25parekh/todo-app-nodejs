var mongoose = require('mongoose')

var Schema = mongoose.Schema
var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
})


// 1st param: model name
//2nd param: schema name
//3rd param: Collection name (optional)
var Todos = mongoose.model('Todos', todoSchema, 'todosCollection')

module.exports = Todos;