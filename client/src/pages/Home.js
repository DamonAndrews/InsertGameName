import React from 'react';

import Auth from '../utils/auth';

// if (Auth.loggedIn()) {
//   return <Navigate to="/home" />;
// };

import { Link, Navigate } from 'react-router-dom';
import maze from '../components/maze.png'


const Home = () => {

  // if (!Auth.loggedIn()) {
  //   return <Navigate to="/login" />;
  // };


  return (
    <div id="flexBox">
    <main>
    <br></br>
    <br></br>
    <br></br>
    <h1>Welcome to our game!</h1>
    <br></br>
    <div id="flexBox">
      <Link to="/game">
        <button id="startButton">Start New Game</button>
      </Link>
      <Link to="/scores">
        <button id="leaderBoardButton">Leaderboard</button>
      </Link>
      </div>

      <img src={maze}></img>

    </main>
    </div>
  );
};


export default Home;
