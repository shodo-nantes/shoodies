import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CardGoody from 'components/CardGoody';
import { Goody } from 'types/goody';

export default function Home() {
    const listGoodies: Goody[] = [
        {
            image: '/public/casquette-bleu-1.jpeg',
            name: 'Adrien avec casquette',
        },
        {
            image: '/public/casquette-noir.jpg',
            name: 'Casquette Noire',
        },

        {
            image: 'gourde.jpg',
            name: 'Gourde',
        },
        {
            image: '/public/mug.jpg',
            name: 'Mug',
        },
        {
            image: '/public/sac-a-dos.jpg',
            name: 'Sac à dos',
        },
        {
            image: '/public/sweatshirt-front.jpg',
            name: 'Sweatshirt',
        },
        {
            image: '/public/t-shirt-rouge-front.jpg',
            name: 'T-Shirt Rouge',
        },
        {
            image: '/public/t-shirt-noir-front.jpg',
            name: 'T-Shirt Noir',
        },
    ];

    return (
        <>
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center',
                    margin: 10,
                }}
            >
                Pick your Shoodies
            </Typography>
            <Grid container spacing={10}>
                {listGoodies.map((goody) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <CardGoody key={(goody.image, goody.name)} image={goody.image} name={goody.name} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
