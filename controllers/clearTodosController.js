const todoModel = require("../models/todo.js");

module.exports = (req, res) => {
	try {
		let completed = req.query.completed;
		todoModel.deleteMany({ completed }, err => {
			todoModel.find({completed: !completed}, (err, todos) => {
				res.status(200).json({
					success: true,
					todos,
					error: null
				})
			})
		});
	} catch(err){
		res.status(500).json({
			success: false,
			todos: null,
			error: {
				message: err.message
			}
		})
	}
}