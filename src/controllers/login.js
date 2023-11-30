const validator = require("validator");
const { Users } = require("../sequelize");
const jsonwebtoken = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const{ email, password}= req.body
    if (!email || !password) {
      return res.json({
        message: "Porfavor Ingresa un Email y una contraseña.",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({ message: "Porfavos ingresa un Email valido." });
    }

    const validPassword = validator.isStrongPassword(password, {
      minLength: 8,
      minLowerCase: 1,
      minUpperCase: 1,
      minNumbers: 1,
      minsymbols: 1,
    });

    if (!validPassword) {
      return res.json({
        message:
          "Porfavor ingresa una contraseña Valida. Ingresa 8 caracteres, 1 letra masyucula, 1 muniscula, 1 numero y 1 simbolo.",
      });
    }
    const searchEmail = await Users.findOne({ where: { email: email } });
    if (!searchEmail) {
      return res.json({ message: "Usuario no existente" });
    }
    if (password !== searchEmail.password) {
      return res.json({ message: "Contraseña no existente" });
    }
    const token = jsonwebtoken.sign({ id: searchEmail.id }, "shhhhh");

    res
      .status(200)
      .json({ message: "Cargado Satisfactoriamente", Users: searchEmail });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ocurrio un error" });
  }
};
module.exports = login;
