const { Users } = require("../sequelize");

const getAllUsers = async (req, res) => {
try {
  const users = await Users.findAll({
    attributes: ["id","email", "password" ]
  });
  res.json({ users });
  
} catch (error) {
  console.log(error)
  
}
};
module.exports = getAllUsers;
