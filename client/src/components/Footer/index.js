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
    <footer className="w-100 mt-auto bg-success p-4 text-dark container-fluid" id="footerLinks">   
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
        <h4  id="footerTitle">
            
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
