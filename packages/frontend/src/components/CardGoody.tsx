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
        <Card sx={{ maxWidth: 300, m: 'auto' }} elevation={0}>
            <CardMedia
                referrerPolicy="no-referrer"
                sx={{
                    maxWidth: 345,
                }}
                component="img"
                image={goody.image}
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
