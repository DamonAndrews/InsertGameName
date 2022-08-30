import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import { MDBFooter, MDBContainer} from 'mdb-react-ui-kit';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return ( 
<MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Tired of running the Maze Runner</span>
            <Link to="/gameover">
            <button id="leaderBoardButton">End Game</button>
            </Link>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white'>
           Ball Runner
        </a>
      </div>
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
    </MDBFooter>
  );
};

export default Footer;