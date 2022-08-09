const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const router = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", router);

const PORT = config.get("port") ?? 8080;

/* if (process.env.NODE_ENV === "production") {
	console.log("production");
} else {
	console.log("development");
} */

if (process.env.NODE_ENV === "production") {
	app.use("/", express.static(path.join(__dirname, "client")));

	const indexPath = path.join(__dirname, "client", "index.html");

	app.get("*", (req, res) => {
		res.sendFile(indexPath);
	});
}

async function start() {
	try {
		await mongoose.connect(config.get("mongoUri"));
		console.log(chalk.green(`MongoDB connected.`));
		app.listen(PORT, () =>
			console.log(
				chalk.green(`Server has been started on port ${PORT}...`)
			)
		);
	} catch (e) {
		console.log(chalk.red(e.message));
		process.exit(1);
	}
}

start();
