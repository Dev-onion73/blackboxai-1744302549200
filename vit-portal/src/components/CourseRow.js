import React from 'react';
import MarksTable from './MarksTable';

function CourseRow({ data, expanded, onToggle }) {
    const handleRowClick = () => {
        onToggle();
    };

    return (
        <>
            <tr 
                onClick={handleRowClick}
                className="bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                style={{ userSelect: 'none' }}
            >
                <td className="px-4 py-2 border">{data.slNo}</td>
                <td className="px-4 py-2 border">{data.classNbr}</td>
                <td className="px-4 py-2 border">{data.courseCode}</td>
                <td className="px-4 py-2 border">{data.courseTitle}</td>
                <td className="px-4 py-2 border">{data.courseType}</td>
                <td className="px-4 py-2 border">{data.courseSystem}</td>
                <td className="px-4 py-2 border">{data.faculty}</td>
                <td className="px-4 py-2 border">{data.slot}</td>
                <td className="px-4 py-2 border">{data.courseMode}</td>
                <td className="px-4 py-2 border text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8">
                        <i className={`fas fa-chevron-${expanded ? 'up' : 'down'} text-blue-600 transform transition-transform duration-200`}></i>
                    </div>
                </td>
            </tr>
            {expanded && (
                <tr>
                    <td colSpan="10" className="p-0 border-b">
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                            <MarksTable data={data.marks} />
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}

export default CourseRow;
