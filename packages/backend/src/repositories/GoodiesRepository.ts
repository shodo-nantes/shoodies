import { Goody } from 'types/goody';

export async function getGoodies(): Promise<Goody[]> {
    return [
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
    ];
}
