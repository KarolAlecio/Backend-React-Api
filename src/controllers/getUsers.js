const { Users } = require("../sequelize");

const getUsers = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const users = await Users.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude:["password"],
      },
    });
  } catch (error) {
    console.log(error)
        console.log(error);
        res.status(500).json({ messega: "Error en el Servicio"}
        )
  }
};
module.exports = getUsers;
