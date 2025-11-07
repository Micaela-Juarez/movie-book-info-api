# API de Información de Películas y Libros  
### Integración con OMDb API + OpenLibrary API

Este proyecto es una **API REST desarrollada en Node.js y Express** que consume **dos servicios externos**:  

-  [OMDb API](https://www.omdbapi.com/) para información de películas.  
-  [OpenLibrary API](https://openlibrary.org/developers/api) para información de libros.  

El objetivo es demostrar habilidades clave como:
- Integración con APIs públicas.
- Transformación y limpieza de datos JSON.
- Implementación de **caché en memoria** para optimizar rendimiento.
- Diseño modular y buenas prácticas de desarrollo backend.

>  Este proyecto esta centrado en la **integración de servicios externos**.

---

##  Descripción General

La API permite realizar búsquedas de:
- **Películas**, ingresando su título.
- **Libros**, ingresando su nombre o título parcial.

Cada búsqueda hace una solicitud HTTP al servicio externo correspondiente, obtiene los datos, los transforma en un formato limpio y los devuelve al cliente.  
Además, las respuestas se almacenan temporalmente en una **caché interna**, para reducir las llamadas repetitivas y mejorar el tiempo de respuesta.

---

##  Tecnologías Utilizadas

- **Node.js** — entorno de ejecución JavaScript.
- **Express.js** — framework para crear la API REST.
- **node-fetch** — para realizar peticiones HTTP a servicios externos.
- **dotenv** — manejo seguro de variables de entorno.
- **Middleware de caché** — sistema de caché en memoria hecho a medida.

---

##  Estructura del Proyecto

├── src
│ ├── app.js # Configuración principal de Express
│ ├── server.js # Inicialización del servidor
│ ├── routes
│ │ ├── movieRoutes.js # Endpoints relacionados con películas
│ │ └── bookRoutes.js # Endpoints relacionados con libros
│ ├── controllers
│ │ ├── movieController.js # Lógica para OMDb API
│ │ └── bookController.js # Lógica para OpenLibrary API
│ ├── services
│ │ ├── movieService.js # Comunicación con OMDb API
│ │ └── bookService.js # Comunicación con OpenLibrary API
│ └── middleware
│   └── cacheMiddleware.js # Sistema de caché en memoria
│
├── .env # Variables de entorno (puerto y API key)
├── package.json
└── README.md

---

##  Instalación y Configuración

### 1️ Clonar el repositorio

```bash
git clone https://github.com/Micaela-Juarez/movie-book-info-api.git
cd api-peliculas-libros
```

### 2️ Instalar dependencias

```bash
npm install
```

### 3️ Obtener tu API Key de OMDb

Ir a  https://www.omdbapi.com/apikey.aspx

Completar el formulario con tu email.

Confirmar el correo electrónico.

Copiar tu API Key personal.

### 4️ Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto:

.env
PORT=4000
OMDB_API_KEY=TU_API_KEY_AQUI

 // ( Reemplazá TU_API_KEY_AQUI por tu propia clave de OMDb API.)
 // OpenLibrary no requiere autenticación.

### 5️ Iniciar el servidor

```bash
npm run dev
```
El servidor escuchará por defecto en el puerto 4000.

#  Endpoints Disponibles
##  Películas (OMDb API)

```Bash
GET
http://localhost:4000/api/movies?title=<nombre_de_pelicula>
```

 Ejemplo en Postman
Request:

```bash
GET http://localhost:4000/api/movies?title=Inception


Response:

json
{
  "title": "Inception",
  "year": "2010",
  "genre": "Action, Adventure, Sci-Fi",
  "director": "Christopher Nolan",
  "actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
  "plot": "A thief who steals corporate secrets...",
  "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTI5OT...jpg"
}
```


##  Libros (OpenLibrary API)

```Bash
GET
http://localhost:4000/api/books?title=<nombre_del_libro>
```

 Ejemplo en Postman
Request:

```bash
GET http://localhost:4000/api/books?title=harry%20potter
Response:

json
{
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "J. K. Rowling",
  "first_publish_year": 1997,
  "edition_count": 230,
  "subject": ["Fantasy", "Magic", "Wizards"]
}
```

#  Sistema de Caché Interno
La API utiliza un middleware de caché en memoria, que guarda temporalmente los resultados de las consultas.
Si se solicita el mismo título nuevamente, la respuesta se devuelve directamente desde caché.

Ejemplo de logs en consola:

# csharp
 Fetching new data from OMDb API...
 Response cached for: inception
 Returning cached data for: inception
La caché mejora la velocidad de respuesta y reduce el consumo de las APIs externas.

El tiempo de expiración puede configurarse dentro del middleware.

#  Pruebas con Postman
Abrir Postman.

Crear dos peticiones tipo GET:

Películas: http://localhost:4000/api/movies?title=Inception

Libros: http://localhost:4000/api/books?title=harry%20potter

Enviar la solicitud y observar el JSON de respuesta.

Repetir la misma solicitud → la segunda vez será servida desde caché (respuesta instantánea).

#  Scripts Disponibles
Comando	Descripción
npm start	Ejecuta el servidor en modo normal
npm run dev	Ejecuta el servidor con nodemon (modo desarrollo)

#  Objetivos del Proyecto
Este proyecto tiene como propósito demostrar la capacidad de un desarrollador backend para:

Consumir APIs externas mediante peticiones HTTP.

Transformar y servir datos en un formato más útil.

Aplicar caché en memoria para mejorar rendimiento.

Mantener una arquitectura modular y mantenible en Node.js.

#  Autora
Miecaela Juarez
Backend Developer — Node.js | Express | PostgreSQL | Sequelize

Repositorio en GitHub:https://github.com/Micaela-Juarez/movie-book-info-api.git