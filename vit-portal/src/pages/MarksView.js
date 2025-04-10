import React, { useState } from 'react';
import CourseRow from '../components/CourseRow';

function MarksView() {
    const [semester, setSemester] = useState("Winter Semester 2024-25");
    const [expandedRow, setExpandedRow] = useState(null);
    
    const courseData = [
        {
            slNo: "1",
            classNbr: "CH2024250500021",
            courseCode: "BSTS102P",
            courseTitle: "Quantitative Skills Practice II",
            courseType: "Soft Skill",
            courseSystem: "CBCS",
            faculty: "ETHNUS (APT)",
            slot: "B1+TB1",
            courseMode: "SBC01",
            marks: [
                {
                    slNo: "1",
                    markTitle: "Assessment - 2",
                    maxMark: "15",
                    weightage: "15",
                    status: "Present",
                    scoredMark: "15.0",
                    weightageMark: "15",
                    classAverage: "",
                    markPostedStrength: "",
                    remark: ""
                },
                {
                    slNo: "2",
                    markTitle: "Continuous Assessment Test - I",
                    maxMark: "30",
                    weightage: "15",
                    status: "Present",
                    scoredMark: "17.0",
                    weightageMark: "8.5",
                    classAverage: "",
                    markPostedStrength: "",
                    remark: ""
                }
            ]
        },
        {
            slNo: "2",
            classNbr: "CH2024250502196",
            courseCode: "BCSE324L",
            courseTitle: "Foundations of Blockchain Technology",
            courseType: "Theory Only",
            courseSystem: "CBCS",
            faculty: "MALATHI D",
            slot: "G1+TG1",
            courseMode: "CBL",
            marks: [
                {
                    slNo: "1",
                    markTitle: "Continuous Assessment Test - I",
                    maxMark: "50",
                    weightage: "15",
                    status: "Present",
                    scoredMark: "15.0",
                    weightageMark: "4.5",
                    classAverage: "",
                    markPostedStrength: "",
                    remark: ""
                }
            ]
        }
    ];

    return (
        <div className="p-6 max-w-full mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Marks View</h1>
            
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Semester
                </label>
                <select 
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-64 p-2 border rounded-md bg-white shadow-sm"
                >
                    <option>Winter Semester 2024-25</option>
                </select>
            </div>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-4 py-3 border">Sl.No.</th>
                            <th className="px-4 py-3 border">ClassNbr</th>
                            <th className="px-4 py-3 border">Course Code</th>
                            <th className="px-4 py-3 border">Course Title</th>
                            <th className="px-4 py-3 border">Course Type</th>
                            <th className="px-4 py-3 border">Course System</th>
                            <th className="px-4 py-3 border">Faculty</th>
                            <th className="px-4 py-3 border">Slot</th>
                            <th className="px-4 py-3 border">Course Mode</th>
                            <th className="px-4 py-3 border">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseData.map((course) => (
                            <CourseRow 
                                key={course.slNo}
                                data={course}
                                expanded={expandedRow === course.slNo}
                                onToggle={() => setExpandedRow(expandedRow === course.slNo ? null : course.slNo)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MarksView;
