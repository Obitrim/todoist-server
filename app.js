require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
/*
*----------------------------------------------
*	Global Middlewears
*----------------------------------------------
*/
app.use(cors());
app.use(express.json());

// connecting to db
mongoose.connect(process.env._DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});
const connection = mongoose.connection;
connection.once("open", () => console.log("connected to db"));
connection.on("error", () => console.log("Failed to connect to db"));
/*
*----------------------------------------------
*	Routes
*----------------------------------------------
*/
const todoRouter = require("./routers/todo.js");
app.use("/api", todoRouter);

app.listen(process.env.PORT || 3030, () => {
	console.log(`Server running on port ${process.env.PORT || 3030}`);
});