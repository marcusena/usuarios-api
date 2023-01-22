module.exports = (app) => {
  const getUsers = (req, res) => {
    const usuarios = [
      {
        id: 1,
        name: "marcus",
        email: "teste@email.com",
      },
      {
        id: 2,
        name: "joao",
        email: "testeJoao@email.com",
      },
    ];
    return res.json(usuarios);
  };

  const saveUsers = (req, res) => {
    const user = { ... req.body}

    return res.json(user)
  }
  return { getUsers, saveUsers };
};
