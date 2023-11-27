import request from 'supertest';

import app from '../index';

let server;

beforeEach((done) => {
    server = app.listen(4400, done);
});

afterAll((done) => {
    server.close(done);
});

test('First test', async () => {
    await request('http://localhost:4400').get('/').expect(200);
});
