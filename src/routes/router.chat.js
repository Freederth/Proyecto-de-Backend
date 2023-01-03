const express = require("express");
const { Router } = express;
const routerChat = Router();

const { Chat } = require("../daos/index.js");

const Chats = new Chat();

const checkAuthentication = require("../utils/checkAuthentication");

// note deja entrar si no estás loggeado
routerChat.get("/chat", checkAuthentication, async (req, res) => {
	const chats = await Chats.getAll();
	res.render("chat", { chats });
});

routerChat.get("/chat/:id", checkAuthentication, async (req, res) => {
	const { id } = req.params;
	const chatById = await Chats.getById(id);
	chatById ? res.json(chatById) : res.json({ error: "Mensaje no encontrado" });
});

routerChat.delete("/chat/:id", checkAuthentication, async (req, res) => {
	const { id } = req.params;
	res.json(await Chats.deleteById(id));
	return (texts = await leerComentarios.getAll());
});

module.exports = { routerChat };
