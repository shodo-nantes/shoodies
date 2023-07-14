import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

export default function Goody() {
    const { id } = useParams();

    console.info('id', id);

    return (
        <>
            <Typography variant="h1">Goody</Typography>
        </>
    );
}
