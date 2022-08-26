import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
            <h1 className="m-0" id="headerTitle" >Ball Runner</h1>
          <p className="m-0"  id="headerTitle">Good luck escaping the madness of the maze</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
