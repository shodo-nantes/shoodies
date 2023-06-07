import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AppBarComponent() {
    return (
        <AppBar component="header" role="banner" position="static">
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
    );
}
