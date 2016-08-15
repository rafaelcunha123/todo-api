var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Feed the cat',
	completed: true
}];


app.get('/', function (req, res) {
	res.send('Todo API route');
})

app.get('/todos', function (req, res) {
	res.json(todos);
});

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchTodo = todos.filter(function(todo) {
		return todo.id === todoId;
	})
	matchTodo.length > 0 ? res.json(matchTodo) : res.status(404).send();
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});