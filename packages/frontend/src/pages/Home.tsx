import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import CardGoody from 'components/CardGoody';
import { Goody } from 'types/goody';

export default function Home() {
    const listGoodies: Goody[] = [
        {
            image: 'https://images.unsplash.com/photo-1685900337313-64cd27f0238e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
            name: 'fleur',
        },
        {
            image: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/4/3/743f5af537_50017360_meduse-dags1974-flickr-03.jpg',
            name: 'méduses',
        },
        {
            image: 'http://angelloretta1974.a.n.pic.centerblog.net/o/9f7f0359.jpg',
            name: 'papillon',
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
            <Container>
                {listGoodies.map((goodies) => (
                    <CardGoody key={(goodies.image, goodies.name)} image={goodies.image} name={goodies.name} />
                ))}
            </Container>
        </>
    );
}
