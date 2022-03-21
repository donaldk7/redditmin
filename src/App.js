import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import HomePage from './pages/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>      
    </Router>
  );
}

export default App;
