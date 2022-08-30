import React from 'react';

import { Link } from 'react-router-dom';

const GameOver = () => {
  return (
    <main>
      <h1 id="flexBox">GAME OVER!!!</h1>
      <h2 id="flexBox">Final Score:</h2>
    <div id="flexBox">
  <Link to="/game">
    <button>Play Again</button>
  </Link>
  <Link to="/scores">
    <button>Leaderboard</button>
  </Link>
    <br></br>
    <br></br>
  </div>
  </main>
  )
}

export default GameOver;