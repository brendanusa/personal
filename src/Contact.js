import React from 'react';
import './Contact.css'
import githubLogo from './GitHub-Light-120.png';
import linkedinLogo from './ln-128.png';
import gmailLogo from './gmail-128.png';


// console.log(githubLogo)

const Contact = () => {

  return (

    <div className="Contact">
      <div className="left">
        <a href='https://github.com/brendanusa'>
          <img src={githubLogo} />
        </a>
      </div>
      <div className="center">
        <a href='https://www.linkedin.com/in/brendan-bansavage'>
          <img src={linkedinLogo} />
        </a>
      </div>
      <div className="right">
        <a href='mailto: brendanbansavage@gmail.com'>
          <img src={gmailLogo} />
        </a>
      </div>
    </div>

  )

}

export default Contact;