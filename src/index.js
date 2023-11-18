const app = require("./app");
const { serverConfig } = require("./config");
const { db } = require("./sequelize");

db.sync()
  .then(() => {
    console.log("Conentando Base de Datos");
    app.listen(serverConfig.port, () => {
      console.log(`Servicio Procesandose en el puerto ${serverConfig.port}`);
    });
  })
  .catch((err) => {
    console.log("Error en el Servicio:", err);
    process.exit(1);
  });
