import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [showQuickLinks, setShowQuickLinks] = useState(false);
    
    return (
        <header className="bg-blue-600 text-white p-3 flex justify-between items-center shadow-lg sticky top-0 z-50">
            <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-4 hover:opacity-90 transition-opacity">
                    <img src="https://vit.ac.in/images/logo.png" alt="VIT Logo" className="h-10" />
                    <h1 className="text-xl font-semibold">(Chennai Campus)</h1>
                </Link>
            </div>
            <div className="flex items-center space-x-4 relative">
                <button 
                    className="quick-links-btn"
                    onClick={() => setShowQuickLinks(!showQuickLinks)}
                >
                    Quick Links
                    <i className={`fas fa-chevron-${showQuickLinks ? 'up' : 'down'}`}></i>
                </button>
                {showQuickLinks && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 text-gray-800">
                        <div className="space-y-2">
                            <Link to="/academics" className="block p-2 hover:bg-gray-100 rounded">
                                <i className="fas fa-graduation-cap mr-2"></i>Academics
                            </Link>
                            <Link to="/coe" className="block p-2 hover:bg-gray-100 rounded">
                                <i className="fas fa-book mr-2"></i>COE
                            </Link>
                            <Link to="/marks" className="block p-2 hover:bg-gray-100 rounded">
                                <i className="fas fa-chart-bar mr-2"></i>Marks View
                            </Link>
                            <Link to="/research" className="block p-2 hover:bg-gray-100 rounded">
                                <i className="fas fa-flask mr-2"></i>Research
                            </Link>
                        </div>
                    </div>
                )}
                <div className="header-profile">
                    <i className="fas fa-user-circle text-2xl"></i>
                    <span className="font-medium">23BCE5062 (STUDENT)</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
