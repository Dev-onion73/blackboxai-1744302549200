import React from 'react';

function AcademicsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="section-card">
                <h2 className="text-xl font-bold mb-4 text-blue-800">Academic Calendar</h2>
                <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                        <i className="fas fa-bolt lightning-icon"></i>
                        Summer Semester 2024-2025 - Academic Calendar
                    </li>
                    <li className="flex items-center text-gray-700">
                        <i className="fas fa-bolt lightning-icon"></i>
                        Winter Semester 2024-2025 - Revised Academic Calendar
                    </li>
                    <li className="flex items-center text-gray-700">
                        <i className="fas fa-bolt lightning-icon"></i>
                        Winter Weekend Intra Semester (WWI) 2024-2025
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AcademicsPage;
