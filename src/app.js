const express = require("express");
const morgan = require("morgan");
const app = express();
const register = require("./controllers/register");
const login = require("./controllers/login");
const getUsers = require("./controllers/getUsers");
const updateUsers = require("./controllers/updateUsers");
const getAllUsers = require("./controllers/getAllUsers");

app.use(morgan("dev"));
app.use(express.json());

app.get("/Users", getAllUsers);
//registre
app.post("/register", register);
//login
app.post("/login", login);
//update user
app.put("/users/:id", updateUsers);
//get user
app.get("/users/:id", getUsers);

module.exports = app;
