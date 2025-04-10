import React from 'react';

function MarksTable({ data }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="px-4 py-2 border">Sl.No.</th>
                        <th className="px-4 py-2 border">Mark Title</th>
                        <th className="px-4 py-2 border">Max. Mark</th>
                        <th className="px-4 py-2 border">Weightage %</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Scored Mark</th>
                        <th className="px-4 py-2 border">Weightage Mark</th>
                        <th className="px-4 py-2 border">Class Average</th>
                        <th className="px-4 py-2 border">Mark Posted Strength</th>
                        <th className="px-4 py-2 border">Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border">{row.slNo}</td>
                            <td className="px-4 py-2 border">{row.markTitle}</td>
                            <td className="px-4 py-2 border">{row.maxMark}</td>
                            <td className="px-4 py-2 border">{row.weightage}</td>
                            <td className="px-4 py-2 border">{row.status}</td>
                            <td className="px-4 py-2 border">{row.scoredMark}</td>
                            <td className="px-4 py-2 border">{row.weightageMark}</td>
                            <td className="px-4 py-2 border">{row.classAverage}</td>
                            <td className="px-4 py-2 border">{row.markPostedStrength}</td>
                            <td className="px-4 py-2 border">{row.remark}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MarksTable;
