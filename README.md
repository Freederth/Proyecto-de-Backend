# Proyecto Backend

#### Backend CoderHouse

Commandos para ejecutar:

```
npm install
npm start
```

El proyecto final es un e-Commerce estructurado del siguiente modo:

- Capas MVC bien definidas, con ruteo, controlador, capa de lógica de negocios y validaciones.
- DAOs/DTOs soportan el sistema de persistencia.
- Variables de entorno para ambiente de desarollo y producción en NODE_ENV al desplegar la aplicación.
- API RESTful con los verbos get, post, put y delete para cumplir con todas las acciones necesarias.
- Los productos ingresados se almacenan en una base de datos MongoDB. 
- Canal de chat basado en websockets, el cual permite atender las consultas del cliente.
- Se envia un mail a una casilla configurable, por cada registro nuevo de usuario y con cada orden de compra generada.
- Ruta base / te lleva directo a login, donde puedes registrarte o simplemente loguear.
- Ruta /productos contiene todo lo relacionado con ellos.
- Ruta /carrito contiene  todo lo relacionado con el carrito.
- Ruta /chat te lleva a un chat con el administrador.
- Subir a Heroku o PASS de preferencia.

### Isabel Achurra, 2022.