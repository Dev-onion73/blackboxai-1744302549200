import React from 'react';
import { useHistory } from 'react-router-dom';
import SidebarItem from './SidebarItem';

function Sidebar() {
    const history = useHistory();
    const sections = [
        {
            title: "Academics",
            items: [
                "Summer Semester 2024-2025 - Academic Calendar",
                "Winter Semester 2024-2025 - Revised Academic Calendar",
                "Winter Weekend Intra Semester (WWI) 2024-2025",
                "Winter Semester 2024-2025 - Academic Calendar for all programmes"
            ],
            count: 4,
            path: "/academics"
        },
        {
            title: "COE",
            items: [
                "FAT schedule - Regular Arrear and ReFAT - May 2025",
                "FAT Schedule - Self-study courses - Winter Semester 2024-25",
                "Revised FAT Schedule - Winter Semester 2024-25"
            ],
            count: 3,
            path: "/coe"
        },
        {
            title: "Marks View",
            items: [
                "View Semester Marks",
                "Academic Performance"
            ],
            count: 2,
            path: "/marks"
        },
        {
            title: "Academic Research",
            items: [
                "Downloadable Formats / Templates for Research Scholars",
                "Research Code of Ethics at VIT"
            ],
            count: 2,
            path: "/research"
        }
    ];

    const handleItemClick = (section) => {
        history.push(section.path);
    };

    return (
        <nav className="bg-white w-80 min-h-screen p-4 border-r border-gray-200 overflow-y-auto">
            <div className="text-xl font-bold mb-4 text-gray-800">Spotlight</div>
            <div className="space-y-4">
                {sections.map((section, index) => (
                    <SidebarItem 
                        key={index} 
                        {...section} 
                        onItemClick={() => handleItemClick(section)}
                    />
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;
