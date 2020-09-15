const todoModel = require("../models/todo.js");

module.exports = (req, res) => {
	let todoId = req.params.id;

	try {
		todoModel.findByIdAndUpdate(todoId, { completed: true}, { new: true }, (err, updatedTodo) => {
			if(err) throw new Error(err.message);

			// todo updated successfully
			res.status(200).json({
				success: true,
				error: null,
				todo: updatedTodo
			});
		});
	} catch(err){
		res.status(500).json({
			success: false,
			error: {
				message: err.message
			}, 
			todo: null
		})
	}
}