require('dotenv').config();
require('./database/index');
const cors = require('cors');

const express = require('express');
const route = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

app.listen(5000, () => console.log('Server on.'));