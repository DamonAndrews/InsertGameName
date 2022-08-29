import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div class="sticky-top">
    <header class="header bg-dark">
        <nav class="navbar navbar-expand-lg bg-primary ">
          <div class="container-fluid">
    
            <div>
              <ul>
              <div class="container text-center">
              <div class="row">
              <div class="col" id="headerLinks">
              <Link className="nav-item font-roboto" aria-current="page" to="/Home">Bio</Link>
        
        <Link className="nav-item text-blue" aria-current="page" to="/Game">Work</Link>
       
        <Link className="nav-item text-blue" aria-current="page" to="/Login">Resume</Link>
       
        <Link className="nav-item text-blue" aria-current="page" to="/Scores">Contact</Link>

        </div>
      </div>
    </div>
    
              </ul>
            </div>
    
          </div>
        </nav>
    </header>
    </div>
  );
};

export default Header;
