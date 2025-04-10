import React from 'react';

function COEPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="section-card">
                <h2 className="text-xl font-bold mb-4 text-blue-800">Examination Schedule</h2>
                <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                        <i className="fas fa-bolt lightning-icon"></i>
                        FAT schedule - Regular Arrear and ReFAT - May 2025
                    </li>
                    <li className="flex items-center text-gray-700">
                        <i className="fas fa-bolt lightning-icon"></i>
                        Revised FAT Schedule - Winter Semester 2024-25
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default COEPage;
