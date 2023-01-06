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
- Subir a Heroku o PASS de preferencia.


## Rutas
```
ROOT
/
```
La ruta raíz, si no estás logeado, te lleva directo al login. Si no tienes cuenta, puedes registrarte, sino hay un usuario de pruebas disponible al pie de página.

```
PRODUCTOS

/productos
/productos/:id
/productos/category/:category
```

```
CARRITO

/carrito

```
/chat
```


## Acceso sin registrarse
```
username: asdf@asdf.cl
password: 1234
```

### Isabel Achurra, 2022.