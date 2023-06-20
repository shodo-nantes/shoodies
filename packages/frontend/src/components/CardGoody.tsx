import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Goody } from 'types/goody';

export default function CardGoody(props: Goody) {
    const { image, name } = props;

    return (
        <Card sx={{ maxWidth: 300, m: 'auto' }} elevation={0}>
            <CardMedia
                referrerPolicy="no-referrer"
                sx={{
                    maxWidth: 345,
                }}
                component="img"
                image={image}
            />
            <CardContent>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        fontSize: 23,
                        fontWeight: 400,
                        fontFamily: 'Roboto Mono Variable',
                    }}
                >
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}
