import { Routes, Route } from 'react-router-dom';

import { GOODY_ROUTE } from 'constants/routes';
import Goody from 'pages/Goody';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

import Layout from './Layout';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path={GOODY_ROUTE} element={<Goody />} />

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
