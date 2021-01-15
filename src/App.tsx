import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/HomePage';
import ResultPage from './pages/ResultPage/ResultPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/results' component={ResultPage} />
        <Route path='/detail/:id' component={DetailPage} />
        <Route path='/' component={HomePage} /> 
      </Switch>
    </Router>
  );
}

export default App;
