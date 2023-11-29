const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

const products = [
    {
        id: 0,
        title: 'T-Shirt noir',
        frontPhoto: 'tshirt_noir',
        backPhoto: 'tshirt_noir',
        description: 'Only code can judge me',
    },
    {
        id: 1,
        title: 'Sweatshirt',
        frontPhoto: 'sweatshirt',
        backPhoto: 'sweatshirt',
    },
    { id: 2, title: 'Casquette-noir', frontPhoto: 'casquette_noir' },
    { id: 3, title: 'Sac-à-dos', frontPhoto: 'sac_a_dos' },
    { id: 4, title: 'Mug', frontPhoto: 'mug' },
    { id: 5, title: 'Gourde', frontPhoto: 'gourde' },
];

app.get('/', (request, response) => {
    response.send('Ciao');
});

app.get('/products', (request, response) => {
    response.json(products);
});

app.get('/products/:id', (request, response) => {
    const productId = Number.parseInt(request.params.id);
    const product = products.find((p) => p.id === productId);

    if (product) {
        response.json(product);
    } else {
        response.status(404);
    }
});

function createServer(port) {
    return app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
module.exports = { createServer };
