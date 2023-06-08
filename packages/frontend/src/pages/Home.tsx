import Typography from '@mui/material/Typography';

import CardGoody from 'components/CardGoody';
import { Goody } from 'types/goody';

export default function Home() {
    const listGoodies: Goody[] = [
        {
            image: 'https://images.unsplash.com/photo-1685900337313-64cd27f0238e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
            name: 'produit1',
        },
        {
            image: 'https://images.unsplash.com/photo-1685900337313-64cd27f0238e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
            name: 'produit2',
        },
    ];

    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    textAlign: 'center',
                }}
            >
                Shoodies
            </Typography>
            <div>
                {listGoodies.map(({ image, name }) => (
                    <CardGoody></CardGoody>
                ))}
            </div>
        </>
    );
}
