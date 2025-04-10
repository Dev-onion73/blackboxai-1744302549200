import React from 'react';

function ResearchPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="section-card">
                <h2 className="text-xl font-bold mb-4 text-blue-800">Research Resources</h2>
                <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                        <i className="fas fa-bolt lightning-icon"></i>
                        Downloadable Formats / Templates for Research Scholars
                    </li>
                    <li className="flex items-center text-gray-700">
                        <i className="fas fa-bolt lightning-icon"></i>
                        Research Code of Ethics at VIT
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ResearchPage;
