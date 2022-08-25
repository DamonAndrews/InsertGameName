import React from 'react';

import { Link } from 'react-router-dom';

// Import the `useParams()` hook
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import { QUERY_SCORES } from '../utils/queries';

const Scores = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  // const { thoughtId } = useParams();

  // const { loading, data } = useQuery(QUERY_SCORES, {
  //   // pass URL parameter
  //   // variables: { thoughtId: thoughtId },
  // });

  // const score = data?.score || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <main>
    <h1>Top High Scores:</h1>
  <Link to="/">
    <button>Return to Start</button>
  </Link>

  </main>
  );
};

export default Scores;
