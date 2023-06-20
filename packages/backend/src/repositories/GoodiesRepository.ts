import { Goody } from 'types/goody';

export async function getGoodies(): Promise<Goody[]> {
    return [
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
    ];
}
