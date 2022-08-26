import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav class="navbar fixed-bottom bg-primary">
    <div class="container-fluid" id="footerLinks">
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
    </nav>
  );
};

export default Footer;
