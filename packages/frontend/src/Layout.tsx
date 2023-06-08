import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import AppBarComponent from 'components/AppBar';

export default function Layout() {
    const [hello, setHello] = useState('toto');
    useEffect(() => {
        const message = async () => {
            const rawResponse = await fetch(import.meta.env.VITE_API_URL);
            const jsonResponse = await rawResponse.json();
            setHello(jsonResponse.message);
        };
        message();
    });
    return (
        <>
            <AppBarComponent />
            <h1>{hello}</h1>
            <Container maxWidth="lg" component="main" role="main">
                <Outlet />
            </Container>
        </>
    );
}
