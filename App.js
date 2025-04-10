const { BrowserRouter, Route, Switch, Link, useHistory } = ReactRouterDOM;

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
            title: "Academic Research",
            items: [
                "Downloadable Formats / Templates for Research Scholars",
                "Research Code of Ethics at VIT"
            ],
            count: 2,
            path: "/research"
        }
    ];

    const handleItemClick = (section, item) => {
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
                        onItemClick={(item) => handleItemClick(section, item)}
                    />
                ))}
            </div>
        </nav>
    );
}

function ContentCard({ title, items, icon = "bolt", type = "default" }) {
    const cardClasses = {
        default: "section-card",
        important: "important-notice"
    };

    return (
        <section className={cardClasses[type]}>
            <h2 className="text-xl font-bold mb-4 text-blue-800">{title}</h2>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        className="flex items-start text-gray-700 hover:text-gray-900 cursor-pointer group"
                    >
                        <i className={`fas fa-${icon} ${icon === 'bolt' ? 'lightning-icon' : 'text-red-500 mr-2 mt-1'}`}></i>
                        <span className="group-hover:text-blue-600 transition-colors">{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function HomePage() {
    const sections = [
        {
            title: "Academics",
            items: [
                "Summer Semester 2024-2025 - Academic Calendar",
                "Winter Semester 2024-2025 - Revised Academic Calendar",
                "Winter Weekend Intra Semester (WWI) 2024-2025 - Academic Calendar"
            ]
        },
        {
            title: "COE",
            items: [
                "FAT schedule - Regular Arrear and ReFAT - May 2025",
                "Revised FAT Schedule - Winter Semester 2024-25"
            ]
        },
        {
            title: "Others",
            items: [
                "Kind attention, Final year students. Kindly register on VTOP for grade sheet collection. Phase 3 distribution will take place from April 7th to April 30th. Grade sheets will be distributed only in the selected slots."
            ],
            icon: "exclamation-circle",
            type: "important"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
                <ContentCard key={index} {...section} />
            ))}
        </div>
    );
}

function AcademicsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <ContentCard
                title="Academic Calendar"
                items={[
                    "Summer Semester 2024-2025 - Academic Calendar",
                    "Winter Semester 2024-2025 - Revised Academic Calendar",
                    "Winter Weekend Intra Semester (WWI) 2024-2025",
                    "Winter Semester 2024-2025 - Academic Calendar for all programmes"
                ]}
            />
        </div>
    );
}

function COEPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <ContentCard
                title="Examination Schedule"
                items={[
                    "FAT schedule - Regular Arrear and ReFAT - May 2025",
                    "FAT Schedule - Self-study courses - Winter Semester 2024-25",
                    "Revised FAT Schedule - Winter Semester 2024-25"
                ]}
            />
        </div>
    );
}

function ResearchPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <ContentCard
                title="Research Resources"
                items={[
                    "Downloadable Formats / Templates for Research Scholars",
                    "Research Code of Ethics at VIT"
                ]}
            />
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
            </Switch>
        </main>
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
