const express = require('express');

const PORT = process.env.PORT || 3000; // Usa el puerto 3000 si no se especifica otro

const app = express();

app.get('/', function (req, res) {
    res.send("Hello World 2");
});

// Iniciar el servidor y manejar posibles errores
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
}).on('error', (err) => {
    console.error(`Error al iniciar el servidor: ${err.message}`);
});
