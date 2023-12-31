const dotenv = require("dotenv");
dotenv.config();

const config = {
  serverConfig: { port: process.env.SERVER_PORT },
  postgresConfig:{
    name: process.env.POSTGRES_DB_NAME,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
  }
};

module.exports = config;