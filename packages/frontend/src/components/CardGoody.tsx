import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Goody } from 'types/goody';
import { getGoodyRoute } from 'utils/routes';

interface CardGoodyProps {
    goody: Goody;
}

export default function CardGoody({ goody }: CardGoodyProps) {
    return (
        <Card sx={{ maxWidth: 345 }} elevation={3}>
            <CardMedia
                sx={{
                    maxWidth: 345,
                }}
                component="img"
                image={goody.image}
            />
            <CardContent>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    {goody.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={getGoodyRoute(goody.id)} size="small">
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}
