const todoModel = require("../models/todo.js");

module.exports = (req, res) => {
	let todoId = req.params.id;
	
	try {
		todoModel.findByIdAndDelete(todoId, null, (err, deletedTodo) => {
			if(err){
				throw new Error(err.message);
			}

			// todo was deleted successfully
			res.status(200).json({
				success: true,
				todo: deletedTodo,
				error: null
			});
		})
	} catch(err){
		res.status(500).json({
			success: false,
			todo: null,
			error: {
				message: "Todo id not found"
			}
		});
	}
}