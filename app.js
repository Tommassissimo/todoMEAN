'use strict';
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'todoMEAN');
var app = express();

var TodoSchema = require('./models/Todo.js').TodoSchema;
var Todo = db.model('todos', TodoSchema);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index(Todo));
app.get('/users', user.list);
app.get('/todos.json', routes.get(Todo));
app.put('/todo/:id.json', routes.update(Todo));
app.post('/todo.json', routes.addTodo(Todo));

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
