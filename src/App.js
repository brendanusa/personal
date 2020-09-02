import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Awards from './Awards';
import Mom from './Mom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import backgroundImage from './bkgd-edge.png';


class App extends Component {

  updateBackgroundImage() {
    console.log(typeof document.body.style)
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }

  render() {
    return (
      <div className="App">
        <img className="hidden" src={backgroundImage} alt="null" onLoad={this.updateBackgroundImage} />
        <Router>
        <div>
          <Header />
          <Route path='/' exact component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/awards' component={Awards}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/mom' component={Mom}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
