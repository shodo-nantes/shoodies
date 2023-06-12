import express, { Express, Request, Response } from 'express';
import supertest from 'supertest';

import { getGoodies } from 'repositories/GoodiesRepository';
const app: Express = express();
const requestSuperTest = supertest;
app.use(express.json());

app.get('/api/goodies', async (request: Request, response: Response) => {
    const goodies = await getGoodies();
    response.send(goodies);
});

requestSuperTest('http://localHost:3000')
    .get('/api/goodies')
    .expect(200)
    .end(function (error, response) {
        if (error) throw new error();
    });
export default app;
