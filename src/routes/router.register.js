const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join("../.env") });

const express = require("express");
const { Router } = express;
const routerRegister = Router();

const logger = require("../logs/loggers");

const fs = require("fs");
const imagenesPath = require("../img/img.paths.js");

const multer = require("multer");
const upload = multer();

const passport = require("../utils/passportMiddleware");

const { sendNewSignupMail } = require("../utils/sendMail");

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
		(error, data) => {
			if (data) {
				sendNewSignupMail(data);
				return res
					.status(200)
					.json({ success: "Se ha registrado correctamente al usuario." });
			}
			/*Parche ineficiente para borrar foto subida al servidor, en caso de que falle el registro*/
			if (req.file)
				deleteFile(process.cwd() + `/src/public/img/${req.file.filename}`);
			if (error) return res.status(404).json({ error });
			res.status(400).json({ error: "Falló el registro de usuario." });
		};
		console.log("prueba");

		res.render("/login", { username: req.body.username });
	}
);

//error de registro
routerRegister.get("/failregister", (req, res) => {
	logger.error("Error de registro");
	// now redirect to failregister.hbs
	res.render("failregister");
});

module.exports = { routerRegister };
