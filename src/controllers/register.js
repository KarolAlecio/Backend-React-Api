const { createUser } = require("../db");
const validator = require("validator");

const register = (req, res) => {
  const { email, password } = req.body;

  const newUser = createUser(email, password);

  if (!email || !password) {
    return res.json({ message: "Porfavor Ingresa un Email y una contraseña." });
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
    return res.json({ message: "Porfavor ingresa una contraseña Valida. Ingresa 8 caracteres, 1 letra masyucula, 1 muniscula, 1 numero y 1 simbolo." });
  }

  const newUsers = createUser(email, password);
  if (!newUser) {
    return res.json({ message: "Usuario ya existente" });
  }
  res.json({ message: "Usuario creado exitosamente", user: newUser });
  res.status(500).json({ message: "Algo salio mal"}
  )
};
module.exports = register;
