const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: path.join("../.env") });

const express = require("express");
const { Router } = express;

const routerRegister = Router();

const logger = require("../logs/loggers");
const nodemailer = require("nodemailer");

const fs = require("fs");
const imagenesPath = require("../img/img.paths.js");

// const { ACCOUNT_SID, AUTH_TOKEN, GMAIL, TWILIO_NUMBER } = process.env;
const { GMAIL } = process.env;

// const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const multer = require("multer");
const upload = multer();

const passport = require("../utils/passportMiddleware");

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	auth: {
		user: "achurre@gmail.com",
		pass: GMAIL
	}
});

routerRegister.get("/register", (req, res) => {
	res.render("register");
});
// post para registrarse
routerRegister.post(
	"/register",
	upload.single("image"),
	passport.authenticate("register", {
		failureRedirect: "failregister",
		successRedirect: "/"
	}),
	async (req, res) => {
		fs.writeFileSync(
			path.join(imagenesPath, req.body.username + ".jpg"),
			req.file.buffer
		);
		const mailOptions = {
			from: "Achurrita",
			to: "achurre@gmail.com",
			subject: "Usuario nuevo registrado",
			html: `<h1>¡${req.body.username} se ha unido al club!</h1>`
		};
		console.log("prueba");

		await transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				logger.error(error);
			} else {
				logger.info("Email enviado" + info.response);
				console.log("mail enviado");
			}

			res.render("/login", { username: req.body.username });
		});
	}
);

//error de registro
routerRegister.get("/failregister", (req, res) => {
	logger.error("Error de registro");
	// now redirect to failregister.hbs
	res.render("failregister");
});

module.exports = { routerRegister };
