import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';

export default function AppBarComponent() {
    return (
        <AppBar component="header" role="banner" position="static" color="primary">
            <Toolbar>
                <Container sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
                    <Link component="a" href="/" sx={{ justifyContent: 'center' }}>
                        <img alt="shodo nantes logo" src="logo_nantes.png" width="60rem" />
                    </Link>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
