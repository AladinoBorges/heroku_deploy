require('dotenv').config();

const express = require('express');
const cors = require('cors');

const RootRouter = require('./src/routes/RootRouter');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use(RootRouter);

app.listen(PORT, () => {
  console.log(`Aplicação a rodar na porta ${PORT}.`);
});
