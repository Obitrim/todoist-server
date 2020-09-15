const todoModel = require("../models/todo.js");

module.exports = (req, res) => {
	let { title, description }  = req.body;
	if(!title || !description){
		res.status(400).json({
			todo: null,
			error: {
				message: "Todo title or description not provided"
			}
		})
		return
	}

	try {
		let newTodoActivity = new todoModel({
			title,
			description,
			completed: false
		}).save((err, todo) => {
			if(err) throw new Error("Error saving todo")

			res.status(201).json({
				todo,
				message: null
			})
		});
	} catch(err){
		res.status(500).json({
			todo: null,
			error: {
				message: err.message
			}
		})
	}
}