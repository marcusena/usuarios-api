module.exports = (app) => {
  const getUsers = async (req, res) => {
    const categories = await app.database("categories").select("*");

    return res.json(categories);
  };
  const getById = async (req, res) => {
    const idCategory = req.params.id;

    const categoryExists = await app
      .database("categories")
      .where({ id: idCategory })
      .first();

    if (!categoryExists) {
      return res.status(400).json({ error: "Usuário não encontrado." });
    }

    const category = await app
      .database("categories")
      .where({ id: idCategory })
      .first();

    return res.json(category);
  };
  const saveUsers = async (req, res) => {
    const category = { ...req.body };

    if(req.params.id) {
      category.id = req.params.id;
    }
    
    if (!category.name && !category.email) {
      return res.status(400).json({ error: "Favor enviar os parametros name e email com seus valores preenchidos." });
    }

    if (!category.name) {
      return res.status(400).json({ error: "Favor enviar o parametro name." });
    }
    if (!category.email) {
      return res.status(400).json({ error: "Favor enviar o parametro email." });
    }

    const categoryNameExists = await app
      .database("categories")
      .where({ name: category.name })
      .first();

    if (categoryNameExists) {
      return res.status(400).json({ error: "Usuário já existe!" });
    }

    const categoryEmailExists = await app
      .database("categories")
      .where({ email: category.email })
      .first();

    if (categoryEmailExists) {
      return res.status(400).json({ error: "Email já existe!" });
    }

    if(req.params.id) {
      await app
        .database("categories")
        .update(category)
        .where({ id: category.id})
        .then((_) => res.status(200).json({ message: "Usuário atualizado com sucesso!" }).send())
        .catch((err) => res.status(500).send(err));
    } else {
      await app
        .database("categories")
        .insert(category)
        .then((_) => res.status(200).json({ message: "Usuário adicionado com sucesso!" }).send())
        .catch((err) => res.status(500).send(err));
    }
  };
  return { getUsers, getById, saveUsers };
};
