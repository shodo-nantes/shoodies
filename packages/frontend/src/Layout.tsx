import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <header>
                <nav>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
                            >
                                Shoodies
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </nav>
            </header>

            <Container maxWidth="lg" component="main" role="main">
                <Outlet />
            </Container>
        </>
    );
}
