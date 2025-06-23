const express = require('express');
const cepRoutes = require('./routes/cep');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/cep', cepRoutes);

// Rota raiz para teste
app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;