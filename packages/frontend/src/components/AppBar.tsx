import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function AppBarComponent() {
    return (
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
    );
}

export { AppBarComponent };
