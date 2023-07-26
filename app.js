const express = require("express");
const app = express();
const PORT = 3000;

// Importar las rutas desde el archivo routes.js
const routes = require("./routes");
app.use("/api", routes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
