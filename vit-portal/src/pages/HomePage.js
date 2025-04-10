import React from 'react';

function HomePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="section-card">
                <h2 className="text-xl font-bold mb-4 text-blue-800">Welcome to VIT Chennai Campus</h2>
                <p className="text-gray-600">Access your academic information, course details, and more.</p>
            </div>
            
            <div className="section-card">
                <h2 className="text-xl font-bold mb-4 text-blue-800">Recent Updates</h2>
                <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                        <i className="fas fa-bolt lightning-icon"></i>
                        Summer Semester 2024-2025 - Academic Calendar
                    </li>
                    <li className="flex items-center text-gray-700">
                        <i className="fas fa-bolt lightning-icon"></i>
                        FAT Schedule Updates
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
