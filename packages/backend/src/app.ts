import express, { Express, Request, Response } from 'express';

import { getGoodies } from 'repositories/GoodiesRepository';
const app: Express = express();

app.use(express.json());

app.get('/api/goodies', async (request: Request, response: Response) => {
    const goodies = await getGoodies();
    response.send(goodies);
});

export default app;
