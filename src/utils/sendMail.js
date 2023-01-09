const { createTransport } = require("nodemailer");
const { logger } = require("../logs/loggers.js");
const { GMAIL } = process.env;

const transporter = createTransport({
	host: "gmail",
	port: 587,
	auth: {
		user: "achurre@gmail.com",
		pass: GMAIL
	}
});

const sendemail = async () => {
	try {
		const info = await transporter.sendMail({
			from: "Achurrita",
			to: "achurre@gmail.com",
			subject: "Usuario nuevo registrado",
			html: `
        <h2>Hola estúpido</h2>
        <p>¡Bienvenido al nuevo usuario!</p>
      `
		});

		console.log(info);
	} catch (error) {
		console.log(error);
	}
};

const sendNewSignupMail = async newUser => {
	try {
		const success = await transporter.sendMail({
			from: "Achurrita",
			to: "achurre@gmail.com",
			subject: "Usuario nuevo registrado",
			html: `
        <p>Email: ${newUser.username}</p>
        <p>Nombre: ${newUser.fullName}</p>
        <p>Dirección: ${newUser.address}</p>
        <p>Edad: ${newUser.age}</p>
        <p>Teléfono: ${newUser.phone}</p>
      `
		});
		logger.info(success);
	} catch (error) {
		logger.error(error);
	}
};

const sendOrderMail = async newOrder => {
	const template = newOrder.productos
		.map(
			product => `
        <tr><td><img src="${product.thumbnail}" width="40px"></td>
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td></tr>
      `
		)
		.join("");
	try {
		const success = await transporter.sendMail({
			from: "Achurrita",
			to: "achurre@gmail.com",
			subject: `Nuevo pedido de ${newOrder.clientEmail}`,
			html: `
        <div>
          <h4>Productos:</h4>
          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Codigo</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              ${template}
            </tbody>
          </table>

          <h4>Datos de la orden:</h4>
          <ul>
            <li>Fecha y hora: ${newOrder.timestamp}</li>
            <li>Email: ${newOrder.clientEmail}</li>
            <li>Dirección de entrega: ${newOrder.clientAddress}</li>
          </ul>
        </div>`
		});
		logger.info(success);
	} catch (error) {
		logger.error(error);
	}
};

module.exports = { sendemail, sendNewSignupMail, sendOrderMail };
