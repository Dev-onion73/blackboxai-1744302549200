const { BrowserRouter, Route, Switch, Link, useHistory } = ReactRouterDOM;
const React = window.React;
const Fragment = React.Fragment;

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

function CourseRow({ data, expanded, onToggle }) {
    const handleRowClick = () => {
        onToggle();
    };

    return (
        <Fragment>
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
        </Fragment>
    );
}

function MarksView() {
    const [semester, setSemester] = React.useState("Winter Semester 2024-25");
    const [expandedRow, setExpandedRow] = React.useState(null);
    
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

function MainContent() {
    return (
        <main className="p-6 flex-1 bg-gray-50 overflow-y-auto">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/academics" component={AcademicsPage} />
                <Route path="/coe" component={COEPage} />
                <Route path="/research" component={ResearchPage} />
                <Route path="/marks" component={MarksView} />
            </Switch>
        </main>
    );
}

function Header() {
    const [showQuickLinks, setShowQuickLinks] = React.useState(false);
    
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

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />
                    <MainContent />
                </div>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
