import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Container maxWidth="lg" component="main" role="main">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component="a"
                                href="/Home"
                                sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
                            >
                                Shoodies
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Outlet />
            </Container>
        </>
    );
}
