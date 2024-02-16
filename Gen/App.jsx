import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './ReportGenerator';
import ReportGenerator from './ReportGenerator';

const App = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/report-generator">Report Generator</Link>
              </li>
            </ul>
          </nav>
  
          <hr />
  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/report-generator" component={ReportGenerator} />
          </Switch>
        </div>
      </Router>
    );
  };
  
  export default App;