import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardComponent() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{
                    maxWidth: 345,
                }}
                component={'img'}
                image="https://images.unsplash.com/photo-1685900337313-64cd27f0238e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                title="a hand holding a pink poppy"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        textAlign: 'center',
                        fontSize: 25,
                    }}
                >
                    Nom du produit
                </Typography>
            </CardContent>
        </Card>
    );
}
