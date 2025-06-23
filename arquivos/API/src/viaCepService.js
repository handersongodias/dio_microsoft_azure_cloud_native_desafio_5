const axios = require('axios');

const getAddressByCep = async (cep) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data from Via CEP API');
    }
};

module.exports = {
    getAddressByCep,
};