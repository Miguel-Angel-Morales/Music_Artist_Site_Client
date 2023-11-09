// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Music from './Music';
import Merch from './Merch';
import Tour from './Tour';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/music" component={Music} />
                <Route path="/merch" component={Merch} />
                <Route path="/tour" component={Tour} />
            </Switch>
        </Router>
    );
}

export default App;
