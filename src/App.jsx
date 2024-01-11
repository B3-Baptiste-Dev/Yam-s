import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Results from "./components/Resultat.jsx";
import Description from "./components/Description.jsx";
import './App.css';

function App() {
    return (
        <Router>
            <div className="nav-bar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/description" className="nav-link">Description</Link>
            </div>
            <div className="home-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resultat" element={<Results />} />
                    <Route path="/description" element={<Description />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
