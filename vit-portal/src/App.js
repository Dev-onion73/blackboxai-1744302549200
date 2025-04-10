import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />
                    <MainContent />
                </div>
            </div>
        </Router>
    );
}

export default App;
