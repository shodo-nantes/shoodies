const cors = require('cors');
const express = require('express');

const sql = require('./database');
const getProductsFromDatabase = require('./getProductsFromDatabase');
const { idIsANumber } = require('./idIsANumber');
const productMapper = require('./productMapper');
const app = express();
app.use(cors());

app.get('/', (request, response) => {
    response.send('Ciao');
});

app.get('/products', async (request, response) => {
    const productsFromDatabase = await getProductsFromDatabase(sql);
    const mappedProducts = productsFromDatabase.map((product) => productMapper(product));
    response.json(mappedProducts);
});

//sicurezza : verifica id
app.get('/products/:id', async (request, response) => {
    if (!idIsANumber(Number.parseInt(request.params.id))) return response.sendStatus(400);
    const productId = Number.parseInt(request.params.id);
    const productFromDatabase = await sql`SELECT * FROM product WHERE id = ${productId}`;
    if (productFromDatabase.length > 0) {
        const product = productMapper(productFromDatabase[0]);
        response.json(product);
    } else {
        response.sendStatus(404);
    }
});

function createServer(port) {
    return app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`Example app listening on port ${port}`);
    });
}
module.exports = { createServer };
