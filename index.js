const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./backend/router/router');
// const router = require('./backend/router/*');
app.use(cors()); // Permite solicitudes desde cualquier origen
// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json());
const port = 3001;

// rutas
app.use('/', router);

app.listen(port, () => {
    console.log('estoy en linea desde el puerto: ' + port);
  });