import React from 'react';

import { Link } from 'react-router-dom';

// import { useQuery } from '@apollo/client';

// import ScoreList from '../components/ScoreList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_SCORES);
//   const thoughts = data?.scores || [];

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
