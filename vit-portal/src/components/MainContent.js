import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AcademicsPage from '../pages/AcademicsPage';
import COEPage from '../pages/COEPage';
import ResearchPage from '../pages/ResearchPage';
import MarksView from '../pages/MarksView';

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

export default MainContent;
