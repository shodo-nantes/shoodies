import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

import { getGoodies } from 'api/GoodiesApi';
import CardGoody from 'components/CardGoody';
import { Goody } from 'types/goody';

export default function Home() {
    const [goodies, setGoodies] = useState<Goody[]>([]);

    const fetchGoodies = async () => {
        const goodiesFetched: Goody[] = await getGoodies();

        setGoodies(goodiesFetched);
    };

    useEffect(() => {
        fetchGoodies();
    }, []);

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
                {goodies.map((goody) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <CardGoody key={(goody.image, goody.name)} image={goody.image} name={goody.name} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
