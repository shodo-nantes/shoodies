import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.use(express.json());

app.get('/', (request: Request, response: Response) => {
    response.send({ message: 'Hello World!' });
});

export default app;
