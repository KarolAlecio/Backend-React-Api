const users = [
  {
    id: 1,
    name: "Jasson",
    email: "jasson@gmail.com",
    password: "1234",
  },
];

const getAllUsers =() =>{
    return users;
}

const getUser = (id) => {
  return users.find((users) => users.id === id);
};
const createUser = (email, password) => {
  const searchUser = users.find((users) => users.email === email);

  if (searchUser) {
    return ;
  }

  const newUser = {
    id: users[ users.length -1].id + 1,
    name: "",
    email,
    password,
  };
  users.push(newUser);
  return newUser
};
module.exports = {
  getUser,
  createUser,
  getAllUsers,
};
