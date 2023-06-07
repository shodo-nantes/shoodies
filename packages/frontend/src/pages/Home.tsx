import Typography from '@mui/material/Typography';

import CardComponent from 'components/Card';
export default function Home() {
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
            <CardComponent />
        </>
    );
}
