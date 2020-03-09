import React from 'react';
import HomePage from './components/HomePage/HomePage'
import TravelPage from './components/TravelPage/TravelPage'
import AboutPage from './components/AboutPage/AboutPage'
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/travels' component={TravelPage} />
        <Route path='/about-us' component={AboutPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
