import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import maze from '../../components/maze.png';
import ball from '../../components/ball.png';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();

  };

  return (
    <header className="bg-success navbar text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <h1 className="m-0" id="headerTitle" >
            Ball
            <img src={maze} class="ballRunner"></img>
            Runner</h1>
              <p className="m-0"  id="headerTitle">Good luck escaping the madness of the maze</p>
        </div>
      <div id="flexBox">
        {Auth.loggedIn() ? (     
          <>          
           <Link to="/scores">
           <button className="btn btn-lg btn-light m-2" >SCORES</button>
          </Link>
          </>
          ) : (
          <>           
          </>          
        )}           
      </div>
        <div>
          <img src={ball} class="ballRunner"></img>
        </div>  
      </div>
    </header>
  );
};

export default Header;
