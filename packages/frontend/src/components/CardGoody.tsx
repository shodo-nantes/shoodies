import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardGoody(props: any) {
    const { image } = props;
    const { name } = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                id="image"
                sx={{
                    maxWidth: 345,
                }}
                component={'img'}
                image={image}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    component="h5"
                    id="name"
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
