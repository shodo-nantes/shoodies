import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

import AppBarComponent from 'components/AppBar';
export default function Layout() {
    return (
        <>
            <AppBarComponent />
            <Container maxWidth="lg" component="main" role="main">
                <Outlet />
            </Container>
        </>
    );
}
