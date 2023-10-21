const bcrypt = require('bcrypt');
const User = require('../models/User');

const userController = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'Usuário registrado com sucesso.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Usuário não encontrado.' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Senha inválida.' });
      }

      res.status(200).json({ message: 'Login bem-sucedido.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;
