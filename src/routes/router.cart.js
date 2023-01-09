const express = require("express");
const { Router } = express;
const routerCarrito = Router();

const {
	postCartId,
	deleteCartId,
	getProductsFromCart,
	postProductToCart,
	deleteProductFromCart
} = require("../controllers/controller.carts");

routerCarrito.post("/carrito/:clientId", postCartId);

// Delete borra 1 carrito completo
routerCarrito.delete("/carrito/:id", deleteCartId);

// GET lista de productos de 1 carrito
routerCarrito.get("/carrito/:clientId/productos", getProductsFromCart);

// POST guardar 1 producto en 1 carrito
routerCarrito.post("/carrito/:id/productos/:idProd", postProductToCart);

// DELETE borra 1 producto de 1 carrito
routerCarrito.delete(
	"/carrito/:clientId/productos/:idProd",
	deleteProductFromCart
);

module.exports = { routerCarrito };
