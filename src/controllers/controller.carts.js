const { Carrito } = require("../daos/index.js");
const Carritos = new Carrito();

const postCartId = async (req, res, next) => {
	try {
		const { clientId } = req.params;
		const id = await Carritos.createCart(clientId);
		res.json({ id });
	} catch (error) {
		next(error);
	}
};

const deleteCartId = async (req, res, next) => {
	const { id } = req.params;
	try {
		const msg = await Carritos.deleteById(id);
		res.status(200).json(msg);
	} catch (error) {
		next(error);
	}
};

const getProductsFromCart = async (req, res, next) => {
	const { clientId } = req.params;
	try {
		const productsFromCart = await Carritos.getProducts(clientId);
		res.status(200).json(productsFromCart);
	} catch (error) {
		next(error);
	}
};

const postProductToCart = async (req, res, next) => {
	const { id, idProd } = req.params;
	const { quantity } = req.body;
	try {
		const msg = await Carritos.insertProduct(id, idProd, quantity);
		res.status(200).json(msg);
	} catch (error) {
		next(error);
	}
};

const deleteProductFromCart = async (req, res, next) => {
	const { clientId, idProd } = req.params;
	try {
		const msg = await Carritos.deleteProduct(clientId, idProd);
		res.status(200).json(msg);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	postCartId,
	deleteCartId,
	getProductsFromCart,
	postProductToCart,
	deleteProductFromCart
};
