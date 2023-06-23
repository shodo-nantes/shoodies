import app from 'app';
import supertest from 'supertest';

import { getGoodies } from 'repositories/GoodiesRepository';

const request = supertest;

jest.mock('repositories/GoodiesRepository', () => ({
    ...jest.requireActual('repositories/GoodiesRepository'),
    getGoodies: jest.fn().mockReturnValue(
        Promise.resolve([
            { name: 'Casquette bleu', image: 'http://my-image.com/casquette-bleu.jpg' },
            { name: 'Casquette noir', image: 'http://my-image.com/casquette-noir.jpg' },
        ]),
    ),
}));
describe('Api', () => {
    it('should return an array of goodies', async () => {
        const result = await request(app).get('/api/goodies');
        expect(result.statusCode).toBe(200);
        expect(result.body.length).toBe(2);
        expect(getGoodies).toHaveBeenCalled();
        expect(result.body).toMatchObject([
            { name: 'Casquette bleu', image: 'http://my-image.com/casquette-bleu.jpg' },
            { name: 'Casquette noir', image: 'http://my-image.com/casquette-noir.jpg' },
        ]);
    });
});
