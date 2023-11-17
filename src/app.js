const express = require("express");
const morgan = require("morgan");
const app = express();
const register = require("./controllers/register");
const login = require("./controllers/login");
const updateUsers = require("./controllers/updateUsers");
const getUsers = require("./controllers/getUsers");
const { getAllUsers } = require("./db");

app.use(morgan("dev"));
app.use(express.json());

app.get("/users", (req, res) => {
  res.json({ users: getAllUsers() });
});
//registre
app.post("/register", register);
//login
app.post("/login", login);
//update user
app.put("/user/:id", updateUsers);
//get user
app.get("/getUser", getUsers);

module.exports = app;
