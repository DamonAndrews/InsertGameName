import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';

import Auth from '../../utils/auth';


const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    // <nav className="navbar sticky-bottom bg-primary">
    <div className="container-fluid navbar sticky-bottom bg-primary" id="footerLinks">
    <footer className="w-100 mt-auto bg-secondary p-4" >
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <div>
          {Auth.loggedIn() ? (     
          <>          
          <Link to="/login">
          <button className="btn btn-lg btn-light m-2" onClick={logout}>Logout</button>
          </Link>
            </>
          ) : (
            <>           
            </>          
          )}           
        </div>
        <h4  id="headerTitle">
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by Group 1
        </h4>
      </div>
    </footer>
    </div>
    // </nav>
  );
};

export default Footer;
