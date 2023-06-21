import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
// import Index from 'pages/Index';
import NotFound from 'pages/NotFound';

import Layout from './Layout';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Index />} /> */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
