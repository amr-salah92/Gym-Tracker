import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Workout from './pages/Workout';
import Log from './pages/Log';
import Reports from './pages/Reports';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/workout" component={Workout} />
          <Route path="/log" component={Log} />
          <Route path="/reports" component={Reports} />
          <Route path="/" exact component={Workout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;