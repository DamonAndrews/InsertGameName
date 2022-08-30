import React from 'react';
import Auth from '../utils/auth';

import { Link, Navigate } from 'react-router-dom';
import maze from '../components/maze.png';

const Home = () => {

  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  };

  return (
    <div id="flexBox">
    <main>
    <h1 id="flexBox">Welcome to our game!</h1>
    <br></br>
    <div id="flexBox">
      <Link to="/game">
        <button id="startButton" class="startButton">Start New Game</button>
      </Link>
      </div>
      <img src={maze}></img>

    </main>
    </div>
  );
};

export default Home;
