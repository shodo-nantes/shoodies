import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Goody } from 'types/goody';

export default function CardGoody(props: Goody) {
    const { image, name } = props;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{
                    maxWidth: 345,
                }}
                component="img"
                image={image}
            />
            <CardContent>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}
