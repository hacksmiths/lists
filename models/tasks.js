var mongoose = require('mongoose');

mongoose.connect('mongodb://bann.h:rooting@ds047504.mongolab.com:47504/hacksmiths-todo');

var Schema = mongoose.Schema;

var taskSchema = new Schema({
	name: String,
	text: String,
	created_at: Date,
	update_at: Date
});

taskSchema.pre('save', function(next){
	var currentDate = new Date();
	this.update_at = currentDate;
	if(!this.created_at)
		this.created_at = currentDate;
	next();
});

var Task = mongoose.model('Task', taskSchema);
module.exports = Task;

// a todo for testing purposes
// var task1 = Task({
// 	name: "Hasan",
// 	text: "I need timmmberrr!"
// });

// task1.save(function(err) {
// 	if(err) throw err;
// 	console.log("Task created!");
// })
Task.find({},function(err,tasks){
	if(err) throw err;
	console.log(tasks);
});
