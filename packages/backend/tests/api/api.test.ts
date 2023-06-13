import app from 'app';
import supertest from 'supertest';

const request = supertest;

describe('Api', () => {
    it('should return a mug in a list of goodies', async () => {
        const result = await request(app).get('/api/goodies').expect(200);
        expect(result.body).toContainEqual(expect.objectContaining({ name: 'Mug' }));
    });

    it('should return a list of goodies', async () => {
        const result = await request(app).get('/api/goodies').expect(200);

        expect(result.body).toEqual([
            {
                name: 'Mug',
                image: 'https://placehold.co/600x400',
            },
            {
                name: 'T-Shirt',
                image: 'https://placehold.co/500x400',
            },
            {
                name: 'Sticker',
                image: 'https://placehold.co/600x300',
            },
            {
                name: 'Hoodie',
                image: 'https://placehold.co/450x200',
            },
            {
                name: 'Casquette',
                image: 'https://placehold.co/550x350',
            },
        ]);
    });
});
