import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import './styles.css';

function App() {
    return (
        <Router>
            <main>
                <Header />
                <Skills />
                <Projects />
                <Routes>
            
                    <Route path="/projects" element={<Projects />} />
                  
                </Routes>
                <Footer />
            </main>
        </Router>
    );
}

export default App;
