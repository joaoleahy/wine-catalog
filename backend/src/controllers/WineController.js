const Wine = require('../models/Wine');

const wineController = {
  getAllWines: (req, res) => {
      const wines = [
        { id: 1, name: 'Vinho Tinto', type: 'Tinto', price: 35 },
        { id: 2, name: 'Vinho Branco', type: 'Branco', price: 60 },
        { id: 3, name: 'Vinho Rosé', type: 'Rosé', price: 45 }
      ];
      res.json(wines);
    },

  addWine: async (req, res) => {
    try {
      const { name, type, price } = req.body;
      const newWine = new Wine({ name, type, price });
      await newWine.save();
      res.status(201).json(newWine);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateWine: async (req, res) => {
    try {
      const { name, type, price } = req.body;
      const updatedWine = await Wine.findByIdAndUpdate(req.params.id, { name, type, price }, { new: true });
      res.status(200).json(updatedWine);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteWine: async (req, res) => {
    try {
      const deletedWine = await Wine.findByIdAndDelete(req.params.id);
      if (deletedWine) {
        res.status(200).json({ message: 'Vinho deletado com sucesso.' });
      } else {
        res.status(404).json({ message: 'Vinho não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = wineController;
