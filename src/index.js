const app = require("./app")

app.listen(config.port, () => {
  console.log(`Servicio Procesandose en el puerto ${config.port}`);
});
