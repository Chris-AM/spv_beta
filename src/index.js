require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {dbConfig} = require('./config/db.config');
//init express
const app = express();

//settings
const port = process.env.PORT;

dbConfig();

app.use(cors());

app.use(express.json());

//routes
app.use('/api/products', require('./routes/products.routes'));

//start server
app.listen(port, () => {
    console.log('server on port', port);
 })
