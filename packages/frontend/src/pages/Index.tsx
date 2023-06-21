import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { redirect } from 'react-router-dom';

export default function Index() {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('storedAccessToken'));
    const handleLogin = (response) => {
        if (response.error) {
            return;
        }
        localStorage.setItem('storedAccessToken', response.accessToken);
        setAccessToken(response.accessToken);
    };
    if (accessToken) {
        return redirect('/');
    }
    return (
        <>
            <GoogleLogin
                clientId="votre-id-client-oauth"
                buttonText="Login avec Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
            />
        </>
    );
}
