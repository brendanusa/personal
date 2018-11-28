import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <Header />
          <Route path='/' exact component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
