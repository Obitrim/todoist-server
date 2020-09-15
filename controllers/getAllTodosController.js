const todoModel = require("../models/todo.js");

module.exports = async (req, res) => {
	try {
		let todos = await todoModel.find({}).exec();
		res.status(200).json({
			todos,
			errors: null
		});
	} catch(err){
		res.status(500).json({
			errors: {
				message: err.message
			},
			data: null
		})
	}
};