import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';
        
// SELECT TEAMS LINK
// <span>
//   <Link to={'/teamselect'} style={{marginRight:"40px"}}>SELECT TEAMS</Link>
// </span>

const Header = () => (
  <div className="Header">
    <div className="link">
      <Link to={'/home'}>
        <span>HOME</span>
      </Link>
      <Link to={'/projects'}>
        <span>PROJECTS</span>
      </Link>
      <Link to={'/awards'}>
        <span>AWARDS</span>
      </Link>
      <Link to={'/contact'}>
        <span>CONTACT</span>
      </Link>
    </div>
  </div>
)

export default Header;