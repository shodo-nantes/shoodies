import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </main>

            <Footer />
        </Router>
    );
}

export default App;
