const { response } = require("express");

const getChat = (req, res = response) => {
	res.json({
		msg: "get chat"
	});
};

const postChat = (req, res = response) => {
	res.json({
		msg: "post chat"
	});
};

const deleteChat = (req, res = response) => {
	res.json({
		msg: "delete chat"
	});
};

// update Chat
const putChat = (req, res = response) => {
	res.json({
		msg: "update chat"
	});
};

module.exports = {
	getChat,
	postChat,
	deleteChat,
	putChat
};
