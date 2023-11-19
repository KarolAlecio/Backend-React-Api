const validator = require("validator");
const { Users } = require("../sequelize");

const createUsers = (email, password) => {
  return {
    email,
    password,
  };
};


const register = async (req, res) => {
  const { email, password } = req.body;

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
    return res.json({
      message:
        "Porfavor ingresa una contraseña Valida. Ingresa 8 caracteres, 1 letra masyucula, 1 muniscula, 1 numero y 1 simbolo.",
    });
  }


  const serchEmail = await Users.findOne({ where: { email } });
  if (serchEmail) {
    return res.json({ message: "Usuario ya Existente" });
  }
  const newUser = await Users.create({
    email, 
    password,
  });


  res.status(201).json({ message: "Usuario creado exitosamente", Users: newUser });
};
module.exports = register;
