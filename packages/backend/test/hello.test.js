const request = require('supertest');
const SERVER_URL = 'http://localhost:4400';

const { createServer } = require('../src/server');

test('First test', async () => {
    const server = createServer(4400);
    request(SERVER_URL).get('/').expect(200);
    server.close();
});

test('Test /products endpoint', async () => {
    const server = createServer(4400);
    await request(SERVER_URL)
        .get('/products')
        .expect(200)
        .expect(function (response) {
            expect(response.body.length).toEqual(6);
            const cards = response.body;
            expect(cards[0].id).toEqual(0);
        });

    server.close();
});

test('Test getProductById', async () => {
    const server = createServer(4400);
    const productId = 1;
    const response = await request(SERVER_URL).get(`/products/${productId}`);
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(productId);
    server.close();
});
