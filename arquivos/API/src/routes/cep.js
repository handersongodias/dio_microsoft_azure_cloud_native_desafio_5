const express = require('express');
const router = express.Router();
const viaCepService = require('../services/viaCepService');

// Route to get address information by CEP
router.get('/:cep', async (req, res) => {
    const cep = req.params.cep;
    try {
        const address = await viaCepService.getAddressByCep(cep);
        res.json(address);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching address information' });
    }
});

module.exports = router;