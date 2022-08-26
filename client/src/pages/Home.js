import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <main>
    <h1>Welcome to our game!</h1>
  <Link to="/game">
  <button>
    Start New Game
  </button>
</Link>
<Link to="/scores">
  <button>
    Leaderboard
  </button>
</Link>
</main>
  );
};

export default Home;
