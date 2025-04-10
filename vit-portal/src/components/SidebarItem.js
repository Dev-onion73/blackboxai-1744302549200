import React from 'react';

function SidebarItem({ title, items, count, icon = "bolt", onItemClick }) {
    return (
        <div className="sidebar-section">
            <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-gray-800 text-lg">{title}</h2>
                {count && <span className="badge">{count}</span>}
            </div>
            <ul className="space-y-2.5">
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        className="sidebar-item text-sm text-gray-700 cursor-pointer"
                        onClick={() => onItemClick && onItemClick(item)}
                    >
                        <i className={`fas fa-${icon} lightning-icon`}></i>
                        <span className="hover:text-blue-600">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SidebarItem;
