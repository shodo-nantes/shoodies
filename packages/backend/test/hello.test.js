const request = require('supertest');

const app = require('../index.js');

test('First test', async () => {
    const server = app.listen(4400);
    request('http://localhost:4400').get('/').expect(200);
    server.close();
});
