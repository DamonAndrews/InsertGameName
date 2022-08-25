import React from 'react';

import { Link } from 'react-router-dom';

const GameOver = () => {
  return (
    <main>
    <h1>GAME OVER!!!</h1>
    <h2>Final Score:</h2>
  <Link to="/game">
    <button>Play Again</button>
  </Link>
  <Link to="/scores">
    <button>Leaderboard</button>
  </Link>
  </main>
  )
}

export default GameOver;