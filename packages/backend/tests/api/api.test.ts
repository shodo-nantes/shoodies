import app from 'app';
import supertest from 'supertest';

const request = supertest;

describe('Api', () => {
    it('should return a list of goodies', async () => {
        const result = await request(app).get('/api/goodies').expect(200);

        expect(result.body).toEqual([
            {
                id: 'mug',
                name: 'Mug',
                image: 'https://placehold.co/600x400',
            },
            {
                id: 't-shirt',
                name: 'T-Shirt',
                image: 'https://placehold.co/500x400',
            },
            {
                id: 'sticker',
                name: 'Sticker',
                image: 'https://placehold.co/600x300',
            },
            {
                id: 'hoodie',
                name: 'Hoodie',
                image: 'https://placehold.co/450x200',
            },
            {
                id: 'hat',
                name: 'Casquette',
                image: 'https://placehold.co/550x350',
            },
        ]);
    });
});
