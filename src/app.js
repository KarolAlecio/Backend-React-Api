const express = require("express");
const morgan = require("morgan")
const app = express();
const register = require("./controllers/register")
const login = require("./controllers/login")
const updateUsers = require("./controllers/updateUsers")
const getUsers = require("./controllers/getUsers")

app.use(morgan("dev"));

const users=[];
//registre
app.post("/register",register)
//login
app.post("/login",login)
//update user
app.put("/user/:id",updateUsers)
//get user
app.get("/getUser",getUsers)


module.exports = app;