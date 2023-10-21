const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/UserRoutes');
const wineRoutes = require('./routes/WineRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/vinhos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/users', userRoutes);
app.use('/wines', wineRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
