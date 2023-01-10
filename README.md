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

### Login:
  - **POST de registro de usuario:**
    ```localhost:8080/signup```

  - **GET de inicio de sesión de usuario:**
    ```localhost:8080/login```

  - **GET de cierre de sesión de usuario:**
    ```localhost:8080/logout```

### Productos:
  - **GET de todos los productos:**
    ```localhost:8080/productos```

  - **GET de producto por id:**
    ```localhost:8080/productos/:id```

  - **GET de filtrado de productos por Categoria:**
    ```localhost:8080/productos/categoria/:categoria```

  - **POST de producto:**
    ```localhost:8080/productos/```

  - **PUT de producto:**
    ```localhost:8080/productos/:id```

  - **DELETE de producto:**
    ```localhost:8080/productos/:id```

### Carritos:

  - **GET de todos los productos en carrito por id:**
    ```localhost:8080/carrito/:id/productos```

  - **POST de creación de carrito vacío con id de cliente:**
    ```localhost:8080/carrito/```

  - **POST de producto con id en carrito por id del mismo:**
    ```localhost:8080/carrito/:id/productos```

  - **DELETE de carrito por id:**
    ```localhost:8080/carrito/:id```

  - **DELETE de producto con id en carrito y de producto:**
    ```localhost:8080/carrito/:idCarrito/productos/:idProducto```

### Órdenes:
  - **GET de todas las ordenes:**
    ```localhost:8080/ordenes/```

  - **GET de orden por id:**
    ```localhost:8080/ordenes/:id```

  - **POST de creación de orden:**
    ```localhost:8080/ordenes/```

  - **PUT de orden:**
    ```localhost:8080/ordenes/:id```

  - **DELETE de orden por id:**
    ```localhost:8080/ordenes/:id```

```
 INFO:
 El archivo .REST tiene configuradas rutas de prueba para los endpoint.
```

## [Railway link](https://proyecto-de-backend-production.up.railway.app/)

### Isabel Achurra, 2022.