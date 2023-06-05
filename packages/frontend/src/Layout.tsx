import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Container maxWidth="lg" component="main" role="main">
                <Outlet />
            </Container>
        </>
    );
}
