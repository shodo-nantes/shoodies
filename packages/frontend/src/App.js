import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Article from "./components/Article";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
